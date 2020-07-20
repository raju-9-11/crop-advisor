import React from 'react';
import api from '../../mock_api';
import { List , Card } from 'antd';

const MarketTendency = (props) => {
    return (
        <div className="market_tendency_container">
            <List
                grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
                }}
                dataSource={api}
                renderItem={item => (
                <List.Item>
                    <Card title={item.name}>{item.state}<br />{item.price}</Card>
                </List.Item>
                )}
            />
        </div>
    )
}

export default MarketTendency;