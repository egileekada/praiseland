import React from 'react'

import './SideDrawer.css'

const Backdrop = (props: any) => (
    <div className='backdrop' onClick={props.click} />
)

export default Backdrop;