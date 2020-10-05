import React, {useState} from 'react';
// import Navigate from '../Component/Home-Navigation';
import Carousel from '../Component/Imageslider'
import Main from '../Component/Body'
import Bottom from '../Component/footer'
import Navigate from '../Component/Navigation'
import Navbar from 'react-bootstrap/Navbar';

import { MdKeyboardArrowUp } from "react-icons/md";

import '../styles.css';


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
    
// function home(){

//     const [showScroll, setShowScroll] = useState(false)
  
//     const checkScrollTop = () => {
//       if (!showScroll && window.pageYOffset > 400){
//         setShowScroll(true)
//       } else if (showScroll && window.pageYOffset <= 400){
//         setShowScroll(false)
//       }
//     };
  
//     const scrollTop = () =>{
//       window.scrollTo({top: 0, behavior: 'smooth'});
//     };
  
//     window.addEventListener('scroll', checkScrollTop)

//         return(
//             <div>
//                 <header>
//                     <Navigate/>

//                     <Carousel/>
//                 </header>
//                 <div >
//                 <button onClick={() => scrollTop} className="scrollTop">Top</button>
//                     <Main/>
//                 </div>        
//                 <Bottom_Component />

//             </div>
//         )
// }
 
// export default home;

