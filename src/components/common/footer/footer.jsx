import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footer.scss"
import { BsPhone } from 'react-icons/bs'
import { FaRegEnvelope } from 'react-icons/fa'
import { SiGooglemaps } from "react-icons/si";
const Footer = () => {
  return (
    <div className='footer'>
      <Container fluid>
      <img src="/logo.svg" alt="logo" className='footer-logo' />
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