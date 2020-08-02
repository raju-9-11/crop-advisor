import React from 'react';
import { Input, Select , Button , Form, DatePicker, Card , Cascader , Tooltip , Affix , message } from 'antd';
import './HistoricalReport.css'
import Map from './map';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentIcon from '@material-ui/icons/Assignment'
import Fab from '@material-ui/core/Fab';

const HistoricalReport = (props) => {
  const layout = {
    wrapperCol: {
      span: 16,
    },
  };
  const useStyles = makeStyles((theme) => ({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(5),
      right: theme.spacing(5),
    },
    Card:{
      position:'absolute',
      right: theme.spacing(13),
      top: theme.spacing(10),
    }
  }));
  const classes = useStyles();
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
      const onGetReport = (event) => {
        message.warning("under construction")
      }

    return (
        <div className="historical_report_container">
          
        <div className="map_container">
            <Map />
        </div>

           <div className={classes.Card}>
                <Card className="inputs_container" style={{backgroundColor:'rgb(201, 173, 167,0.4)' , width:500}}  >
                <div >
                  <Form
                      {...layout}
                      name="basic"
                      initialValues={{
                        remember: true,
                      }}
                    >
                      <Form.Item
                        label={<h2>Get Report </h2>}
                        >
                        </Form.Item>
                      <Form.Item
                          label="Crop"
                          name="crop"
                          rules={[
                            {
                              required: true,
                              message: 'Please select the crop!',
                            },
                          ]}
                        >
                          <div className="site-input-group-wrapper">
                            < Input.Group compact>
                                    <Cascader style={{ width: '100%' , backgroundColor:'rgb(0,0,0,0.3)'}}  options={options} placeholder="Select Crop" />
                                </Input.Group>
                          </div>
                        </Form.Item>
                        <Form.Item
                          label="Date"
                          name="date"
                          rules={[
                            {
                              required: true,
                              message: 'Please enter the date!',
                            },
                          ]}
                        >
                          <DatePicker style={{ width: '100%' , backgroundColor:'rgb(0,0,0,0.3)' }} />
                        </Form.Item>
                        <Form.Item
                          label="State"
                          name="state"
                          rules={[
                            {
                              required: true,
                              message: 'Please enter the state!',
                            },
                          ]}
                        >
                          <div >
                            <Tooltip title="Select a state ">
                            <Select
                              placeholder="Select a state"
                              allowClear
                              style={{ width: '100%' , backgroundColor:'rgb(0,0,0,0.3)' }}
                            >
                              <Select.Option value="jk">Jammu and Kashmir</Select.Option>
                                <Select.Option value="jharkhand">Jharkhand</Select.Option>
                                <Select.Option value="Madhyapradesh">Madhya pradesh</Select.Option>
                                <Select.Option value="Andhrapradesh">Andhra pradesh</Select.Option>
                                <Select.Option value="arunachalpradesh">Arunachal pradesh</Select.Option>
                                <Select.Option value="manipur">Manipur</Select.Option>
                                <Select.Option value="sikkhim">Sikkhim</Select.Option>
                                <Select.Option value="nagaland">Nagaland</Select.Option>
                                <Select.Option value="chattisgarh">Chattisgarh</Select.Option>
                                <Select.Option value="assam">Assam</Select.Option>
                                <Select.Option value="haryana">Haryana</Select.Option>
                                <Select.Option value="odisha">Odisha</Select.Option>
                                <Select.Option value="kerals">Kerala</Select.Option>
                                <Select.Option value="tamilnadu">Tamilnadu</Select.Option>
                              </Select>
                              </Tooltip>
                          </div>
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" style={{float:'right'}}>Get Report</Button>
                    </Form.Item>
                </Form>
              </div>
            </Card>
        </div>
        <Fab color="primary" className={classes.fab} aria-label="add">
        <AssignmentIcon />
      </Fab>

        </div>
    )
}
export default HistoricalReport;