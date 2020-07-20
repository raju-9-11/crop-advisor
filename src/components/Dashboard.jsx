import React from 'react';
import { Tabs , Button , Affix} from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { navigate } from '@reach/router';
import Forum from './Forum';
import ForecastAnalysis from './ForecastAnalysis';
import HistoricalReport from './HistorcalReport';
import MarketTendency from './MarketTendency';
import CreateQuery from './CreateQuery';

const { TabPane } = Tabs;


const onSignOut =() =>{
    console.log("log out")
    navigate('/')
}
const operations = <Button type="primary" onClick={onSignOut}>Sign Out</Button>;



const Dashboard = (props) => {
    return (
        <div className="dashboard_container">
            <div className="tabs_container"style={{margin:'30px'}}>
                    <Tabs defaultActiveKey="2" tabBarExtraContent={operations} >
                        <TabPane
                        tab={
                            <span>
                            <AppleOutlined />
                            Historical Report
                            </span>
                        }
                        key="1"
                        >
                        <HistoricalReport/>
                        </TabPane>
                        <TabPane
                        tab={
                            <span>
                            <AndroidOutlined />
                            Forecast Analysis
                            </span>
                        }
                        key="2"
                        >
                        <ForecastAnalysis/>
                        </TabPane>
                        <TabPane
                        tab={
                            <span>
                            <AndroidOutlined />
                            Market Tendency
                            </span>
                        }
                        key="3"
                        >
                        <MarketTendency />
                        </TabPane>
                        <TabPane
                        tab={
                            <span>
                            <AndroidOutlined />
                            Forum
                            </span>
                        }
                        key="4"
                        >
                        <Forum />
                        </TabPane>
                        <TabPane
                        tab={
                            <span>
                            <AndroidOutlined />
                            Create Query
                            </span>
                        }
                        key="5"
                        >
                        <CreateQuery />
                        </TabPane>
                    </Tabs>
                    
               
            </div>
            
        </div>
    )
}

export default Dashboard;