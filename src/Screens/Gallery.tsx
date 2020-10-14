import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigate from '../Component/WhiteNavbar'
// import UploadForm from '../Gallery_Component/UploadForm';
import ImageGrid from '../Gallery_Component/ImageGrid';
import Modal from 'react-bootstrap/Modal'

function App() {
  const [selectedImg, setSelectedImg]:any = useState(null);

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">

        <Navbar sticky='top' bg="black" style={{height: '65px', width: '100%', position: 'fixed', marginBottom: '60px'}} >
            <Navigate />
        </Navbar> 

        
        {/* <Title/> */}
        {/* <UploadForm /> */}
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
  );
}

export default App;