import React from 'react'

import image from '../Image/1.jpg'
import Navigate from '../Component/Navigation'
import Navbar from 'react-bootstrap/Navbar';

import '../styles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button'
 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    partialVisibilityGutter: 50,// optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 950 },
    items: 2,
    // slidesToSlide: 2 // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  bigger_phone:{
    breakpoint: { max: 950, min: 580 },
    items: 1,
    // slidesToSlide: 2 // optional, default to 1.
    partialVisibilityGutter: 160,
  },
  big_phone:{
    breakpoint: { max: 580, min: 524 },
    items: 1,
    // slidesToSlide: 2 // optional, default to 1.
    partialVisibilityGutter: 100,
  },
  mobile: {
    breakpoint: { max: 524, min: 0 },
    items: 1,
    // partialVisibilityGutter: 10,
    slidesToSlide: 1 // optional, default to 1.
  }
};


// style={{height:'30%', display: 'flex', flexDirection: 'column', backgroundImage: `url(${pic})`, width:'100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}
class Department extends React.Component<any, any, any> {

    render(){
        return(
            <div style={{backgroundColor:'rgba(187, 181, 181, 0.61)'}} >
                <header>
                <Navbar fixed='top' style={{ height: '65px', width: '100%', position: 'absolute', backgroundColor: 'transparent'}} >
                    <Navigate />
                </Navbar> 
                    <div className='image_container' style={{ backgroundImage:`url(${image})` }}>
                        <h1>Department</h1>
                    </div>
                </header>
                
                <div id='center'>
                    <h1 className='font-bold font-serif' >Department</h1>
                </div>

                <div style={{marginTop:'50px', marginLeft:'20px', marginRight: '20px' }} >
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        partialVisbile={true}
                        ssr={true} // means to render carousel on server-side.
                        keyBoardControl={true}
                        containerClass='carousel-container'
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass='carousel-item-padding-10-px'>

                        <div className= 'department' >
                            <div >
                                <div className='department_header' id='center' >
                                    <img src= {require('../Image/4.jpg')} alt='' />
                                </div>
                                <div className='department_footer ' >
                                    <h5 className='font-bold font-serif' style={{margin: '20px'}} >Prayer Band</h5>
                                    <p style={{color:'gray'}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio laboriosam, aut quidem ratione iste, recusandae, consequatur consectetur iure maiores aperiam sequi perspiciatis facere dicta aliquam quam in id neque. Dolor.</p>
                                    <Button className='font-bold font-serif' style={{width: '120px', margin:'25px'}} variant="secondary">Call</Button> 
                                </div>
                            </div>                            
                        </div>

                        <div className= 'department' >
                            <div >
                                <div className='department_header' id='center' >
                                    <img src= {require('../Image/1.jpg')} alt='' />
                                </div>
                                <div className='department_footer ' >
                                    <h5 className='font-bold font-serif' style={{margin: '20px'}} >Prayer Band</h5>
                                    <p style={{color:'gray'}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio laboriosam, aut quidem ratione iste, recusandae, consequatur consectetur iure maiores aperiam sequi perspiciatis facere dicta aliquam quam in id neque. Dolor.</p>
                                    <Button className='font-bold font-serif' style={{width: '120px', margin:'25px'}} variant="secondary">Call</Button> 
                                </div>
                            </div>                            
                        </div>
                        <div className= 'department' >
                            <div >
                                <div className='department_header' id='center' >
                                    <img src= {require('../Image/3.jpg')} alt='' />
                                </div>
                                <div className='department_footer ' >
                                    <h5 className='font-bold font-serif' style={{margin: '20px'}} >Prayer Band</h5>
                                    <p style={{color:'gray'}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio laboriosam, aut quidem ratione iste, recusandae, consequatur consectetur iure maiores aperiam sequi perspiciatis facere dicta aliquam quam in id neque. Dolor.</p>
                                    <Button className='font-bold font-serif' style={{width: '120px', margin:'25px'}} variant="secondary">Call</Button> 
                                </div>
                            </div>                            
                        </div>
                        <div className= 'department' >
                            <div >
                                <div className='department_header' id='center' >
                                    <img src= {require('../Image/2.jpg')} alt='' />
                                </div>
                                <div className='department_footer ' >
                                    <h5 className='font-bold font-serif' style={{margin: '20px'}} >Prayer Band</h5>
                                    <p style={{color:'gray'}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio laboriosam, aut quidem ratione iste, recusandae, consequatur consectetur iure maiores aperiam sequi perspiciatis facere dicta aliquam quam in id neque. Dolor.</p>
                                    <Button className='font-bold font-serif' style={{width: '120px', margin:'25px'}} variant="secondary">Call</Button> 
                                </div>
                            </div>                            
                        </div>
                        

                    </Carousel>

                </div>
            </div>
        )
    }
}

export default Department