import React, { useState } from 'react'

import { IoIosHome, IoMdClose, IoIosInformationCircle, IoIosPeople, IoIosPerson, IoMdImages, IoMdCard} from "react-icons/io";
import { NavLink } from 'react-router-dom'
import './SideDrawer.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Dialog from '../Component/Online-Giving'

const SideDrawer = (props: any) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    let drawerClasses = 'side-drawer'
    if (props.show) {
      drawerClasses = 'side-drawer open'
    }
  return (
    <nav className={drawerClasses} style={{overflow:'scroll'}} >

      <div className='sidebar_header' >
        <p className='font-Poppinsbold' style={{margin: '10px'}} >Praise Land Parish</p>
          <IoMdClose onClick={props.click} className='backicon' />
      </div>
      
      <ul style={{marginTop:'15px', overflow:'scroll'}} >
        
        <hr style={{margin:'0px'}} />
        
        <NavLink exact activeStyle={{backgroundColor: '#87ceeb', color:'blue'}} className='font-Poppins text-md font-bold hover:bg-blue-200 drawerlist'  to="/">
            <IoIosHome className='icon' />
            Home
        </NavLink>
        
        <hr style={{margin:'0px'}} />

        <div onClick={props.click} >
          <div  className='font-Poppins text-md font-bold drawerlist' onClick={handleShow} >        
            <IoMdCard style={{marginLeft:'20px'}} className='icon' />
            Online Giving
          </div>    
        </div>
        
        <hr style={{margin:'0px'}} />
        
        <NavLink exact activeStyle={{backgroundColor: '#87ceeb', color:'blue'}} className='font-Poppins text-md font-bold drawerlist hover:bg-blue-200' to="/gallery">
            <IoMdImages className='icon' />
            Photo Gallery
        </NavLink>
        
        <hr style={{margin:'0px'}} />
        
        <NavLink exact activeStyle={{backgroundColor: '#87ceeb', color:'blue'}} className='font-Poppins text-md font-bold drawerlist hover:bg-blue-200' to="/pastor">
            <IoIosPerson className='icon' />
            Pastor Corner
        </NavLink>
        
        <hr style={{margin:'0px'}} />
        
        <NavLink exact activeStyle={{backgroundColor: '#87ceeb', color:'blue'}} className='font-Poppins text-md font-bold drawerlist hover:bg-blue-200' to="/about">
            <IoIosInformationCircle className='icon' />
            About Us
        </NavLink>

        <hr style={{margin:'0px'}} />

        <NavLink exact activeStyle={{backgroundColor: '#87ceeb', color:'blue'}} className='font-Poppins text-md font-bold hover:bg-blue-200 drawerlist' to="/department">
            <IoIosPeople className='icon' />
            Department
        </NavLink>
        <hr style={{margin:'0px'}} />
    
      </ul>
      
        <Modal show={show} onHide={handleClose} centered >
            <Modal.Header closeButton>
              <Modal.Title className='font-bold font-serif'>
                Online Giving
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Dialog />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} variant="secondary">Close</Button>                              
            </Modal.Footer>
          </Modal>

    </nav>
  )
}

export default SideDrawer