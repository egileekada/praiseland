import React from 'react'

import { MdMenu } from "react-icons/md";
import './DrawerToggleButton.css'

const drawerToggleButton = (props: any) => (
  <button className="toggle-button" onClick={props.click} >
    <MdMenu style={{height:'35px', width:'30px', color: 'white' }} /> 
  </button>
)

export default drawerToggleButton