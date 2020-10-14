import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import '../styles.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigate from '../Component/WhiteNavbar'
import img from '../Image/2.jpg'

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
                    <Row xs={12} md={5} lg={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'50px'}} >
                        <Col xs={11} md={5} lg={5} className ='corner' style={{backgroundImage:`url(${img})`, backgroundPosition:'center', backgroundRepeat:'no-repeat' }} ></Col>
                        <Col xs={11} md={5} lg={5} className='cornertext' style={{flexDirection: "column",display: 'flex', alignItems: 'center'}} >
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero dolore quae sit assumenda voluptas debitis officiis ipsa, temporibus, qui omnis eius ex quia officia. Nisi animi voluptatum quas tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatum expedita consequuntur facere modi hic illum, necessitatibus ducimus deleniti perspiciatis ad, cum, dolore quisquam eum praesentium mollitia harum quam esse!</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ display: 'flex', flexDirection:'row', backgroundColor: 'grey', justifyContent:'center', width:'100%', height:'40px', alignItems: 'center', bottom: '-4px'}}>
                <p className='font-bold' id='footer-font' >2020 RCCG PLP. All Rights Reserved.</p>
                <p className='font-bold' id='footer-font' style={{marginLeft:'3px'}}>Privacy Policy </p>
                <p className='font-bold' id='footer-font'style={{marginLeft:'3px'}}>Terms of Service</p>
            </div>
        </div>
    )
}

export default PastorCorner;