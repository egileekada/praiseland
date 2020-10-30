import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Style/Gallery.css';

const ImageGrid = ({ setSelectedImg } : any) => {
  const { docs }: any = useFirestore('images');

return (

    <Container fluid>
      <Row id='center' style={{marginBottom: '40px', marginTop: '40px'}} >
      {docs && docs.slice(0, 5).map((doc: { id: string | number | null | undefined; url: string | undefined; }) => (
        <Col 
          className='gallery'
          sm='5' md='5' lg='3' style={{backgroundImage: `url(${doc.url})`, width:'100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '50px'}} 
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