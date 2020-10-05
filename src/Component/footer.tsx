import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles.css';

function footer(){
    return(
        <div>

        <Container fluid style={{backgroundColor: 'grey'}}>
            <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Col xs={8} md={5} lg={4} id='foot' ></Col>
                <Col xs={8} md={5} lg={4} id='foot'></Col>
                <Col xs={8} md={5} lg={4} id='foot'></Col>
            </Row>
        </Container>

            <div style={{ display: 'flex', flexDirection:'row', backgroundColor: 'grey', justifyContent:'center'}}>
                <p className='font-bold' id='footer-font' >2020 RCCG PLP. All Rights Reserved.</p>
                <p className='font-bold' id='footer-font' style={{marginLeft:'3px'}}>Privacy Policy </p>
                <p className='font-bold' id='footer-font'style={{marginLeft:'3px'}}>Terms of Service</p>
            </div>
        </div>
    )
}

export default footer;