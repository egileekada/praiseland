import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import './Style/Screens.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigate from '../Component/WhiteNavbar'
import img from '../Image/g5.jpeg'

function PastorCorner() {
    return(
        <div style={{ height:'100%', width:'100%' }} >
            <div>
                <Navbar sticky='top' bg="white" style={{height: '65px', width: '100%', position: 'fixed', marginBottom: '1060px'}} >
                    <Navigate />
                </Navbar> 
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'70px', marginBottom: '50px'}}>
                <Container fluid>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'30px'}}>
                        <h3 className='font-Poppinsbold' style={{fontSize: '40px', marginTop:'10px', marginBottom: '30px'}}>JOY</h3>
                    </div>
                    <Row xs={12} md={5} lg={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'10px'}} >
                        <Col xs={11} md={5} lg={5} className ='corner' style={{backgroundImage:`url(${img})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', borderRadius:'10px', backgroundSize:'contain'}} ></Col>
                        <Col xs={12} md={5} lg={5} className='cornertext' style={{flexDirection: "column"}} >
                            <div style={{ backgroundColor:'white', borderRadius:'10px', border:'0.5px solid gray'}} className='flow'>
                                <div id='center'  style={{ backgroundColor:'white'}}>
                                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero dolore quae sit assumenda voluptas debitis officiis ipsa, temporibus, qui omnis eius ex quia officia. Nisi animi voluptatum quas tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatum expedita consequuntur facere modi hic illum, necessitatibus ducimus deleniti perspiciatis ad, cum, dolore quisquam eum praesentium mollitia harum quam esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero dolore quae sit assumenda voluptas debitis officiis ipsa, temporibus, qui omnis eius ex quia officia. Nisi animi voluptatum quas tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatum expedita consequuntur facere modi hic illum, necessitatibus ducimus deleniti perspiciatis ad, cum, dolore quisquam eum praesentium mollitia harum quam esse!</p>  
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id='footer-containers'>
                <p className='font-bold' id='footer-font' >2020 RCCG PLP. All Rights Reserved.</p>
                <p className='font-bold shift' id='footer-font'>Privacy Policy </p>
                <p className='font-bold sec_shift' id='footer-font' >Terms of Service</p>
            </div>
        </div>
    )
}

export default PastorCorner;