import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';




const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-content">
      <Row className='error-row'>   
      <Col xs={12} md={12} lg={12}><img className='logo' src="/Resim1Q.png" alt="logo" /></Col> 
      <Col xs={12} md={12} lg={12}><img  className="error-image" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"/></Col>
      <Col xs={12} md={12} lg={12}><h1 className="error-info">That’s an <span>ERROR.</span></h1></Col>
      <Col xs={12} md={12} lg={12}><Link to={`/`} className="back-link">
          Return To <span>Homepage</span> 
        </Link></Col>
      </Row>
    
 
      </div>
    </div>
  );
};

export default ErrorPage;