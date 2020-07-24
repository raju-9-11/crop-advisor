import React from 'react';
import { PageHeader , Input , Button } from 'antd'
const { TextArea } = Input;

const CreateQuery = () => {
    return (
        <div className="create_query_container" style={{padding:'20px'}}>
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header-1"
                    title="Create Query"
                    style={{border: '1px solid rgb(235, 237, 240)'}}
                />
            </div>
            <div className="query_inputs_container">
                <div className="query_input_container" style={{margin:'30px'}}>
                    <div className="query_input_title">
                        <h2>Query Title</h2>
                    </div>
                    <div className="query_input">
                        <Input placeholder="Query Title" />
                    </div>
                </div>
                <div className="query_input_container"  style={{margin:'30px'}}>
                    <div className="query_input_title">
                        <h2>Query Content</h2>
                    </div>
                    <div className="query_input">
                        <TextArea rows ={8} placeholder="Query Content"  />
                    </div>
                        <Button type="primary" size="large" style={{float:'right',marginTop:'20px'}}>Create Query</Button>
                </div>
                    
           </div>

        </div>
    )
}

export default CreateQuery ;