import React, {useState} from 'react';
import Carousel from '../Component/Slides'
import Main from '../Component/Body'
import Bottom from '../Component/Footer'
import Navigate from '../Component/Navigation'
import Navbar from 'react-bootstrap/Navbar';

import { MdKeyboardArrowUp } from "react-icons/md";

import './Style/Screens.css';


const Home = () =>{

  

    const [showScroll, setShowScroll] = useState(false)
  
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    window.addEventListener('scroll', checkScrollTop)
  
    return (
        <div>
            <header>
              <Navbar fixed='top' style={{ height: '65px', width: '100%', position: 'absolute', backgroundColor: 'transparent'}} >
                <Navigate />
              </Navbar> 
                <Carousel/>

            </header>
            <div >  
                <Main/>
                <button onClick={scrollTop} className="scrollTop" style={{ display: showScroll ? 'flex' : 'none'}}><MdKeyboardArrowUp style={{height:'40px', width: '40px' }} /></button>
            </div>        
                <Bottom />
        
        </div>
    );
}
  
  export default Home;

