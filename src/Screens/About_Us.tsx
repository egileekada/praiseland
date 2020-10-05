import React from 'react'

import image from '../Image/4.jpg'
import Navigate from '../Component/Navigation'
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import '../styles.css';

function About_Us (){
    return(
        <div>
            <Navbar fixed='top' style={{ height: '65px', width: '100%', position: 'absolute', backgroundColor: 'transparent'}} >
                <Navigate />
            </Navbar> 
            <div className='image_container' style={{ backgroundImage: `url(${image})` }} >

            </div>

        </div>
    )
}

export default About_Us;