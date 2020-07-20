import React from 'react';
import PostSnippet from './PostSnippet';
import _ from 'lodash';
import forum_api from '../../forum_mock_api';


const Forum = (props) => {
    return (
        <div className="forum_container">
            <div className="articles_container">
                {
                    _.map(forum_api, (post,idx) => {
                        return(
                            <PostSnippet
                             key = {idx}
                             title = {_.upperCase(post.query)}
                             content={post.content.substring(0,1000)+' .....'}
                             user = {post.name}

                             />
                        )
                    })
                }

            </div>
        </div>
    )
}
export default Forum;