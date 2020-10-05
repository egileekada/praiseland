import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import '../styles.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigate from '../Component/WhiteNavbar'

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
                        <Col xs={11} md={5} lg={5} className ='corner'></Col>
                        <Col xs={11} md={5} lg={5} className='cornertext'></Col>
                    </Row>
                </Container>
            </div>
            <div style={{ display: 'flex', flexDirection:'row', backgroundColor: 'grey', justifyContent:'center', width:'100%', height:'40px', alignItems: 'center', bottom: '-4px', position:'fixed'}}>
                <p className='font-bold' id='footer-font' >2020 RCCG PLP. All Rights Reserved.</p>
                <p className='font-bold' id='footer-font' style={{marginLeft:'3px'}}>Privacy Policy </p>
                <p className='font-bold' id='footer-font'style={{marginLeft:'3px'}}>Terms of Service</p>
            </div>
        </div>
    )
}

export default PastorCorner;