import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles.css';

function footer(){
    return(
        <div>

        <Container fluid style={{backgroundColor: '#ada2a1'}}>
            <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Col xs={10} md={5} lg={4} id='foot' ></Col>
                <Col xs={10} md={5} lg={4} id='foot'></Col>
                <Col xs={10} md={5} lg={4} id='foot'></Col>
            </Row>
        </Container>

            <div style={{ display: 'flex', flexDirection:'row', backgroundColor: 'grey', justifyContent:'center', width:'100%', height:'40px', alignItems: 'center', bottom: '-4px'}}>
                <p className='font-bold' id='footer-font' >2020 RCCG PLP. All Rights Reserved.</p>
                <p className='font-bold shift' id='footer-font'>Privacy Policy </p>
                <p className='font-bold sec_shift' id='footer-font'>Terms of Service</p>
            </div>
        </div>
    )
}

export default footer;