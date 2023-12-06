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
						
						
						<h4 >Délicieux et frais</h4>
						
						
						<Button href="/collection/kuruyemisler" className="populer-products-btn ">Acheter</Button>
						
					</div>
 
            </Col>
            <Col  xs={12} md={12} lg={6} className='image-container-left'>
        
              <img src='/banner18.webp' />
              <div className="banner-content-left ">
						
						<span >PETIT-DÉJEUNER</span>
						
						
						<h4 >Pour des tables nature !</h4>
						
						
						<Button href="/collection/kahvaltiliklar" className="populer-products-btn ">Acheter</Button>
						
					</div>
       
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default PopulerProducts
