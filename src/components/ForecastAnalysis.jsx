import React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ForecastAnalysis = (props) => {
    const useStyles = makeStyles((theme) => ({
        fab: {
          position: 'fixed',
          bottom: theme.spacing(5),
          right: theme.spacing(5),
        },
    }));
    const classes = useStyles();
    const [showScroll, setShowScroll] = React.useState(false)
    const checkScrollTop = () => {    
    if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)    
    } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)    
    }  
    };
    window.addEventListener('scroll', checkScrollTop)

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };
    return (
        <div className="forecast_analysis_container">
            <iframe src="https://www.weather-forecast.com/"  style={{width:'100%',height:'2500px'}}/>
            <Fab color="primary" className={classes.fab} onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none'}} aria-label="scroll">
                        <ExpandLessIcon />
                    </Fab>
        </div>
    )
}
export default ForecastAnalysis;