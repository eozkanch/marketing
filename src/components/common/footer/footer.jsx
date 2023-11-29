import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footer.scss"
import { BsPhone } from 'react-icons/bs'
import { FaRegEnvelope } from 'react-icons/fa'
import { SiGooglemaps } from "react-icons/si";
import BottomFooter from './bottom-footer/ bottom-footer'
const Footer = () => {
  return (
    <div className='footer'>
      <Container fluid>
      <div className='logo-div'>
          <Row>
          <Col>
          <span>L</span>
            <span>E</span>
            <span>S</span>
          </Col></Row>
          <Row>
          <Col>
            <span>N</span>
            <span>O</span>
            <span>T</span>
            <span>R</span>
            <span>E</span>
            </Col>
            </Row>
            
            
          </div>
        <Row>
          <Col className='footer-col' >       
         
          <div className='footer-header-title'>Adresse</div>
          <div className='footer-link'><BsPhone /> (+41 44 444 44 44)</div>
          <div className='footer-link'><FaRegEnvelope /> lOg0H@example.com</div>
          <div className='footer-link'><SiGooglemaps />1212 Grand-lancy Genève</div>
          </Col>
          <Col  >
          <div className='footer-header-title'>Institutionnel</div>
          <div className='footer-link'>à propos de nous</div>
          <div className='footer-link'>imprimer</div>
          <div className='footer-link'>Communication</div>
          </Col>
          <Col  >
          <div  className='footer-header-title'>Informations importantes</div>
          <div className='footer-link'>accord de confidentialité</div>
          <div className='footer-link'>Accord d'utilisation</div>
          </Col>
         
          <Col  >
          <div  className='footer-header-title'>Mon compte</div>
          <div className='footer-link'>Connexion</div>
          <div className='footer-link'>Enregistrer</div>
          <div className='footer-link'>Panier</div>
          <div className='footer-link'>Historique des commandes</div>
          <div className='footer-link'>Liste de suivi</div>
          </Col>
          <Col >
           <div  className='footer-header-title'>Ne manquez pas les campagnes !</div>
          <div className='footer-link'>à propos de nous</div>
          <div className='footer-link'>imprimer</div>
          <div className='footer-link'>Communication</div></Col>
        </Row>
      </Container>
  
    </div>
  )
}

export default Footer