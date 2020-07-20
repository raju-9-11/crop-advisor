import React from 'react';
import { Input, Col, Row, Button , InputNumber, DatePicker, Card , Cascader , Tooltip } from 'antd';

const HistoricalReport = (props) => {
    const options = [
        {
          value: 'Fruits',
          label: 'Fruits',
          children: [
            {
              value: 'Apple',
              label: 'Apple',
            },
            {
                value: 'Watermelon',
                label: 'Watermelon',
              },
          ],
        },
        {
          value: 'Vegetables',
          label: 'Vegetables',
          children: [
            {
              value: 'Tomato',
              label: 'Tomato',
              
            },
            {
                value: 'Onions',
                label: 'Onions',
                
              },
          ],
        },
      ];

    return (
        <div className="historical_report_container">
           <div className="get_historical_container">
                <Card title="Get Report"  extra={<Button > Get Report </Button>} style={{ width: 800, height: 500}}>
                <div className="inputs_container">
                  <Row gutter={16}>
                          <Col span={12}>
                          <div className="site-input-group-wrapper">
                          < Input.Group compact>
                                  <Cascader style={{ width: '100%' }}  options={options} placeholder="Select Crop" />
                              </Input.Group>
                          </div>
                      </Col>
                      <Col span={12}>
                          <div>
                              <DatePicker style={{ width: '100%' }} />
                          </div>
                      </Col> 
                  </Row>
                  <Row gutter={16}>
                      <Col span={12}>
                          <div style={{marginTop:'20px'}}>
                            <Tooltip title="Enter the Location ">
                                <Input
                                placeholder="Location">
                                </Input>
                              </Tooltip>
                          </div>
                      </Col>
                  </Row>
              </div>
            </Card>
        </div>
        </div>
    )
}
export default HistoricalReport;