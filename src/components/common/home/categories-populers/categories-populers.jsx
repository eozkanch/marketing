import React from 'react'
import { Row,Col, Container } from 'react-bootstrap';
import "./categories-populers.scss"
const CategoriesPopulers = () => {
  return (
    <div className='categories-populers'>
    <h1>Catégories populaires</h1>
        <Container>
            <Row className='categories-row'>
                <Col className='categories-col' md={2}>
                    <div>
                        <span className='img-fluid'>6 products</span>
                        <img src='/categories/kuru-meyve-banner-210.avif' alt='banner' />
                        <span className='cat-title'>Fruit sec</span>
                    </div>
                </Col>
                <Col className='categories-col' md={2}>
                <span className='img-fluid'>18 products</span>
                <img src='/categories/unlu-mamuller-210x210.avif' alt='banner' />
                <span className='cat-title'>Produits Cake-Dessert</span>
                </Col>
                <Col className='categories-col' md={2}>
                 <span className='img-fluid'>15 products</span>
                 <img src='/categories/kahvalti-tabagi-400.webp' alt='banner' />
                 <span className='cat-title'>Petit Déjeuners</span>
                 </Col>
                <Col  className='categories-col' md={2}>
                  <span className='img-fluid'>16 products</span>
                  <img src='/categories/kuruyemis-banner-210x210.avif' alt='banner' />
                  <span className='cat-title'>Epices</span>
                  </Col>
                <Col className='categories-col' md={2}> 
                <span className='img-fluid'>23 products</span>
                <img src='/categories/baharat-banner.webp' alt='banner' />
                <span className='cat-title'>Noisettes</span>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CategoriesPopulers