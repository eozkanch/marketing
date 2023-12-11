import React from 'react'
import "./register.scss"
import { Button, Col, Container, Row } from 'react-bootstrap'

const Register = () => {
  return (
    <div className="register-container">
    <Container>
      <Row className="register-row">
        <Col xs={12} lg={6} className="register-form text-right">
        <div className="register-form-container">
              <div className="title-text">
                <h2>Créer un compte</h2><p>Inscrivez-vous pour voir les détails du compte.</p></div>
              <ul className="fill-form">
              <li className="log-firstname">
                    <label for="FirstName">Prénom</label>
                    <input type="text" name="customer[firstname]" id="FirstName" className="input-full" placeholder="Prénom" autocorrect="off" autocapitalize="off" autofocus=""/>
                  </li>

                  <li className="log-lastname">
                    <label for="LastName">Nom</label>
                    <input type="text" name="customer[lastname]" id="LastName" className="input-full" placeholder="Nom" autocorrect="off" autocapitalize="off" autofocus=""/>
                  </li>

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
                      <button className="btn btn-style1 w-100" type="submit">Créer</button>
                      <a href="/recover-password" id="RecoverPassword">Mot de passe oublié?</a>
                    </div>
                  </li>
              </ul>
            </div> 	
        </Col>
        <Col xs={12} lg={6}>
        <div className="side-form-wrap">
            <div className="acc-title">
              <h6>Déjà membre?</h6>
              <div className="account-optional-action">
                <Button className="btn btn-style2 w-100" variant="outline-primary" href="/register" >Se connecter</Button>
              </div>
            </div>
            <div className="term-privacy">
              <p className="term-con">
                <span><sup>*</sup>
                <a href="/use-agreement" target="_blank">Accord d'utilisation</a>
                </span>
              </p>
              <p className="pri-pol">
                <span>Votre vie privée et la sécurité sont importantes pour nous. Pour plus d'informations sur la façon dont nous utilisons vos données</span>
              </p>
              <p className="term-con">
                <span>
                <a href="/confidentiality-agreement" target="_blank">Accord de confidentialité</a>
                </span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Register

