import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi2";
import { ImHeadphones } from "react-icons/im";
import "./top-component.scss"
const TopComponent = () => {
  return (


<div className='top-component'>
    
      <Container className='home-page-info' >
        <Row >
          <Col className='info-col' md={4}>
          <div className='icon-div'><BsBoxSeam size={30} className='icon'/></div>
          <h3>Achats 100 % Sécurisés</h3>
          <p>Notre protection produit couvre votre achat du <br/> clic à la livraison.</p>
          </Col>
          <Col className='info-col info-middle' md={4}>
          <div className='icon-div'><HiOutlineHome size={30} className='icon'/></div>
        
          <h3>Livraison Rapide</h3>
          <p>Après votre commande, nos produits sont<br/>expédiés sous 2 jours ouvrés.</p></Col>
          <Col className='info-col' md={4}>
          <div className='icon-div'><ImHeadphones size={30} className='icon'/></div>
     
          <h3>Centre D'aide 24h/24 Et 7j/7</h3>
          <p>Avoir une question? Vous pouvez nous<br/>contacter et demander.</p></Col>
        </Row>
      </Container>

      </div>

  )
}

export default TopComponent