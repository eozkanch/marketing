import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import "./bottom-footer.scss";

const BottomFooter = () => {
  return (
    <div className='bottom-footer'>
      <Container >
        <Row className='d-flex justify-content-between'>
          <Col xs={12} md={4} className='copyright'>
            <span>Droits d'auteur<span>&copy;</span>2022 Bizimkiler.ch Tous droits réservés</span>
          </Col>
          <Col xs={12} md={8} className="payment-icon">
            <ul>
              <li>
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

