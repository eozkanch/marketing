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
          <Col md ={2}>       
         
          <div className='footer-header-title'>Adresse</div>
          <div><BsPhone /> (+41 44 444 44 44)</div>
          <div><FaRegEnvelope /> lOg0H@example.com</div>
          <div><SiGooglemaps />1212 Grand-lancy Genève</div>
          </Col>
          <Col  md ={2}>
          <div className='footer-header-title'>Institutionnel</div>
          <div>à propos de nous</div>
          <div>imprimer</div>
          <div>Communication</div>
          </Col>
          <Col  md ={3}>
          <div  className='footer-header-title'>Informations importantes</div>
          <div>accord de confidentialité</div>
          <div>Accord d'utilisation</div>
          </Col>
         
          <Col  md ={2}>
          <div  className='footer-header-title'>Mon compte</div>
          <div>Connexion</div>
          <div>Enregistrer</div>
          <div>Panier</div>
          <div>Historique des commandes</div>
          <div>Liste de suivi</div>
          </Col>
          <Col md ={3}>
           <div  className='footer-header-title'>Ne manquez pas les campagnes !</div>
          <div>à propos de nous</div>
          <div>imprimer</div>
          <div>Communication</div></Col>
        </Row>
      </Container>
  
    </div>
  )
}

export default Footer