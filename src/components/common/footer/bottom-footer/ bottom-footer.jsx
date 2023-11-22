import React from 'react';
import { Col, Row,Container } from 'react-bootstrap';
import "./bottom-footer.scss";

const BottomFooter = () => {
  return (
    <div className='bottom-footer'>
    <Container>
      <Row>
        <Col md={5} className='copyright'> 
        
            <span>droits d'auteur2022 Bizimkiler.ch Tous droits réservés</span>
        
       
        </Col>
        <Col md={7} className="payment-icon">
          <ul >
            <li >
              <img src="/pay/visa.svg" alt="Visa" width="38" height="24" />
            </li>
            <li>
              <img src="/pay/google-pay.svg" alt="Google Pay" width="38" height="24" />
            </li>
            <li>
              <img src="/pay/mastercard.svg" alt="Mastercard" width="38" height="24" />
            </li>
            <li>
              <img src="/pay/american-express.svg" alt="American Express" width="38" height="24" />
            </li>
          </ul>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default BottomFooter;

