import React from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Badge from '@mui/material/Badge';
import { CiHeart } from 'react-icons/ci';
import { IoBasketOutline } from 'react-icons/io5';
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
                  <CiHeart size={40} />
                </Badge>
              </Col>
              <Col>
                <Badge badgeContent={0} showZero color="success">
                  <IoBasketOutline size={40} />
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
