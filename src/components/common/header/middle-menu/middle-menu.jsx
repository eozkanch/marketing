import React from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Badge from '@mui/material/Badge';
import { FiHeart } from "react-icons/fi";
import { MdShoppingBasket } from "react-icons/md";
import { IoIosSearch } from 'react-icons/io';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './middle-menu.scss';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    success: {
      main: 'rgb(111, 117, 49)',
    },
  },
});

const MiddleMenu = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container fluid>
        <Row className='middle-menu'>
        
          <Col md={3}>
          <Link to='/'>
            <img src="/logo.svg" alt="logo" className='logo' />
            </Link>
          </Col>
      
          <Col md={7}>
            <InputGroup>
              <Form.Control placeholder="Rechercher dans la boutique" aria-label="Dollar amount (with dot and two decimal places)" />
              <Button className='search-btn'><IoIosSearch color='white' size={20} /></Button>
            </InputGroup>
          </Col>
          <Col md={2}>
            <Row>
              <Col className='text-end'>
                <Badge badgeContent={0} showZero color="success">
                  <FiHeart size={35}  className='icon'/>
                </Badge>
              </Col>
              <Col>
                <Badge badgeContent={0} showZero color="success">
                  <MdShoppingBasket size={40} className='icon'/>
                </Badge>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export default MiddleMenu;
