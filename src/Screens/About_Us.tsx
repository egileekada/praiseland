import React from 'react'

import image from '../Image/4.jpg'
// import abt1 from '../Image/1.jpg'
// import abt2 from '../Image/2.jpg'
// import abt3 from '../Image/3.jpg'
import Navigate from '../Component/Navigation'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Style/Screens.css';

function About_Us (){
    return(
        <div>
            <Navbar fixed='top' style={{ height: '65px', width: '100%', position: 'absolute', backgroundColor: 'transparent'}} >
                <Navigate />
            </Navbar> 
            <div className='image_container' style={{ backgroundImage: `url(${image})` }}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%'}}>
                    <h1 className=' font-Poppinsbold text-white items-center text-xl lg:text-4xl xl:text-4xl'  style={{textShadow:'3px 3px #0700008a'}} >About RCCG Praise Land Parish </h1>
                </div>
            </div>
            <Container fluid style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <div><h1 className='font-Poppinsbold text-3xl' style={{marginTop: '50px'}} >About Us</h1></div>
                <Row xs={12} md={5} lg={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'30px'}} >
                    
                    <Col style={{height:'100%'}} xs={11} md={5} lg={5} >
                        <Row id='center' >
                            <Col xs={10} md={10} lg={10} className='about_main_img' >
                                <img src={require('../Image/1.jpg')} style={{width:'100%', borderRadius: '7px'}} alt='' />
                            </Col>
                            <Col xs={10} md={5} lg={5} className='about_img' >
                                <img src={require('../Image/2.jpg')} style={{width:'100%', borderRadius: '7px'}} alt='' />
                            </Col>
                            <Col xs={10} md={5} lg={5} className='about_img' >
                                <img src={require('../Image/3.jpg')} style={{width:'100%', borderRadius: '7px'}} alt='' />
                            </Col>
                        </Row>
                    </Col>
                    <Col id='center' xs={11} md={5} lg={5} style={{flexDirection:'column', marginBottom:'20px', marginTop: '55px'}}>
                        <div style={{backgroundColor: 'blanchedalmond', marginTop:'20px', padding: '5px'}}>
                            <p className='font-lato' >The Redeemed Christian Church of God (RCCG), Praise Land Parish was planted in April 2001.<br/>
                                Praise Land is located in plot 159, Redeemed Road Eagle Island Layout, Port Harcourt. Over time, the parish has grown from being a parish to area headquarters and then to zonal headquarters and currently a stand-alone Mega-Parish headed by an Assistant Pastor in charge of Rivers Province 9.<br/>
                                Praise Land Parish is under Rivers Province 9 in Region 5<br/>
                                Below are names of pastors the Lord has used to take the parish to what it is today:<br/>
                                <br/>
                                Pastor Ben Ajoku (April 2001 to August 2004)<br/>
                                Pastor Sylvester Ikhalo (August 2004 to August 2006)<br/>
                                Pastor Remi Odebode (September 2006 to August 2007)<br/>
                                Pastor George Ekeopare (September 2007 to August 2011)<br/>
                                Pastor David Ukpong (September 20011 to April 2015)<br/>
                                Pastor Tope Ajanaku (May 2015 to August 2015)<br/>
                                Pastor Paul Titus (September 2015 to December 2015)<br/>
                                Pastor Constance Moro (January 2016 to August 2017)<br/>
                                Pst. Prof. Orikomaba Obunge (October 2017 till date)</p>
                        </div>
                    </Col>
                </Row>
                
            </Container>
                <div id='footer-container'>
                    <p className='font-bold' id='footer-font' >2020 RCCG PLP. All Rights Reserved.</p>
                    <p className='font-bold shift' id='footer-font'>Privacy Policy </p>
                    <p className='font-bold sec_shift' id='footer-font'>Terms of Service</p>
                </div>
        </div>
    )
}

export default About_Us;