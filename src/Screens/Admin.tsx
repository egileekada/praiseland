import React from 'react'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import img from '../Image/3.jpg'
import Button from 'react-bootstrap/Button'
import { MdAccountCircle, MdLocalPostOffice, MdLock } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageGrid from '../Gallery_Component/Admin_Gallery'
import UploadForm from '../Gallery_Component/UploadForm';
import Modal from 'react-bootstrap/Modal'
import { projectFirestore } from '../firebase/config';


export default function Admin() {
    return(
        <div>
      <Router>
          <Switch>                              
            <Route exact path="/admin"  component={Login} />   
            <Route exact path="/main"  component={main} />         
            <Route exact path="/admin_gallery"  component={Gallery} />                 
          </Switch>
      </Router>
    </div>
  );
}

function Login() {

    return(
    <div style={{width:'100%', height: '100%', display: 'flex', flexDirection: 'row'}}>
        <div className='login' >
            <img src={require('../Image/admin.jpg')} alt='admin' style={{ width: '50%' }} />
        </div>
        <div style={{width:'50%', display: 'flex', justifyContent:'center', alignItems: 'center', height: '100vh'}}>
            <div style={{backgroundColor:'lightgreen', padding: '30px', borderRadius: '15px', display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1 className='font-Poppinsbold text-3xl text-white' >Login</h1>
                <MdAccountCircle size= '150px' />

                <div style={{margin: '10px', marginTop:'50px'}} >
                    <MdLocalPostOffice size= '30px' style={{position: 'absolute', marginLeft: '6px', marginTop: '3.5px'}} />
                    <input className="placeholder-gray-500 border font-lato" placeholder="jane@example.com" style={{padding: '5px', borderRadius: '5px', width: '30vh', paddingLeft: '43px'}} ></input>
                </div>
                <div style={{margin: '10px'}} >
                    <MdLock size= '30px' style={{position: 'absolute', marginLeft: '6px', marginTop: '3.5px'}} />
                    <input className="placeholder-gray-500 border font-lato" placeholder="Password" style={{padding: '5px', borderRadius: '5px', width: '30vh', paddingLeft: '43px'}} ></input>    
                </div>
                <NavLink to='./main' ><Button
                    variant="dark"
                    className='font-Poppinsbold'
                    style={{width: '150px', margin: '30px'}}
                >Login</Button></NavLink>
            </div>
        </div>
    </div>
    )
}

function main () {
    return(
        <div>
            <Container fluid >
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'60px'}} >
                    <Col lg={3} style={{height: '400px', backgroundColor: 'blueviolet', margin: '20px'}} id='center' ><NavLink to='./admin_gallery'><h1>Gallery</h1></NavLink></Col>
                    <Col lg={3} style={{height: '400px', backgroundColor: 'blueviolet', margin: '20px'}} ></Col>
                    <Col lg={3} style={{height: '400px', backgroundColor: 'blueviolet', margin: '20px'}} ></Col>
                    <Col lg={3} style={{height: '400px', backgroundColor: 'blueviolet', margin: '20px'}} ></Col>
                </Row>
            </Container>
        </div>
    )
}

function Gallery() {

  const [selectedImg, setSelectedImg]:any = React.useState(null);

  const [modalShow, setModalShow] = React.useState(false);

//   const del = projectFirestore.collection('image').doc(selectedImg).delete().then(function(){
//       console.log('Document Deleted');
//   }).catch(function(error: any){
//         console.log('Error Deleting Document');
//   })

    return(
        <div>
            {/* <Title/>  */}
            <UploadForm />
        <div style={{marginTop: '20px'}} onClick={() => setModalShow(true)}>
            <ImageGrid setSelectedImg={setSelectedImg}   />
        </div>
        
        { selectedImg && (

                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    // {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    
                >
                    <img
                        src={selectedImg}     
                        alt= 'pics'
                    />
                </Modal>
        )}           
        </div>
    )
}