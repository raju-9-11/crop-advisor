import React , { useEffect , useState } from 'react';
import { Link } from '@reach/router'
import { Card , Avatar } from 'antd';
import { Drawer, Button, Radio, Space } from 'antd';
import './Forum.css'
import _ from 'lodash';
import db from '../../firebase'; 
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import CommentTwoToneIcon from '@material-ui/icons/CommentTwoTone';
import CreateQuery from './CreateQuery'

const { Meta } = Card;

class App extends React.Component {
  state = { visible: false, placement: 'top' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

 

  render() {
    const { placement, visible } = this.state;
    return (
      <>
        <Space>
          <Fab type="primary" onClick={this.showDrawer}>
          <CommentTwoToneIcon />
          </Fab>
        </Space>
        <Drawer
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
          height={600}
          style={{paddingTop:'40px'}}
        >
          <CreateQuery />
        </Drawer>
      </>
    );
  }
}


const Forum = (props) => {
    const useStyles = makeStyles((theme) => ({
        fab: {
          position: 'fixed',
          bottom: theme.spacing(5),
          right: theme.spacing(5),
        },
    }));
    const classes = useStyles();
    let [ queries , setQuery ] = useState([]);
    useEffect( ()=>{
        db.collection('queries')
            .onSnapshot(async queries => {
                let queryData = await queries.docs.map(query => {
                    let data = query.data()
                    let { id } = query
                    let payload ={
                        id,
                        ...data
                    }
                    return payload
                });
                setQuery(queryData)
            })
        },[])



    return (
        <div className="forum_container">
            <div className="articles_container">
                {
                    _.map(queries, (query,idx) => {
                        return(
                             <div className="article_container" style={{marginTop:20 ,}} key={idx} data={query}>
                                 <Link to ={`/query/${query.id}`} >
                                    <Card 
                                        style={{backgroundColor:'rgb(255, 255, 255,0.8)'}}
                                        className="query_snippet_container"
                                        title={_.upperCase(query.title)} 
                                        >
                                            <Meta
                                            avatar={<Avatar src="https://pluspng.com/img-png/spiderman-logo-png-pin-spider-man-clipart-spiderman-logo-4-300.png" />}
                                            />
                                            <br />
                                            <h3>{query.title}</h3>
                                    <p className="article_content">            
                                        {query.content.substring(0,1000)+' .....'}
                                    </p>
                                    </Card>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
            
            <Fab color="primary" className={classes.fab}  aria-label="scroll">
                        <App />
                    </Fab>
        </div>
    )
}
export default Forum;