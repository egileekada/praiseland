import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles.css';
import MutliCarousel from './MultiCarouselPage'
import img from '../Image/quote-04.svg'
import YouTubePlayer from '../Component/YouTube'
import { MdEventAvailable } from "react-icons/md";

function Body(){

  return(
    <div>
      
      {/* <div id='center'>
        <h3 className='font-bold'> Upcoming Events </h3>
      </div> */}
      
      <Container fluid >

        <div  style={{display: 'flex', flexDirection: 'column' }} id='center'>
          <Col xs={12} md={9} lg={6} style={{display: 'flex', flexDirection: 'column', padding:'20px' }} id='center' >
            <h3> Upcoming Events </h3>
            <p style={{textAlign:'center'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </Col>
        </div>

        <Row xs={12} md={10} style={{padding:'12px'}} id='center' >
          <Col xs={12} md={12} lg={12}> <MutliCarousel/></Col>        
        </Row>
      </Container>

  
      <Container fluid >

          <div  style={{display: 'flex', flexDirection: 'column' }} id='center'>
            <Col xs={12} md={9} lg={6} style={{display: 'flex', flexDirection: 'column', padding:'20px' }} id='center' >
              <h3 className='font-bold'> Past Events </h3>
              <p style={{textAlign:'justify'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </Col>
          </div>

        <Row xs={10} md={10}  id='center' style={{marginTop:'-10px'}} >
          <Col xs={12} md={5} id='past-event' >
            <div style={{display:'flex', flexDirection:'row' }} >
              <div>
                <MdEventAvailable style={{width: '40px', height:'40px', marginTop:'20px'}} />
              </div>
              <div className='past_event'  > 
                <h4 className='font-bold' >July HolyGhost Service</h4>
                <p style={{marginTop: '10px', marginLeft: '15px'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis dolorum nisi et possimus? Expedita atque rerum saepe, natus exercitationem maxime provident perspiciatis, architecto quae dignissimos similique, optio reprehenderit. Non.</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} id='past-event' >
            <div style={{display:'flex', flexDirection:'row' }} >
              <div>
                <MdEventAvailable style={{width: '40px', height:'40px', marginTop:'20px'}} />
              </div>
              <div className='past_event' > 
                <h4 className='font-bold' >July HolyGhost Service</h4>
                <p style={{marginTop: '10px', marginLeft: '15px'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis dolorum nisi et possimus? Expedita atque rerum saepe, natus exercitationem maxime provident perspiciatis, architecto quae dignissimos similique, optio reprehenderit. Non.</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} id='past-event' >
            <div style={{display:'flex', flexDirection:'row' }} >
              <div>
                <MdEventAvailable style={{width: '40px', height:'40px', marginTop:'20px'}} />
              </div>
              <div className='past_event'> 
                <h4 className='font-bold' >July HolyGhost Service</h4>
                <p style={{marginTop: '10px', marginLeft: '15px'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis dolorum nisi et possimus? Expedita atque rerum saepe, natus exercitationem maxime provident perspiciatis, architecto quae dignissimos similique, optio reprehenderit. Non.</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} id='past-event' >
            <div style={{display:'flex', flexDirection:'row' }} >
              <div>
                <MdEventAvailable style={{width: '40px', height:'40px', marginTop:'20px'}} />
              </div>
              <div className='past_event' > 
                <h4 className='font-bold' >July HolyGhost Service</h4>
                <p style={{marginTop: '10px', marginLeft: '15px'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis dolorum nisi et possimus? Expedita atque rerum saepe, natus exercitationem maxime provident perspiciatis, architecto quae dignissimos similique, optio reprehenderit. Non.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>  
      
      <div style={{marginLeft: '10px', marginRight: '10px', marginTop: '70px'}}>
        <YouTubePlayer/>
      </div>

      

      <Container fluid>
          <div  style={{display: 'flex', flexDirection: 'column' }} id='center'>
            <Col xs={12} md={9} lg={6} style={{display: 'flex', flexDirection: 'column', padding:'20px' }} id='center' >
              <h3 className='font-bold'> Testimonies </h3>
              <p style={{textAlign:'center'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </Col>
          </div>
        
        <Row xs={10} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      
          <Col xs={9} md={5} lg={3} id='testimony' >
            <div >
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, laudantium?</p>

              <div style={{display:'flex', flexDirection:'row', position: 'absolute', bottom: '20px'}} >
                <div style={{height: '50px', width: '50px', borderRadius:'40px', backgroundColor: 'gray' }} ></div>
                <div style={{marginLeft:'15px', flexDirection:'column', display:'flex', alignItems: 'center', marginTop:'5px' }} >
                  <h6>Name</h6>
                  <p style={{marginTop:'-10px'}} >5 hours ago</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={9} md={5} lg={3} id='testimony'>
            <div >
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, laudantium?</p>

              <div style={{display:'flex', flexDirection:'row', position: 'absolute', bottom: '20px'}} >
                <div style={{height: '50px', width: '50px', borderRadius:'40px', backgroundColor: 'gray' }} ></div>
                <div style={{marginLeft:'15px', flexDirection:'column', display:'flex', alignItems: 'center', marginTop:'5px' }} >
                  <h6>Name</h6>
                  <p style={{marginTop:'-10px'}} >5 hours ago</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={11} md={5} lg={3} id='testimony'>
            <div >
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, laudantium?</p>

              <div style={{display:'flex', flexDirection:'row', position: 'absolute', bottom: '20px'}} >
                <div style={{height: '50px', width: '50px', borderRadius:'40px', backgroundColor: 'gray' }} ></div>
                <div style={{marginLeft:'15px', flexDirection:'column', display:'flex', alignItems: 'center', marginTop:'5px' }} >
                  <h6>Name</h6>
                  <p style={{marginTop:'-10px'}} >5 hours ago</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div id='center' style={{width: '100%', height: '400px' ,  backgroundColor: 'blueviolet', backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'fit', backgroundPosition: 'center' }}>
        
      </div>
 
    </div>
  )
  
}

export default Body;