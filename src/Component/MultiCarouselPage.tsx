import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Styles/MultiSlides.css';
 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 3// optional, default to 1.
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

class MultiCarouselPage extends React.Component<any, any, any> {

  render(){
    
    
    return ( 
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        arrows={false}
        responsive={responsive}
        partialVisbile={true}
        ssr={true} // means to render carousel on server-side.
        keyBoardControl={true}
        containerClass='carousel-container'
        // customDot='true'
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass='carousel-item-padding-10-px'
      >
        <div className= 'multislide' >
          <div id='center'>
            <img src= {require('../Image/upcoming1.png')} alt='' />
          </div>
        </div>
        <div className= 'multislide'>
          <div id='center'>
            <img src= {require('../Image/upcoming2.png')} alt='' />
          </div>
        </div>
        <div className= 'multislide'>
          <div id='center'>
            <img src= {require('../Image/upcoming1.png')} alt='' />
          </div>
        </div>
        <div className= 'multislide'>
          <div id='center'>
            <img src= {require('../Image/3.jpg')} alt='' />
          </div>
        </div>
      </Carousel>
      
      );
  }
            
}

        export default MultiCarouselPage;
