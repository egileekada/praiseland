import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Navigate from '../Component/Navigation'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import '../styles.css'

export default class Gallery extends React.Component<any, any, any> {
    arr = [
        {
            img: require('../Image/1.jpg')
        },
        {
            img: require('../Image/2.jpg')
        },
        {
            img: require('../Image/3.jpg')
        }
    ]

    render(){
        return(
            <div style={{backgroundColor: 'black'}} >

                <Navbar sticky='top' bg="black" style={{height: '65px', width: '100%', position: 'fixed', marginBottom: '1060px'}} >
                    <Navigate />
                </Navbar> 

                <div style={{paddingTop: '60px'}} >
                    <Container fluid>
                        <Row id='center'>
                            <Col sm='9' md='5' lg='3' className='gallery' ></Col>
                            <Col sm='9' md='5' lg='3' className='gallery' ></Col>
                            <Col sm='9' md='5' lg='3' className='gallery' ></Col>
                            <Col sm='9' md='5' lg='3' className='gallery' ></Col>
                            <Col sm='9' md='5' lg='3' className='gallery' ></Col>
                            <Col sm='9' md='5' lg='3' className='gallery' ></Col>
                            <Col sm='9' md='5' lg='3' className='gallery' ></Col>
                            <Col sm='9' md='5' lg='3' className='gallery' ></Col>
                            <Col sm='9' md='5' lg='3' className='gallery' ></Col>
                            <Col sm='9' md='5' lg='3' className='gallery' ></Col>
                            <Col sm='9' md='5' lg='3' className='gallery' ></Col>
                            <Col sm='9' md='5' lg='3' className='gallery' ></Col>
                        </Row>
                        {/* <Row id='center'>
                            <Col sm='10' md='5' lg='3' style={{ backgroundPosition: 'center', backgroundImage: `url(${this.arr.img})`, backgroundRepeat: 'no-repeat'}} className='gallery' ></Col>
                        </Row> */}
                    </Container>
                </div>
                
            </div>
        );
    }
}

// export default Gallery;