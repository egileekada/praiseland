import React, { useState } from 'react'

import { IoIosHome, IoMdArrowRoundBack, IoIosInformationCircle, IoIosPeople, IoIosPerson, IoMdImages, IoMdCard} from "react-icons/io";
import { NavLink } from 'react-router-dom'
import './SideDrawer.css'
import pic from '../Image/gos.jpeg'
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
    <nav className={drawerClasses}>

      <div style={{height:'30%', display: 'flex', flexDirection: 'column', backgroundImage: `url(${pic})`, width:'100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }} >
          <IoMdArrowRoundBack onClick={props.click} className='backicon' />
      </div>
      
      <ul style={{marginTop:'15px'}} >
        
        <hr style={{margin:'0px'}} />
        
        <NavLink exact activeStyle={{backgroundColor: '#87ceeb', color:'blue'}} className='hover:bg-blue-200 drawerlist'  to="/">
            <IoIosHome className='icon' />
            Home
        </NavLink>
        
        <hr style={{margin:'0px'}} />

        <div onClick={props.click} >
          <div  className=' drawerlist' onClick={handleShow}  >        
            <IoMdCard style={{ marginLeft: '10px' }} className='icon' />
            Online Giving
          </div>    
        </div>
        
        <hr style={{margin:'0px'}} />
        
        <NavLink exact activeStyle={{backgroundColor: '#87ceeb', color:'blue'}} className='text-bold drawerlist text-bold hover:bg-blue-200' to="/gallery">
            <IoMdImages className='icon' />
            Photo Gallery
        </NavLink>
        
        <hr style={{margin:'0px'}} />
        
        <NavLink exact activeStyle={{backgroundColor: '#87ceeb', color:'blue'}} className='drawerlist text-bold hover:bg-blue-200' to="/pastor">
            <IoIosPerson className='icon' />
            Pastor Corner
        </NavLink>
        
        <hr style={{margin:'0px'}} />
        
        <NavLink exact activeStyle={{backgroundColor: '#87ceeb', color:'blue'}} className='drawerlist text-bold hover:bg-blue-200' to="/about">
            <IoIosInformationCircle className='icon' />
            About Us
        </NavLink>

        <hr style={{margin:'0px'}} />

        <NavLink exact activeStyle={{backgroundColor: '#87ceeb', color:'blue'}} className='drawerlist text-bold hover:bg-blue-200' to="/department">
            <IoIosPeople className='icon' />
            Department
        </NavLink>
        <hr style={{margin:'0px'}} />
    
      </ul>
      
        <Modal show={show} onHide={handleClose}>
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