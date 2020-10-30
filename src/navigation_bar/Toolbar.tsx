import React, {useState} from 'react'

import Drawer from './DrawerToggleButton'
import { NavLink } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Dialog from '../Component/Online-Giving'
import './Toolbar.css'


function Toolbar (props:any ){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className='button'>
            <Drawer click={props.drawerClickHandler} />
        </div>
        <div className='phone' />
        <div className="toolbar__logo">
            <NavLink to='/'><img
              alt=""
              src= {require('../Image/logo.png')}
              width="50px"
              height="50px" 
              style={{marginLeft: '30px', marginRight: '10px', marginTop: '-5px'}}
            /></NavLink>
            <div style={{flexDirection: 'column', display:'flex', alignItems: 'center', marginLeft:'1px'}}>
                <span className='font-bold font-Poppinsbold text-white' id='logo'>Praise Land Parish</span>
                <span id='logo' className='font-Poppins' style={{marginTop:'-5px', fontSize: '13px', letterSpacing: '4px' }}>Eagle Island</span>
            </div>
        </div>
        <div className="spacer" />
        <div className="toolbar__navigation-items">
          <ul>
            <li>
              <NavLink exact activeStyle={{color: 'white' }} id='border' className='font-bold font-lato hover:text-green-400 '  to="/">Home </NavLink>
              <NavLink exact activeStyle={{color: 'white' }} style={{textDecoration: 'none'}} className='hover:text-white font-lato indicator' to="/">__</NavLink>
            </li>
            <li>
            <div onClick={handleShow} style={{ fontSize: '14px',marginTop: '5px', cursor: 'pointer', color: 'white'}} className='font-white font-bold font-lato hover:text-green-400 ' >Online Giving</div>
              
              <Modal show={show} onHide={handleClose} centered >
                <Modal.Header closeButton>
                  <Modal.Title className='font-bold font-Poppinsbold text-2xl' >
                    Online Giving
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Dialog />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={handleClose} className='font-bold font-Poppinsbold' variant="secondary">Close</Button>                              
                </Modal.Footer>
              </Modal>
            
            </li>
            <li>
              <NavLink activeStyle={{color: 'white'}} id='border' className='font-bold font-lato hover:text-green-200' to="/gallery" >Photo Gallery</NavLink>
              <NavLink exact activeStyle={{color: 'white' }} style={{textDecoration: 'none'}} className=' hover:text-white font-lato indicator' to="/gallery">____</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{color: 'white'}} id='border' className='font-bold font-lato hover:text-green-200 ' to="/pastor" >Pastors Corner</NavLink>
              <NavLink exact activeStyle={{color: 'white' }} id='indicate' style={{textDecoration: 'none'}} className='hover:text-white font-lato indicator' to="/pastor">____</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{color: 'white'}} id='border' className='font-bold font-lato hover:text-green-200 ' to="/about" >About</NavLink>
              <NavLink exact activeStyle={{color: 'white' }} style={{textDecoration: 'none'}} className='hover:text-white font-lato indicator' to="/about">__</NavLink>
            </li>
            <li>
              <NavLink exact activeStyle={{backgroundColor:'transparent' }} className="bg-green-500 font-lato hover:text-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" id='border'  to="/department" >Department</NavLink>
              <NavLink exact activeStyle={{color: 'white'  }} style={{textDecoration: 'none'}} className='hover:text-transparent font-lato indicator' to="/department">____</NavLink>
            </li>
          </ul>
          
        </div>
      </nav>
    </header>
  )
}

export default Toolbar
