import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import "./footer.scss"
import { BsPhone } from 'react-icons/bs'
import { FaRegEnvelope } from 'react-icons/fa'
import { SiGooglemaps } from "react-icons/si";
import BottomFooter from './bottom-footer/ bottom-footer'
const Footer = () => {
  return (
    <div className='footer'>
      <Container >
            <Row className='logo-div'>
            <Col xs={12} md={12} lg={12}><img src='/Resim1Q.png' alt='logo' />
                  </Col>
               
                    
                  
            </Row>
        <Row className='footer-row-md'>
          <Col className='footer-col' >       
         
          <div className='footer-header-title'>Adresse</div>
          <div className='footer-link'><BsPhone /> (+41 44 444 44 44)</div>
          <div className='footer-link'><FaRegEnvelope /> lOg0H@example.com</div>
          <div className='footer-link'><SiGooglemaps />1212 Grand-lancy Genève</div>
          </Col>
          <Col>
          
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
        <Row className='footer-row-xs'>
          <Col  xs={12}className='footer-col'>
            <Accordion defaultActiveKey="1" >
              <Accordion.Item eventKey="0">
                <Accordion.Header><div className='footer-header-title'>Adresse</div></Accordion.Header>
                <Accordion.Body>
                  <div className='footer-link'><BsPhone /> (+41 44 444 44 44)</div>
                  <div className='footer-link'><FaRegEnvelope /> lOg0H@example.com</div>
                  <div className='footer-link'><SiGooglemaps />1212 Grand-lancy Genève</div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xs={12} className='footer-col'>
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="1">
                <Accordion.Header><div className='footer-header-title'>Institutionnel</div></Accordion.Header>
                <Accordion.Body>
                  <div className='footer-link'>à propos de nous</div>
                  <div className='footer-link'>imprimer</div>
                  <div className='footer-link'>Communication</div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xs={12} className='footer-col'>
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="2">
                <Accordion.Header><div className='footer-header-title'>Informations importantes</div></Accordion.Header>
                <Accordion.Body>
                  <div className='footer-link'>accord de confidentialité</div>
                  <div className='footer-link'>Accord d'utilisation</div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col  xs={12} className='footer-col'>
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="3">
                <Accordion.Header><div className='footer-header-title'>Mon compte</div></Accordion.Header>
                <Accordion.Body>
                  <div className='footer-link'>Connexion</div>
                  <div className='footer-link'>Enregistrer</div>
                  <div className='footer-link'>Panier</div>
                  <div className='footer-link'>Historique des commandes</div>
                  <div className='footer-link'>Liste de suivi</div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xs={12} className='footer-col'>
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="4">
                <Accordion.Header><div className='footer-header-title'>Ne manquez pas les campagnes !</div></Accordion.Header>
                <Accordion.Body>
                  <div className='footer-link'>à propos de nous</div>
                  <div className='footer-link'>imprimer</div>
                  <div className='footer-link'>Communication</div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
  
    </div>
  )
}

export default Footer