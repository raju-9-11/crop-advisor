import React from 'react';
import { List , Card } from 'antd';
import './MarketTendency.css'

const api = [
    {
        "id":0,
        "name":"Apple",
        "price":"Rs.100 / kg",
        "state":"Jammu and kashmir"
    },
    {
        "id":1,
        "name":"Orange",
        "url":"https://previews.123rf.com/images/erix2005/erix20051607/erix2005160700370/60029825-asian-street-farmer-market-selling-fresh-fruit-and-berry-in-hoi-an-vietnam-passion-fruit-litchi-cher.jpg",
        "price":"Rs.80 /kg",
        "state":"Gujarat"
    },
    {
        "id":2,
        "name":"Tomato",
        "url":"https://previews.123rf.com/images/mariusz_prusaczyk/mariusz_prusaczyk1511/mariusz_prusaczyk151100509/47973909-fruit-market-in-bangkok-thailand-.jpg",
        "price":"Rs.120 /kg",
        "state":"Andhra Pradesh"
    },
    {
        "id":3,
        "name":"Watermelon",
        "url":"https://previews.123rf.com/images/ruslankphoto/ruslankphoto1709/ruslankphoto170900067/85844008-fresh-fruits-at-local-market-at-phuket-thailand-.jpg",
        "price":"Rs.140 /kg",
        "state":"Tamilnadu"
    },
    {
        "id":4,
        "name":"Onions",
        "url":"https://previews.123rf.com/images/ruslankphoto/ruslankphoto1709/ruslankphoto170900067/85844008-fresh-fruits-at-local-market-at-phuket-thailand-.jpg",
        "price":"Rs.150 /kg",
        "state":"Karnataka"
    },
    {
        "id":5,
        "name":"Bananas",
        "url":"https://previews.123rf.com/images/ruslankphoto/ruslankphoto1709/ruslankphoto170900067/85844008-fresh-fruits-at-local-market-at-phuket-thailand-.jpg",
        "price":"Rs.70 /kg",
        "state":"Kerala"
    },

]





const MarketTendency = (props) => {
    return (
        <div className="market_tendency_container">
            <List
                grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 3,
                xl: 3,
                xxl: 3,
                }}
                dataSource={api}
                renderItem={item => (
                <List.Item>
                    <Card className="card_container" title={item.name}>{item.state}<br />{item.price}</Card>
                </List.Item>
                )}
            />
        </div>
    )
}

export default MarketTendency;