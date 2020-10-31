import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IoIosHome } from "react-icons/io";
import { NavLink } from 'react-router-dom'

export default function Testimonies() {
    return (
        <div>
            {/* <div  > */}
                <NavLink style={{position: 'absolute', left:'25px', top:'25px'}} to='./'>
                    <IoIosHome size='25px'/>
                </NavLink>
            {/* </div> */}
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

            </Container>
        </div>
    )
}
