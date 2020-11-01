import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Styles/Footer.css';
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { IoMdCompass, IoLogoGoogle, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoWhatsapp } from "react-icons/io";


function footer(){
    return(
        <div style={{backgroundColor: '#d0d0d0'}}>
            <Container fluid style={{backgroundColor: '#d0d0d0'}}>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'row'}}>
                    <Col xs={12} md={5} lg={4} className='info' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}} >
                    <div className="footer_logo">
                        <img
                            alt=""
                            src= {require('../Image/logo.png')}
                            width="50px"
                            height="50px" 
                            style={{marginRight: '10px', marginTop: '-5px'}}
                            />
                        <div style={{flexDirection: 'column', display:'flex', alignItems: 'center', marginLeft:'1px'}}>
                            <span className='font-Poppinsbold text-xl text-black' >Praise Land Parish</span>
                            <span  className='font-Poppins text-md text-black' style={{marginTop:'-5px', fontSize: '13px', letterSpacing: '4px' }}>Eagle Island</span>
                        </div>
                    </div>
                        <img src={require('../Image/FooterImg.png')} alt='' />
                    </Col>
                    <Col xs={10} md={5} lg={4} className='info' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}  >
                        <h1 className='font-Poppinsbold text-2xl' style={{marginTop: '20px'}} >About</h1>
                        <p className='font-lato' style={{marginTop:'10px', padding:'10px', textAlign:'left'}}>The Redeemed Christian Church of God (RCCG), Praise Land Parish was planted in April 2001.<br/>
                                Praise Land is located in plot 159, Redeemed Road Eagle Island Layout, Port Harcourt. Over time, the parish has grown from being a parish to area headquarters and then to zonal headquarters and currently a stand-alone Mega-Parish headed by an Assistant Pastor in charge of Rivers Province 9.<br/>
                                Praise Land Parish is under Rivers Province 9 in Region 5<br/>.</p>
                        <NavLink to='./about'><Button
                            variant="dark"
                            style={{marginBottom:'50px', marginTop: '-25px'}}
                            className='font-Poppinsbold'>
                            See more
                        </Button></NavLink>
                    </Col>
                    <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}  xs={10} md={5} lg={3} className=' info'>
                        <IoMdCompass size='50px' style={{marginBottom:'40px'}} />
                        <p className='font-lato' >15 Ikecchi Chinda Street Eagle Island<br/>
                            Port Harcourt Rivers State Nigeria.</p>
                        <div style={{display:'flex', flexDirection:'row', marginTop:'30px', marginBottom:'30px' }} >
                            <IoLogoGoogle size='30px' style={{margin:'15px'}} />
                            <IoLogoInstagram size='30px' style={{margin:'15px'}} />
                            <IoLogoTwitter size='30px' style={{margin:'15px'}} />
                            <IoLogoYoutube size='30px' style={{margin:'15px'}} />
                            <IoLogoWhatsapp size='30px' style={{margin:'15px'}} />
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

export default footer;