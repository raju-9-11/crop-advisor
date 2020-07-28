import React from 'react';
import { Card , Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

const PostSnippet = (props) =>{

    
    return(
        <div className="article_container" style={{marginTop:20}} >
            <Card 
                type="inner" 
                title={props.title} 
                extra={
                    <div className="post_snippet_links">
                        <a href="#">More</a>
                    </div>
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}>
                    <Meta
                    avatar={<Avatar src="https://pluspng.com/img-png/spiderman-logo-png-pin-spider-man-clipart-spiderman-logo-4-300.png" />}
                    />
                    <br />
                    <h3>{props.user}</h3>
            <p className="article_content">            
                {props.content}
            </p>
            </Card>
        </div>
    )
}

export default PostSnippet;