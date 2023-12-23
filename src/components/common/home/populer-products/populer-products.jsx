import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import "./populer-products.scss"
import { Link } from 'react-router-dom'
const PopulerProducts = () => {
  return (
    <div className='populer-products'>
        <Container className='image-container '>
          <Row  className='image-col '>
            <Col xs={12} md={12} lg={6} className='image-container-left'>
      
              <img src='/banner17.jpg' />
              <div class="banner-content-left text-left">
						
						<span >NOIX FOLLES</span>
						
						
						<h5 >Délicieux et frais</h5>
						
						
						<Button as={Link} to="/collection/kuruyemisler" className="populer-products-btn ">Acheter</Button>
						
					</div>
 
            </Col>
            <Col  xs={12} md={12} lg={6} className='image-container-left'>
        
              <img src='/banner18.webp' />
              <div className="banner-content-left ">
						
						<span >PETIT-DÉJEUNER</span>
						
						
						<h5 >Pour des tables nature !</h5>
						
						
						<Button as={Link} to="/collection/kahvaltiliklar" className="populer-products-btn ">Acheter</Button>
						
					</div>
       
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default PopulerProducts
