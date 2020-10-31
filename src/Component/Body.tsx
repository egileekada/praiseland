import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Styles/Body.css';
import MutliCarousel from './MultiCarouselPage'
import YouTubePlayer from '../Component/YouTube'
import { MdEventAvailable } from "react-icons/md";
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

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

      

      <Container fluid >
          <div  style={{display: 'flex', flexDirection: 'column' }} id='center'>
            <Col xs={12} md={9} lg={6} style={{display: 'flex', flexDirection: 'column', padding:'20px' }} id='center' >
              <h3 className='font-Poppinsbold text-2xl lg:text-3xl'> Testimonies </h3>
              <p className='font-lato' style={{textAlign:'center'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </Col>
          </div>
        
        <Row xs={10} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      
          <Col xs={10} md={5} lg={3} id='testimony' >
            <div >
              <div style={{overflow: 'auto', height: '250px'}}>
                <p className='font-lato'>Praise the Lord!
                    I want to thank God for the salvation of my soul. 
                    I was attack by some bad boys in diobe on my way back from work. They took my bag and all that I had with me at that time. Inside that bag was some money that some one gave to me to give to a friend. 
                    The only thing came out of my mouth was JESUS!!!! 
                    A woman that saw the incident ask me not to worry that she will pay my transport home. As I was about entering a keke, I had the feeling to go back to that spot were the incident took place and behold when I got there, I saw the money on the ground.
                    </p>
              </div>
              
              <div style={{display:'flex', flexDirection:'row', position: 'absolute', bottom: '20px',alignItems:'center'}} >
                <div style={{height: '50px', width: '50px', borderRadius:'40px', backgroundColor: 'gray' }} ></div>
                <h6 style={{marginLeft: '10px'}} className='font-lato'>Mummy Fidelis S.</h6>
              </div>
            </div>
          </Col>
          <Col xs={10} md={5} lg={3} id='testimony'>
            <div >
              <div style={{overflow: 'auto', height: '250px'}}>
                <p className='font-lato'>Praise the Lord!
                  I want to thank this great God. 
                  I have seen people who are not of this parish and even none Redeemed member testified of how they came to this parish (Praiseland), prayed at the alter and ask God for the blessing of the fruit of the womb and God gave to them. 
                  So I say if God can do it for none members, he can also bless me with the fruit of the womb. I came to the alter and I made my request to God. 
                  I want to thank this almighty God for blessing me with a son and today he is one year. 
                  To God alone receive all the glory.
                  </p>
              </div>
              
              <div style={{display:'flex', flexDirection:'row', position: 'absolute', bottom: '20px',alignItems:'center'}} >
                <div style={{height: '50px', width: '50px', borderRadius:'40px', backgroundColor: 'gray' }} ></div>
                <h6 style={{marginLeft: '10px'}} className='font-lato'>Mummy Justina A.</h6>
              </div>
            </div>
          </Col>
          <Col xs={10} md={5} lg={3} id='testimony'>
            <div >
              <div style={{overflow: 'auto', height: '250px'}}>
                <p className='font-lato'>Praise the Lord!
                  I have come to return all the glory to God. 
                  I was afflicted some time ago. I went to a doctor and he told me that there was nothing they can do about it, that there is no medication for what I was suffering from and that the pain  will be on and off like that. 
                  So I said to myself, am a young women,  how can I suffer this affliction for the rest of my life and am only in my forties.
                  I decided to come to the church,  lay down at the pavement of the church outside and pray to God to deliver me from this affliction. 
                  I did that for seven days usually at night in company of my husband.
                  Am here to give God all the glory that those pains I used to feel has disappeared and now I am free.
                  I say may the name of the Lord be praised forever in Jesus name. 
                  </p>
              </div>
              
              <div style={{display:'flex', flexDirection:'row', position: 'absolute', bottom: '20px',alignItems:'center'}} >
                <div style={{height: '50px', width: '50px', borderRadius:'40px', backgroundColor: 'gray' }} ></div>
                <h6 style={{marginLeft: '10px'}} className='font-lato'>Anonymous.</h6>
              </div>
            </div>
          </Col>
          
        </Row>

        <div style={{display:'flex', justifyContent: 'center', margin: '30px'}} >
          <LoadingButton />
        </div>

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

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
  const [isLoading, setLoading]:any = React.useState(false);
  const value: any = null

  React.useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <NavLink to='./share' >
      <Button
        variant="dark"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : value}
        className='font-Poppinsbold'
      >
        {isLoading ? 'Loading…' : 'See more'}
      </Button>
    </NavLink>
  );
}
