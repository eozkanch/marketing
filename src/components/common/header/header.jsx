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

  
    <div  className='header-container'>
   
      <Container className={`header ${isSticky ? 'sticky' : ''}`}>
        
          <Col xs={12} lg={12}  >  <TopMenu /></Col>
          <Col xs={12} md={12}  lg={12}> <MiddleMenu className="middle-menu"/></Col>
          <Col md={12} lg={12}> <BottomMenu className="bottom-menu" /></Col>
          
      </Container>
     
    </div>
  );
}

export default Header;



