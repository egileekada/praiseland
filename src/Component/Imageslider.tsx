/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { AnimateOnChange} from 'react-animation';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



type State = {
    COUNT: number,
}

export default class imageslider extends React.Component<any, any, any> {
    state = {
        COUNT: 0
    }
    Timer: any;
    count: number = 0;
    arr = [
        {
            img: require('../Image/1.jpg'),
            header: 'Department of Rccg Praise Land Parish Eagle Island',
            body: 'Editing videos has never felt this easy, Log In or Get Started today',
        },
        {
            img: require('../Image/2.jpg'),
            header: 'Let Your Videos Pop',
            body: 'Editing videos has never felt this easy, Log In or Get Started today',
        },
        {
            img: require('../Image/3.jpg'),
            body: 'Editing videos has never felt this easy, Log In or Get Started today',
            header: 'Get Ready, Set, Action'
        }
    ];
    notActive = "h-2 w-2 rounded bg-gray-100 opacity-50 mr-2 rounded-lg cursor-pointer";
    active = "h-2 w-2 rounded bg-white rounded-lg mr-2  cursor-pointer";

    componentDidMount() {
     this.change();
    }
    change() {
        this.Timer = setInterval(() => {
            if (this.count === this.arr.length - 1) {
                this.count = 0;
                this.setState({
                    COUNT: this.count,
                })
                return;
            } else {
                this.count += 1;
                this.setState({
                    COUNT: this.count,
                })
            }
            
        }, 7000);
    }

    componentWillUnmount() {
        clearInterval(this.Timer);
    }

    slideTo(position: number) {
        this.count = position;
        this.setState({
            COUNT: position
        });
    }
  
    render() {

    return (

        <div style={{backgroundColor: '#000'}}>
          <AnimateOnChange
            animationIn='fadeIn'
            animationOut="fadeOut"
            durationOut="1000"
            style={{ width: '100%', height: '100%'}}
          >
                <div className="carousel" style={{ backgroundPosition: 'center', backgroundImage: `url(${this.arr[this.state.COUNT].img})`, backgroundRepeat: 'no-repeat'}}>
                    <div className="w-full h-full flex justify-center items-center">
                        
                        <Container fluid >
                            <Row xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Col  xs={12} md={12} lg={12} id='slide' >
                                <h1 style={{textShadow:'3px 3px #0700008a'}} className="font-bold font-body text-white items-center text-lg lg:text-4xl xl:text-4xl "  >{this.arr[this.state.COUNT].header}</h1>
                                <p style={{textShadow:'3px 3px #0700008a'}} className="text-white font-mont-medium text-xs">{this.arr[this.state.COUNT].body}</p>      
                            </Col>
                            <Col xs={7} md={7} lg={7} id='indicator' >
                                <div className="flex carousel-indicators " style={{ display:'flex', justifyContent:'center', alignItems:'center' }}> 
                                        {
                                            this.arr.map((item, index) => (
                                                <div onClick={() => this.slideTo(index)} key={index} className={index === this.state.COUNT ? this.active : this.notActive}></div>
                                            ))
                                        }
                                </div>
                            </Col>
                            </Row>
                        </Container>
                    </div>
                    
                </div>
          </AnimateOnChange>
        </div>
    )
    }
}
// className="flex h-16 carousel-indicators sm:bottom-0 "