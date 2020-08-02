import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Box from '@material-ui/core/Box';
import Forum from './Forum';
import ForecastAnalysis from './ForecastAnalysis';
import HistoricalReport from './HistorcalReport';
import MarketTendency from './MarketTendency';
import { auth } from '../../firebase'
import { Affix, Button , message } from 'antd';
import { navigate } from '@reach/router'
import './Dashboard.css'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Dashboard(prop) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const onSignOut = () => {
        auth.signOut()
            .then(function(result) {
                message.success("logout successful");
                navigate('/')
            })
            .catch(function(error) {
                message.error("error"+error)
                console.log(error);
            })
    }
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
      
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    const operations =  <div style={{position:'fixed',top:15, right:30}}>
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleMenu}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>{prop.username}</MenuItem>
      <MenuItem onClick={onSignOut}>Sign Out</MenuItem>
    </Menu>
  </div>;

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} className="dashboard_container">
      <AppBar position="fixed" color="inherit" style={{background:'rgb(242, 233, 228)'}}>
        <Tabs
          centered={true}
          value={value}
          onChange={handleChange}
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Prediction Report" icon={<PersonPinIcon />} {...a11yProps(0)} />
          <Tab label="Weather Forecast" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Market Tendency" icon={<ShoppingBasket />} {...a11yProps(2)} />
          <Tab label="Forum" icon={<HelpIcon />} {...a11yProps(3)} />
        </Tabs>
        {operations}

      </AppBar>
      <TabPanel value={value} index={0}
        style={{backgroundImage: 'url("https://c.pxhere.com/photos/2c/fa/background_blur_blurred-991959.jpg!d")',
                padding:60 ,
                backgroundSize:'100% 100%',
                backgroundAttachment:'fixed'}}>
          <HistoricalReport />
      </TabPanel>
      <TabPanel value={value} index={1} 
      style={{backgroundImage: 'url("https://c.pxhere.com/photos/2c/fa/background_blur_blurred-991959.jpg!d")',
      padding:60 ,
      backgroundSize:'100%',
      backgroundAttachment:'fixed'}}>
          <ForecastAnalysis />
      </TabPanel>
      <TabPanel value={value} index={2}
      style={{backgroundImage: 'url("https://c.pxhere.com/photos/2c/fa/background_blur_blurred-991959.jpg!d")',
      padding:60 ,
      paddingBottom:'30%',
      backgroundSize:'100%',
      backgroundAttachment:'fixed'}}>
          <MarketTendency />
      </TabPanel>
      <TabPanel value={value} index={3}
      style={{backgroundImage: 'url("https://c.pxhere.com/photos/2c/fa/background_blur_blurred-991959.jpg!d")',
      padding:60 ,
      backgroundSize:'100%',
      backgroundAttachment:'fixed'}}>
          <Forum />
      </TabPanel>
    </div>
  );
}
