import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Styles/Body.css';
import MutliCarousel from './MultiCarouselPage'
import YouTubePlayer from '../Component/YouTube'
import { MdEventAvailable } from "react-icons/md";

function Body(){

  return(
    <div>
      
      <Container fluid >

        <div  style={{display: 'flex', flexDirection: 'column' }} id='center'>
          <Col xs={12} md={9} lg={6} style={{display: 'flex', flexDirection: 'column', padding:'10px' }} id='center' >
            <h3 className='font-Poppinsbold text-2xl lg:text-3xl'> Upcoming Events </h3>
            <p className='font-lato' style={{textAlign:'center'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </Col>
        </div>

        <Row xs={12} md={10} style={{padding:'12px', marginTop: '-25px' }} id='center' >
          <Col xs={12} md={12} lg={12}> <MutliCarousel/></Col>        
        </Row>
      </Container>

  
      <Container fluid >

          <div  style={{display: 'flex', flexDirection: 'column' }} id='center'>
            <Col xs={12} md={9} lg={6} style={{display: 'flex', flexDirection: 'column', padding:'20px' }} id='center' >
              <h3 className='font-Poppinsbold text-2xl lg:text-3xl'> Past Events </h3>
              <p className='font-lato'  style={{textAlign:'center'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </Col>
          </div>

        <Row xs={10} md={10}  id='center' style={{marginTop:'-20px'}} >
          <Col xs={12} md={5} id='past-event' >
            <div style={{display:'flex', flexDirection:'row' }} >
              <div>
                <MdEventAvailable style={{width: '40px', height:'40px', marginTop:'20px'}} />
              </div>
              <div className='past_event'  > 
                <h4 className='font-Poppinsbold text-xl lg:text-2xl' >July HolyGhost Service</h4>
                <p className='font-lato'  style={{marginTop: '10px', marginLeft: '15px'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis dolorum nisi et possimus? Expedita atque rerum saepe, natus exercitationem maxime provident perspiciatis, architecto quae dignissimos similique, optio reprehenderit. Non.</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} id='past-event' >
            <div style={{display:'flex', flexDirection:'row' }} >
              <div>
                <MdEventAvailable style={{width: '40px', height:'40px', marginTop:'20px'}} />
              </div>
              <div className='past_event' > 
                <h4 className='font-Poppinsbold text-xl lg:text-2xl' >July HolyGhost Service</h4>
                <p className='font-lato'  style={{marginTop: '10px', marginLeft: '15px'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis dolorum nisi et possimus? Expedita atque rerum saepe, natus exercitationem maxime provident perspiciatis, architecto quae dignissimos similique, optio reprehenderit. Non.</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} id='past-event' >
            <div style={{display:'flex', flexDirection:'row' }} >
              <div>
                <MdEventAvailable style={{width: '40px', height:'40px', marginTop:'20px'}} />
              </div>
              <div className='past_event'> 
                <h4 className='font-Poppinsbold text-xl lg:text-2xl' >July HolyGhost Service</h4>
                <p className='font-lato'  style={{marginTop: '10px', marginLeft: '15px'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis dolorum nisi et possimus? Expedita atque rerum saepe, natus exercitationem maxime provident perspiciatis, architecto quae dignissimos similique, optio reprehenderit. Non.</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} id='past-event' >
            <div style={{display:'flex', flexDirection:'row' }} >
              <div>
                <MdEventAvailable style={{width: '40px', height:'40px', marginTop:'20px'}} />
              </div>
              <div className='past_event' > 
                <h4 className='font-Poppinsbold text-xl lg:text-2xl' >July HolyGhost Service</h4>
                <p className='font-lato'  style={{marginTop: '10px', marginLeft: '15px'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis dolorum nisi et possimus? Expedita atque rerum saepe, natus exercitationem maxime provident perspiciatis, architecto quae dignissimos similique, optio reprehenderit. Non.</p>
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
              <h3 className='font-Poppinsbold text-2xl lg:text-3xl'> Testimonies </h3>
              <p className='font-lato' style={{textAlign:'center'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </Col>
          </div>
        
        <Row xs={10} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      
          <Col xs={10} md={5} lg={3} id='testimony' >
            <div >
              <p className='font-lato' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, laudantium?</p>

              <div style={{display:'flex', flexDirection:'row', position: 'absolute', bottom: '20px'}} >
                <div style={{height: '50px', width: '50px', borderRadius:'40px', backgroundColor: 'gray' }} ></div>
                <div style={{marginLeft:'15px', flexDirection:'column', display:'flex', alignItems: 'center', marginTop:'5px' }} >
                  <h6 className='font-lato'>Name</h6>
                  <p className='font-lato' style={{marginTop:'-10px'}} >5 hours ago</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={10} md={5} lg={3} id='testimony'>
            <div >
              <p className='font-lato'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, laudantium?</p>

              <div style={{display:'flex', flexDirection:'row', position: 'absolute', bottom: '20px'}} >
                <div style={{height: '50px', width: '50px', borderRadius:'40px', backgroundColor: 'gray' }} ></div>
                <div style={{marginLeft:'15px', flexDirection:'column', display:'flex', alignItems: 'center', marginTop:'5px' }} >
                  <h6 className='font-lato'>Name</h6>
                  <p className='font-lato' style={{marginTop:'-10px'}} >5 hours ago</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={10} md={5} lg={3} id='testimony'>
            <div >
              <p className='font-lato'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, laudantium?</p>

              <div style={{display:'flex', flexDirection:'row', position: 'absolute', bottom: '20px'}} >
                <div style={{height: '50px', width: '50px', borderRadius:'40px', backgroundColor: 'gray' }} ></div>
                <div style={{marginLeft:'15px', flexDirection:'column', display:'flex', alignItems: 'center', marginTop:'5px' }} >
                  <h6 className='font-lato'>Name</h6>
                  <p className='font-lato' style={{marginTop:'-10px'}} >5 hours ago</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div id='center' style={{width: '100%', height: '500px' ,  backgroundColor: 'blue' }}>
        <div id='center' style={{width: '100%', height:'400px', borderLeft:'2px solid white', borderBottom: '2px solid white' ,  borderRadius:'30px', margin: '30px', paddingLeft: '20px', paddingRight: '20px'}} >
          <p className='font-lato' style={{fontSize:'20px', textAlign:'left', color: 'white'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, nam! Facere obcaecati illo quia quos libero? Quae amet autem a voluptas cum reiciendis.</p>
        </div>
      </div>
 
    </div>
  )
  
}

export default Body;