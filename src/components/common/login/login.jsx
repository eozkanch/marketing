// Import the SCSS file at the top of your React component
import React from 'react';
import './login.scss'; // Import the styles
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <div className="login-container">
      <Container>
        <Row className="login-row">
          <Col xs={12} lg={6} className="login-form text-right">
          <div className="login-form-container">
                <div className="title-text">
                  <h2>Connexion</h2><p>Inscrivez-vous pour voir les détails du compte.</p></div>
                <ul className="fill-form">
                  <li className="log-email">
                    <label for="Email">Courriel</label>
                    <input type="email" name="customer[email]" id="CustomerEmail" className="input-full" placeholder="Courriel" autocorrect="off" autocapitalize="off" autofocus=""/>
                  </li>

                  
                  <li className="log-pwd">
                    <label>Mot de passe</label>
                    <input type="password" value="" name="customer[password]" id="CustomerPassword" className="input-full" placeholder="Mot de passe"/>
                  </li>
                  

                  <li className="form-toggle-btn">
                    <div className="form-action-button">
                      <button className="btn btn-style1 w-100" type="submit">Se connecter</button>
                      
                      <a href="#recover" id="RecoverPassword">Mot de passe oublié?</a>
                      
                    </div>
                  </li>
                </ul>
              </div> 	
          </Col>
          <Col xs={12} lg={6}>
          <div className="side-form-wrap">
              <div className="acc-title">
                <h6>Pas encore membre?</h6>
                <div className="account-optional-action">
                  <Button className="btn btn-style2 w-100" variant="outline-primary" href="/register" >Créer un compte</Button>
                </div>
              </div>
              <div className="term-privacy">
                <p className="term-con">
                  <span><sup>*</sup>
                  <a href="pages/kullanim-sozlesmesi" target="_blank">Accord d'utilisation</a>
                  </span>
                </p>
                <p className="pri-pol">
                  <span>Votre vie privée et la sécurité sont importantes pour nous. Pour plus d'informations sur la façon dont nous utilisons vos données</span>
                </p>
                <p className="term-con">
                  <span>
                  <a href="pages/gizlilik-sozlesmesi" target="_blank">Accord de confidentialité</a>
                  </span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

