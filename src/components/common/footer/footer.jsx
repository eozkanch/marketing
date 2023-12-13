import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import "./footer.scss"
import { BsPhone } from 'react-icons/bs'
import { FaRegEnvelope } from 'react-icons/fa'
import { SiGooglemaps } from "react-icons/si";
import BottomFooter from './bottom-footer/ bottom-footer'
import { Link } from 'react-router-dom'
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
         
          <span className='footer-header-title'>Adresse</span>
          <span className='footer-link'><BsPhone /> (+41 44 444 44 44)</span>
          <span className='footer-link'><FaRegEnvelope /> lOg0H@example.com</span>
          <span className='footer-link'><SiGooglemaps />1212 Grand-lancy Genève</span>
          </Col>
          <Col  className='footer-col'>
          
            <span className='footer-header-title'>Institutionnel</span>
            <Link  to="/about" className='footer-link'>à propos de nous</Link>
            <Link to="/contact" className='footer-link'>Communication</Link>
     
          </Col>
          <Col  className='footer-col' >
          <span  className='footer-header-title'>Informations importantes</span>
          <Link to="/confidentiality-agreement" className='footer-link'>accord de confidentialité</Link>
          <Link to="/use-agreement" className='footer-link'>Accord d'utilisation</Link>
          </Col>
         
          <Col   className='footer-col'>
          <span  className='footer-header-title'>Mon compte</span>
          <Link to="/login" className='footer-link'>Connexion</Link>
          <Link to="/register" className='footer-link'>Enregistrer</Link>
          <Link to="/cart" className='footer-link'>Panier</Link>
          <Link to="/favori" className='footer-link'>Liste de suivi</Link>
          </Col>
          <Col >
           <span  className='footer-header-title'>Ne manquez pas les campagnes !</span>
          <div className='footer-link'>Soyez informé des remises spéciales et des nouveaux produits !</div>
          </Col>
      
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
                <Link  to="/about" className='footer-link'>à propos de nous</Link>
            <Link to="/contact" className='footer-link'>Communication</Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xs={12} className='footer-col'>
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="2">
                <Accordion.Header><div className='footer-header-title'>Informations importantes</div></Accordion.Header>
                <Accordion.Body>
                <Link to="/confidentiality-agreement" className='footer-link'>accord de confidentialité</Link>
          <Link to="/use-agreement" className='footer-link'>Accord d'utilisation</Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col  xs={12} className='footer-col'>
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="3">
                <Accordion.Header><div className='footer-header-title'>Mon compte</div></Accordion.Header>
                <Accordion.Body>
                <Link to="/login" className='footer-link'>Connexion</Link>
          <Link to="/register" className='footer-link'>Enregistrer</Link>
          <Link to="/cart" className='footer-link'>Panier</Link>
          <Link to="/favori" className='footer-link'>Liste de suivi</Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xs={12} className='footer-col'>
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="4">
                <Accordion.Header><div className='footer-header-title'>Ne manquez pas les campagnes !</div></Accordion.Header>
                <Accordion.Body>
                  <div className='footer-link'>Soyez informé des remises spéciales et des nouveaux produits !</div>
                 
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