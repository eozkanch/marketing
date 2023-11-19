import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsPhone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import "./top-menu.scss"
const TopMenu = () => {
  return (
    <Container fluid>
      <div className='d-flex justify-content-between gap-5 bg-primary text-black'>
        <Col md={4} className='flex-start'>
            <Row className='d-flex'>
            <Col md={6}><BsPhone /> (+41 44 444 44 44)</Col>
            <Col md={6}><FaRegEnvelope /> lOg0H@example.com</Col>
            </Row>  
        </Col>
        <Col md={8} className='flex-end'>
              <Row className='d-flex'>
              <Col md={5} className='text-end'>A prpops de nous</Col>
              <Col md={2} >Communocation</Col>
              <Col md={5} className='text-start'>Mon Compte</Col>
              
              </Row>    
        </Col>
      </div>
    </Container>
  )
}

export default TopMenu