// Header.jsx

import React, { useState, useEffect } from 'react';
import TopMenu from './top-menu/top-menu';
import MiddleMenu from './middle-menu/middle-menu';
import BottomMenu from './bottom-menu/bottom-menu';
import "./header.scss";
import { Col, Container, Row } from 'react-bootstrap';

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isSticky ? 'sticky' : ''}`}>
    <Container>
    <Row >
    <Col xs={12} lg={12} >  <TopMenu /></Col>
    <Col xs={10} md={11}  lg={12}> <MiddleMenu className="middle-menu"/></Col>
    <Col xs={2} md={1}  lg={12}>     <BottomMenu /></Col>
    </Row>
    
     
 
      </Container>
    </div>
  );
}

export default Header;



