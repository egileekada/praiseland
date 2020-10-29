import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles.css';
import { NavLink } from 'react-router-dom'

export default class imageslider extends React.Component {

  render(){
    return(
          <Navbar fixed='top' collapseOnSelect expand="lg" bg="transparent" style={{height: '65px', width: '100%', position:'absolute'}} >
            <Navbar.Brand href="#home" >
                    <img
                      alt=""
                      src= {require('../Image/logo.png')}
                      width="50"
                      height="50"
                      className="d-inline-block align-top"
                      style={{marginLeft: '40px', marginRight: '10px'}}
                    />{' '}
                      
                      
                  </Navbar.Brand>
                  <Nav className="mr-auto" style={{flexDirection: 'column', alignItems: 'center', marginLeft:'-20px'}} >
                      <span className='font-bold text-white' id='logo'>Praise Land Parish</span>
                      <span id='logo' style={{marginTop:'-5px', fontSize: '13px'}}>Eagle Island</span>
                  </Nav>
            <Navbar.Toggle className='bg-white lg:bg-transparent' style={{width: '40px', height: '35px',marginTop:'-5px', justifyItems: 'center', padding: '1px'}}  aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse  className='bg-gray-100 rounded-md p-2  lg:bg-transparent' id="responsive-navbar-nav">
              <Nav className="mr-auto">
                
              </Nav>
              <Nav>
                  <Nav  id='font' style={{marginRight:'40px', float:'right' }}>
                    <NavLink activeStyle={{color: 'white'}} className='font-bold hover:text-green-500 lg:hover:text-white text-black border-b-2 border-white h-8 w-7 lg:text-gray-200' to="/">Home</NavLink>
                    <a className='font-bold hover:text-green-500  lg:hover:text-white text-black lg:text-gray-200' href="#dee" >Online Giving</a>
                    <NavLink activeStyle={{color:'white', textDecoration:'underline'}} className='font-bold hover:text-green-500 lg:hover:text-white text-black lg:text-gray-200' to="/gallery"  >Photo Gallery</NavLink>
                    <NavLink className='font-bold hover:text-green-500 hover:text-green-500 lg:hover:text-white text-black lg:text-gray-200' to="/pastor" >Pastors Corner</NavLink>
                    <NavLink className='font-bold hover:text-green-500 lg:hover:text-white text-black lg:text-gray-200' to="/gallery" >About</NavLink>
                    <NavLink className="bg-green-500 hover:text-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" style={{width: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft:'10px'}} to="/gallery" id='font'>Department</NavLink>  
                  </Nav>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      
      )
    }
  }
  
  
  
// export default Navigation;