import React, { PureComponent , useState } from 'react';
import { Input, Select , Button , Form, DatePicker, Card , Cascader , Tooltip , Modal , List, Affix } from 'antd';
import './HistoricalReport.css'
import { makeStyles } from '@material-ui/core/styles';
import AssignmentIcon from '@material-ui/icons/Assignment'
import Fab from '@material-ui/core/Fab';
import './map.css';
import LinearGradient from './LinearGradient.js';
import { ComposableMap, Geographies, Geography , ZoomableGroup } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';
import output from './Api'
import ReactToPdf from 'react-to-pdf'
import jsPDF from 'jspdf';

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  jspdfgenerator = () => {
    var doc = new jsPDF();
    var cont = document.getElementById('Container');
    doc.fromHTML(cont,15,15)
    
    doc.save('prediction report.pdf')
  }
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const ref = React.createRef();
    return (
      <>
        
        <Modal
          width="800px"
          title="Prediction Report as for 2014"
          visible={this.state.visible}
          onOk={this.jspdfgenerator}
          onCancel={this.handleCancel}
        >
       
          <div >
         <List id="Container"
            itemLayout="horizontal"
            dataSource={output}
            renderItem={item => (
              <List.Item >
                <List.Item.Meta
                  title={<a >{item.State_Name}: {item.Crop}</a>}
                  description={<span>Production( Estimated Quantity): <br />{item.Production} Quintals</span>}
                />
                <span>{item.id}</span>
              </List.Item>
            )}
          />
          </div>
        </Modal>
      </>
    );
  }
}



const HistoricalReport = (props) => {
  const [ data_api , setApidata ] = useState([])
  const [ date , setDate ] = useState('')
  const [ crop , setCrop ] = useState('')
  const [ State , setState] = useState('')

  const onGetReport = () => {
   
}
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
        {
          value: 'Grains',
          label: 'Grains',
          children: [
            {
              value: 'Rice',
              label: 'Rice',
              
            },
          ],
        },
      ];
      //Map

      const INDIA_TOPO_JSON = require('./india.topo.json');

      const PROJECTION_CONFIG = {
        scale: 350,
        center: [78.9629, 22.5937] // always in [East Latitude, North Longitude]
      };
      
      // Red Variants
      const COLOR_RANGE = [
        '#ffedea',
        '#C5E8B7',
        '#C5E8B7',
        '#ABE098',
        '#83D475',
        '#e2492d',
        '#be3d26',
        '#9a311f',
        '#782618'
      ];
      
      const DEFAULT_COLOR = '#EEE';
      
      const getRandomInt = () => {
        return parseInt(Math.random() * 1000);
      };
      
      const geographyStyle = {
        default: {
          outline: 'none'
        },
        hover: {
          fill: '#ccc',
          transition: 'all 250ms', 
          outline: 'none'
        },
        pressed: {
          outline: 'none'
        }
      };
      
      // will generate random heatmap data on every call
      const getMapData = () => {
        return [
          { id: 'AP', state: 'Andhra Pradesh', value: getRandomInt() },
          { id: 'AR', state: 'Arunachal Pradesh', value: getRandomInt() },
          { id: 'AS', state: 'Assam', value: getRandomInt() },
          { id: 'BR', state: 'Bihar', value: getRandomInt() },
          { id: 'CT', state: 'Chhattisgarh', value: getRandomInt() },
          { id: 'GA', state: 'Goa', value: 21 },
          { id: 'GJ', state: 'Gujarat', value: 22 },
          { id: 'HR', state: 'Haryana', value: getRandomInt() },
          { id: 'HP', state: 'Himachal Pradesh', value: 24 },
          { id: 'JH', state: 'Jharkhand', value: 26 },
          { id: 'KA', state: 'Karnataka', value: 27 },
          { id: 'KL', state: 'Kerala', value: getRandomInt() },
          { id: 'MP', state: 'Madhya Pradesh', value: getRandomInt() },
          { id: 'MH', state: 'Maharashtra', value: getRandomInt() },
          { id: 'MN', state: 'Manipur', value: getRandomInt() },
          { id: 'ML', state: 'Meghalaya', value: 59 },
          { id: 'MZ', state: 'Mizoram', value: getRandomInt() },
          { id: 'NL', state: 'Nagaland', value: 59 },
          { id: 'OD', state: 'Odisha', value: 59 },
          { id: 'PB', state: 'Punjab', value: getRandomInt() },
          { id: 'RJ', state: 'Rajasthan', value: getRandomInt() },
          { id: 'SK', state: 'Sikkim', value: getRandomInt() },
          { id: 'TN', state: 'Tamil Nadu', value: getRandomInt() },
          { id: 'TS', state: 'Telangana', value: getRandomInt() },
          { id: 'TR', state: 'Tripura', value: 14 },
          { id: 'UK', state: 'Uttarakhand', value: getRandomInt() },
          { id: 'UP', state: 'Uttar Pradesh', value: 15 },
          { id: 'WB', state: 'West Bengal', value: 17 },
          { id: 'WB', state: 'West Bengal', value: 17 },
          { id: 'AN', state: 'Andaman and Nicobar Islands', value: getRandomInt() },
          { id: 'CH', state: 'Chandigarh', value: getRandomInt() },
          { id: 'DN', state: 'Dadra and Nagar Haveli', value: 19 },
          { id: 'DD', state: 'Daman and Diu', value: 20 },
          { id: 'DL', state: 'Delhi', value: 59 },
          { id: 'JK', state: 'Jammu and Kashmir', value: 25 },
          { id: 'LA', state: 'Ladakh', value: getRandomInt() },
          { id: 'LD', state: 'Lakshadweep', value: getRandomInt() },
          { id: 'PY', state: 'Puducherry', value: getRandomInt() }
        ];
      };
      
        const [tooltipContent, setTooltipContent] = useState('');
        const [data, setData] = useState(getMapData());
      
        const gradientData = {
          fromColor: COLOR_RANGE[0],
          toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
          min: 0,
          max: data.reduce((max, item) => (item.value > max ? item.value : max), 0)
        };
      
        const colorScale = scaleQuantile()
          .domain(data.map(d => d.value))
          .range(COLOR_RANGE);
      
        const onMouseEnter = (geo, current = { value: 'NA' }) => {
          return () => {
            setTooltipContent(`${geo.properties.name}: ${current.value}`);
          };
        };
      
        const onMouseLeave = () => {
          setTooltipContent('');
        };
      
        const onChangeButtonClick = () => {
          setData(getMapData());
        };
      //
    
      

    return (
        <div className="historical_report_container">
          
        <div className="map_container">
        <div className="full-width-height container">
      <h1 className="no-margin center">States and Production Per Area</h1>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
        <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={220}
          height={220}
          data-tip=""
        >
           <ZoomableGroup zoom={1}>
            <Geographies geography={INDIA_TOPO_JSON}>
              {({ geographies }) =>
                geographies.map(geo => {
                  const current = data.find(s => s.id === geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                      style={geographyStyle}
                      onMouseEnter={onMouseEnter(geo, current)}
                      onMouseLeave={onMouseLeave}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <LinearGradient data={gradientData} />
        {/*<Button onClick={{onChangeButtonClick}}> change</Button>*/}
        
    </div>
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
                      {/* <Button type="primary" style={{float:'right'}} onClick={onGetReport}>Get Report</Button> */}
                    <App />
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