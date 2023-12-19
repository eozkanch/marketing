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
          <Col className='info-col' sm={12}  md={4}>
          <div className='icon-div'><BsBoxSeam size={25} className='icon'/></div>
          <div> 
          <span>Achats 100 % Sécurisés</span>
          <p>Notre protection produit couvre votre achat du <br/> clic à la livraison.</p>
          </div>
         
          </Col>
          <Col className='info-col info-middle' sm={12} md={4}>
          <div className='icon-div'><HiOutlineHome size={25} className='icon'/></div>
        <div>
          <span>Livraison Rapide</span>
          <p>Après votre commande, nos produits sont<br/>expédiés sous 2 jours ouvrés.</p>
          </div>
          </Col>
          <Col className='info-col' sm={12} md={4}>
          <div className='icon-div'><ImHeadphones size={25} className='icon'/></div>
          <div>
          <span>Centre D'aide 24h/24 Et 7j/7</span>
          <p>Avoir une question? Vous pouvez nous<br/>contacter et demander.</p>
          </div>
          </Col>
        </Row>
      </Container>

      </div>

  )
}

export default TopComponent