import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { IoIosSearch } from "react-icons/io";
import Badge from '@mui/material/Badge';
import { CiHeart } from "react-icons/ci";
import { IoBasketOutline } from "react-icons/io5";
import "./middle-menu.scss"
const MiddleMenu = () => {
  return (
    <Container fluid className='middle-menu'>
      <Row>
        <Col md={3}>
          <img src="/logo.svg" alt="logo" className='logo' />
        </Col>
        <Col md={7}>
        <InputGroup>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
        <Button><IoIosSearch color='white' size={20}/></Button>
   
      </InputGroup>
        </Col>
        <Col md={2}>
          <Row>
            <Col className='text-end'><Badge badgeContent={0}  showZero color="success">
            <CiHeart size={30}/>
            </Badge>
            </Col>
            <Col><Badge badgeContent={0} showZero color="success">
            <IoBasketOutline size={30}/>
            </Badge>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MiddleMenu