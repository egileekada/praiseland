/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { AnimateOnChange} from 'react-animation';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


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
            header: 'Welcome to R.C.C.G Praise Land Parish Eagle Island',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis dolorum nisi et possimus? Expedita atque rerum saepe, natus exercitationem maxime provident perspiciatis, architecto quae dignissimos similique, optio reprehenderit. Non.',
        },
        {
            img: require('../Image/2.jpg'),
            header: 'Where We worship and experience an outflow of Gods Presence',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis dolorum nisi et possimus? Expedita atque rerum saepe, natus exercitationem maxime provident perspiciatis, architecto quae dignissimos similique, optio reprehenderit. Non.',
        },
        {
            img: require('../Image/3.jpg'),
            header: 'We Share the word of God as it is without compromise or hesitation',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis dolorum nisi et possimus? Expedita atque rerum saepe, natus exercitationem maxime provident perspiciatis, architecto quae dignissimos similique, optio reprehenderit. Non.'
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
                            <Col  xs={9} md={9} lg={7} id='slide' >
                                <h1 style={{textShadow:'3px 3px #0700008a'}} className="font-bold font-serif text-white items-center text-lg lg:text-4xl xl:text-4xl "  >{this.arr[this.state.COUNT].header}</h1>
                                {/* <p style={{textShadow:'3px 3px #0700008a'}} className="text-white font-mont-medium text-xs">{this.arr[this.state.COUNT].body}</p>       */}
                                <Button className='font-bold' style={{position: 'absolute', bottom: '10px', height: '40px',width: '150px', fontSize:'15px' }} variant="success">Contact Us</Button>
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

function ModalBlock() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Modal show={show} onHide={handleClose} centered >
            <Modal.Header closeButton>
              <Modal.Title className='font-bold font-serif'>
                Online Giving
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <Dialog /> */}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} variant="secondary">Close</Button>                              
            </Modal.Footer>
          </Modal>
    )
}
// className="flex h-16 carousel-indicators sm:bottom-0 "