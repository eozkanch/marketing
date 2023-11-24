import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import "./populer-products.scss"
const PopulerProducts = () => {
  return (
    <div className='populer-products'>
        <Container className='image-container '>
          <Row className='image-col'>
            <Col className='image-container-left'>
              <img src='/banner17.jpg' />
              <div class="banner-content-left text-left">
						
						<span >NOIX FOLLES</span>
						
						
						<h3 >Délicieux et frais</h3>
						
						
						<Button href="" className="populer-products-btn ">Acheter</Button>
						
					</div>

            </Col>
            <Col className='image-container-right'>
              <img src='/banner18.webp' />
              <div className="banner-content-right text-left">
						
						<span >PETIT-DÉJEUNER</span>
						
						
						<h3 >Pour des tables nature !</h3>
						
						
						<Button href="" className="populer-products-btn ">Acheter</Button>
						
					</div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default PopulerProducts