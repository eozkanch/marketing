import React from 'react'
import "./style.scss"
import { Col, Container, Row } from 'react-bootstrap';

const RecoverPasswordPage = () => {
  return (
    <div >
    <Container>
      <Row className="recover-password-row">
        <Col xs={12} lg={4} className='recover-password-col'>
         
          <div className="title-text">
                  <h2>Recover Password</h2></div>
                <ul className="fill-form">
                  <li className="log-email">
                    <label for="Email">Courriel</label>
                    <input type="email" name="customer[email]" id="CustomerEmail" className="input-full" placeholder="Courriel" autocorrect="off" autocapitalize="off" autofocus=""/>
                  </li>
                
                 <li className="form-toggle-btn">
              <div className="form-action-button">
                <button type="submit" className="btn btn-style1">Gönder</button>
                <a href="/login" id="HideRecoverPasswordLink">İptal</a>
              </div>
            </li>
            </ul>
      
        </Col>
      </Row>
    </Container>
   
    </div>
    
);
};
  

export default RecoverPasswordPage