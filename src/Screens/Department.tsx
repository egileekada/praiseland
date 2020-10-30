import React from 'react'

import image from '../Image/2.jpg'
import Navigate from '../Component/Navigation'
import Navbar from 'react-bootstrap/Navbar';
import './Style/Screens.css';
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
        const arrs = [
            {
                index: 1,
                img: require('../Image/1.jpg'),
                depname: 'Redeemed volunteer',
                name: 'Bro. Wilson',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '08057636389',
            },
            {
                index: 2,
                img: require('../Image/2.jpg'),
                depname: 'Sanitation',
                name: 'Bro. Oto.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '08038700491',
            },
            {
                index: 3,
                img: require('../Image/3.jpg'),
                depname: 'Chior',
                name: 'Bro. Franklin Firstborn.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '07011057211',
            },
            {
                index: 4,
                img: require('../Image/4.jpg'),
                depname: 'Ushering',
                name: "Dcn's. Rose Okowchi.",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '08066634027',
            },
            {
                index: 5,
                img: require('../Image/1.jpg'),
                depname: 'Sunday School',
                name: "Dcn's. Eka Evans",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '08132803150',
            },
            {
                index: 6,
                img: require('../Image/2.jpg'),
                depname: 'House Fellowship',
                name: "Dcn's. Emmanuel Ndifreke",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '08169115197',
            },
            {
                index: 7,
                img: require('../Image/3.jpg'),
                depname: 'Evangelism',
                name: 'Sis. Stella D.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '07063045933',
            },
            {
                index: 8,
                img: require('../Image/4.jpg'),
                depname: 'Follow-Up',
                name: 'Dcn. Abraham U.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '08039566443',
            },
            {
                index: 9,
                img: require('../Image/1.jpg'),
                depname: 'Prayer Band',
                name: "Dcn's Boma Jack",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '08030849221',
            },
            {
                index: 10,
                img: require('../Image/2.jpg'),
                depname: 'Welfare',
                name: "Dcn's Fiderikumo A.",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '08033365369',
            },
            {
                index: 11,
                img: require('../Image/3.jpg'),
                depname: 'Family Affairs ',
                name: 'Mummy Davies',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '08069058738',
            },
            {
                index: 12,
                img: require('../Image/4.jpg'),
                depname: 'Maintenance',
                name: 'Bro. Robinson',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '07039452722',
            },
            {
                index: 13,
                img: require('../Image/1.jpg'),
                depname: 'Media',
                name: 'Bro. Olayinka',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '08056090045',
            },
            {
                index: 14,
                img: require('../Image/2.jpg'),
                depname: 'Technical',
                name: 'Bro. Prince Firstborn',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '08064808190',
            },
            {
                index: 15,
                img: require('../Image/3.jpg'),
                depname: 'ICT',
                name: 'Dcn. IDEZI Emmanuel',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium nihil asperiores odio vitae. Nihil, odit error! Quis commodi fuga recusandae. Voluptatum optio delectus exercitationem, ullam officia ut eligendi recusandae.',
                number: '07037001661',
            }
        ]; 

        const listItems = arrs.map((arr: any) =>

            <div className= 'department' key={arr.index} >
                <div >
                    <div className='department_header' id='center' >
                        <img src= {arr.img} alt='' />
                    </div>
                    <div className='department_footer ' >
                        <h3 className='font-Poppinsbold text-2xl' style={{margin: '20px'}} >{arr.depname}</h3>
                        <div style={{display:'flex', flexDirection: 'column'}} >
                            <h5 className='font-Poppinsbold text-lg'>Head Of Department</h5>
                            <p className='font-bold  font-Poppins'>{arr.name}</p>
                        </div>
                        <div style={{width:'100%', padding: '10px'}}>
                            <h6 className='font-Poppinsbold text-lg'>Description</h6>
                            <p style={{textAlign: 'center', marginTop:'10px'}} className='font-Poppins text-md'>{arr.description}</p>
                        </div>
                        <Button className='font-bold font-Poppinsbold' style={{width: '120px', margin:'25px'}} href='tel: 07030697459' variant="secondary">Call</Button> 
                    </div>
                </div>
            </div>
        );
        return(
            <div style={{backgroundColor:'rgba(187, 181, 181, 0.61)'}} >
                <header>
                <Navbar fixed='top' style={{ height: '65px', width: '100%', position: 'absolute', backgroundColor: 'transparent'}} >
                    <Navigate />
                </Navbar> 
                    <div className='image_container' style={{ backgroundImage:`url(${image})` }}>
                        <h1 className='font-Poppinsbold text-white items-center text-xl lg:text-4xl xl:text-4xl ' style={{margin:'40px', textAlign:'center'}} >Departments Of RCCG Praise Land Parish Eagle Island</h1>
                    </div>
                </header>
                
                <div id='center'>
                    <h3 className='font-Poppinsbold text-black items-center text-2xl lg:text-4xl xl:text-4xl ' >Department</h3>
                </div>

                <div style={{marginTop:'50px', marginLeft:'10px', marginRight: '10px' }} >
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

                            {listItems}

                    </Carousel>

                </div>
            </div>
        )
    }
}

export default Department

// function data() {
//     const arrs = [
//         {
//             index: 1,
//             img: require('../Image/1.jpg'),
//             name: 'jame',
//             number: '07030697459',
//         },
//         {
//             index: 2,
//             img: require('../Image/2.jpg'),
//             name: 'jame',
//             number: '07030697459',
//         },
//         {
//             index: 3,
//             img: require('../Image/3.jpg'),
//             name: 'jame',
//             number: '07030697459',
//         }
//     ];
//     const listItems = arrs.map((arr: any) =>
//             <div key={arr.index}>
//                 <h3>{arr.name}</h3>
//                 <Button className='font-bold font-serif' style={{width: '120px', margin:'25px'}} href='tel: +{arr.number}' variant="secondary">Call</Button>
//             </div>
//         );
// }