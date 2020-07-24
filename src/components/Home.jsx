import React  from 'react';
import { PageHeader , Button , Input , Carousel , Card, Col , Row ,  Drawer, Form,  Radio, message } from 'antd';
import './Home.css';
import { useState } from 'react';
import { navigate } from '@reach/router';
import { auth } from '../../firebase';

const Home = (props) =>{
    
    const [ name , setName ] = useState('')
    const [ email , setEmail ] =useState('')
    const [ password , setPassword ] =useState('')
    const [ password1 , setPassword1 ] =useState('')
    const [ profession , setProfession ] =useState('a')


    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange = (event) => setPassword(event.target.value)
    const onPassword1Change = (event) => setPassword1(event.target.value)
    const onNameChange = (event) => setName(event.target.value)
    const onProfessionChange = (event) => setProfession(event.target.value)


    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
      setEmail('')
      setPassword('')
    };
    const onClose = () => {
      setVisible(false);
    };
    const onSubmit = () =>{
        auth.createUserWithEmailAndPassword(email, password)
            .then(function(result) {
                message.success("Sign Up sucessful")
                setEmail('')
                setPassword('')
            })
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            message.warning(errorCode+"  "+errorMessage)
            // ...
          });

    }
    const onSignIn = () => {
        auth.signInWithEmailAndPassword(email,password)
            .then(function(result) {
                message.success("sign in successful")
                navigate("dashboard")
            })
            .catch(function(error) {
                message.warning(Error)
            })
    }
    return(
        <div className="login_container">
            <div className="site-page-header-ghost-wrapper" >
            <PageHeader
                className="site-page-header"
                title="Crop Advisor "
                extra={[
                    <div key="5">
                        <Form>
                        <Input type="email" key="4" onChange={onEmailChange} style={{ width: '35%',marginRight:'10px' }} value={email} placeholder="user@example.com" />
                        <Input.Password key="3" onChange={onPasswordChange} style={{ width: '35%',marginRight:'10px' }} value={password} placeholder="password" />
                        <Button key="2" style={{marginRight:'10px' }} onClick={onSignIn}>Sign In</Button>,
                        <Button key="1" type="primary"style={{marginRight:'20px' }} onClick={showDrawer} >
                            Sign Up
                        </Button>
                        </Form>
                        
                    </div>,
                  ]}
            />
            <div name="image_container">
                <img src="https://www.deere.co.in/assets/images/region-1/industries/agriculture/in_agriculture_hero_1366x347.jpg" width="100%"/>
            </div>
            <div className="carousel_container">
            <Carousel autoplay>
                <div >
                <h3>Registration</h3>
                </div>
                <div>
                <h3>Historical Report</h3>
                </div>
                <div>
                <h3>Forecast Analysis</h3>
                </div>
                <div >
                <h3>Market Tendency</h3>
                </div>
            </Carousel>
            </div>
            <div className="Info_container">
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Historical Information" bordered={false}>
                        This module contains information on the production per area which helps us predict the production for the upcoming years .
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Forecast analysis" bordered={false}>
                        This module provides the weather forecast preparing the farmer to decide the crop to be sown .
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Market Tendency" bordered={false}>
                        This module displays the current market tendency which lets us compare the difference between the production between years .
                        </Card>
                    </Col>
                    </Row>
                </div>
            </div>
            <div className="signup_container">  
            <>
                <Drawer
                        title="Create new Account"
                        placement="right"
                        width={720}
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                        bodyStyle={{ paddingBottom: 80 }}
                    >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                                >
                                <Input placeholder="Please enter user name" value={name} onChange={onNameChange}/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="Email"
                                    label="Email"
                                    rules={[{ required: true, message: 'Please enter Email' }]}
                                    >
                                    <Input
                                        style={{ width: '100%' }}
                                        placeholder="user@example.com"
                                        onChange={onEmailChange}
                                        value={email}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                name="password"
                                label="Password"
                                rules={[{ required: true, message: 'Please enter the password' }]}
                                >
                                <Input.Password style={{ width: '100%' }} onChange={onPasswordChange} value={password} placeholder="password" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="Re-password"
                                    label="Confirm password"
                                    rules={[{ required: true, message: 'Please enter the password' }]}
                                    >
                                    <Input.Password style={{ width: '100%' }} onChange={onPassword1Change} value={password1} placeholder="Confirm password" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                name="profession"
                                label="Profession"
                                rules={[{ required: true, message: 'Please enter the Profession' }]}
                                >
                                <Radio.Group onChange={onProfessionChange}>
                                    <Radio.Button value="a">Farmer</Radio.Button>
                                    <Radio.Button value="b">Authority</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                            
                        </Row>
                        
                        <Row gutter={16} style={{float:'right',marginTop:'20px'}}>
                            <div>
                                <Button onClick={onClose} style={{marginRight:'20px'}}>Cancel</Button>
                                <Button onClick={onSubmit} type='primary'>Sign Up</Button>
                            </div>
                        </Row>
                    </Form>
                </Drawer>
            </>
            </div>
                
            </div>
        </div>

    )
    
    
}
export default Home;