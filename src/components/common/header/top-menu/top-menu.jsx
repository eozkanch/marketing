import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsPhone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import "./top-menu.scss"
const TopMenu = () => {
  return (
   
      <div className='top-menu'>
       <Container fluid className=' '>
       <Row className='d-flex justify-content-between'>
        <Col md={5} className=''>
            <Row className='d-flex'>
            <Col md={4} className='top-menu-left text-start'><BsPhone /> (+41 44 444 44 44)</Col>
            <Col md={8} className='top-menu-left text-start'><FaRegEnvelope /> loghj@example.com</Col>
            </Row>  
        </Col>
        <Col md={7} className=''>
              <Row className='d-flex'>
              <Col md={8} className='top-menu-right text-end'><a href='/about'>A propops de nous</a></Col>
              <Col md={2}  className='top-menu-right text-end'><a href='/contact'>Communocation</a></Col>
              <Col md={2} className='top-menu-right  text-end'>Mon Compte</Col>
              
              </Row>    
        </Col>
        </Row>
      
    </Container>
    </div>
  )
}

export default TopMenu