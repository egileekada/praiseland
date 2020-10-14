import React from 'react';
import useFirestore from '../hooks/useFirestore';
// import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
// import Modal from 'react-bootstrap/Modal'
import '../styles.css';

const ImageGrid = ({ setSelectedImg } : any) => {
  const { docs }: any = useFirestore('images');

  return (

    <Container fluid>
      <Row id='center' style={{marginBottom: '40px', marginTop: '40px'}} >
      {docs && docs.map((doc: { id: string | number | null | undefined; url: string | undefined; }) => (
        <Col 
          className='gallery'
          sm='9' md='5' lg='3' style={{backgroundImage: `url(${doc.url})`, height:'300px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} 
        // layout
        //   whileHover={{ opacity: 1 }}
          
          onClick={() => setSelectedImg(doc.url)}
          />
        ))}
      </Row>
                
    </Container>
  )
}

export default ImageGrid;