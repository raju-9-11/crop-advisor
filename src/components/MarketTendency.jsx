import React from 'react';
import { List , Card , Input , Affix, message } from 'antd';
import './MarketTendency.css'
const { Search } = Input;

const api = [
    {
        "id":0,
        "name":"Apple",
        "price":"Rs.100 / kg",
        "url":"https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail.jpg?w=756&h=567",
        "state":"Jammu and kashmir"
    },
    {
        "id":1,
        "name":"Orange",
        "url":"https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg",
        "price":"Rs.80 /kg",
        "state":"Gujarat"
    },
    {
        "id":2,
        "name":"Tomato",
        "url":"https://www.healthline.com/hlcmsresource/images/AN_images/tomatoes-1200x628-facebook.jpg",
        "price":"Rs.120 /kg",
        "state":"Andhra Pradesh"
    },
    {
        "id":3,
        "name":"Watermelon",
        "url":"https://media.fromthegrapevine.com/assets/images/2016/7/watermelon-whole-one-half.jpg.480x0_q71_crop-scale.jpg",
        "price":"Rs.140 /kg",
        "state":"Tamilnadu"
    },
    {
        "id":4,
        "name":"Onion",
        "url":"https://assets.telegraphindia.com/telegraph/e86a62ad-fb69-49de-92b3-1a0c3d40073f.jpg",
        "price":"Rs.150 /kg",
        "state":"Karnataka"
    },
    {
        "id":5,
        "name":"Banana",
        "url":"https://images.agoramedia.com/everydayhealth/gcms/All-About-Bananas-Nutrition-Facts-Health-Benefits-Recipes-and-More-RM-722x406.jpg",
        "price":"Rs.70 /kg",
        "state":"Kerala"
    },

]




const MarketTendency = (props) => {
    const onSearchClick = (event) => {
        message.warning("under construction")
    }
    return (
        <div className="market_tendency_container">
            <div>
                <Affix offsetTop={20} >
                    <Search className="search_container" placeholder="Input search "  onSearch={value => onSearchClick(value)} enterButton />
                </Affix>
            </div>
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
                    <List.Item onClick={onSearchClick}>
                        <Card className="card_container" title={item.name}
                        cover={<img alt="example" src={item.url} height={300}/>}>
                          <h3>
                          {item.state}<br />{item.price}
                            </h3>  
                        </Card>
                    </List.Item>
                    )}
                />
        </div>
    )
}

export default MarketTendency;