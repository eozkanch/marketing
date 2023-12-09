import React, { useState } from 'react';
import './login.scss';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import utils from '../../../utils';
import { loginFailure, loginSuccess } from '../../../store/slice/auth/auth-slice';
import userData from '../../../data/user.json';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const email = event.target.elements.email.value;
      const password = event.target.elements.password.value;

      console.log('Email:', email);
      console.log('Password:', password);

      // Kullanıcı adı ve şifre ile eşleşen bir kullanıcıyı ara
      const user = userData.users.find(u => u.email === email && u.password === password);

      console.log('User:', user);

      if (user) {
        // Save the JWT token to encryptedLocalStorage
        //services.encryptedLocalStorage.setItem("token", user.token);

        // Update Redux store with user information
        dispatch(loginSuccess(user));

        // Show success message and navigate to the home page
        utils.functions.swalToast("You have successfully logged in", "success");
        navigate("/");
      } else {
        // Handle login failure
        dispatch(loginFailure());
        utils.functions.swalToast("Login failed. Check your credentials.", "error");
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle other errors if necessary
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Container>
        <Row className="login-row">
          <Col xs={12} lg={6} className="login-form text-right">
            <div className="login-form-container">
              <div className="title-text">
                <h2>Connexion</h2>
                <p>Inscrivez-vous pour voir les détails du compte.</p>
              </div>
              <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Courriel</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Courriel" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Mot de passe" />
                </Form.Group>

                <div className="form-toggle-btn">
                  <div className="form-action-button">
                    <Button className="btn btn-style1 w-100" type="submit" disabled={loading}>
                      {loading ? 'Logging in...' : 'Se connecter'}
                    </Button>
                    <a href="/recover-password" id="RecoverPassword">Mot de passe oublié?</a>
                  </div>
                </div>
              </Form>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="side-form-wrap">
              <div className="acc-title">
                <h6>Pas encore membre?</h6>
                <div className="account-optional-action">
                  <Button className="btn btn-style2 w-100" variant="outline-primary" href="/register">Créer un compte</Button>
                </div>
              </div>
              <div className="term-privacy">
                <p className="term-con">
                  <span><sup>*</sup><a href="/use-agreement" target="_blank">Accord d'utilisation</a></span>
                </p>
                <p className="pri-pol">
                  <span>Votre vie privée et la sécurité sont importantes pour nous. Pour plus d'informations sur la façon dont nous utilisons vos données</span>
                </p>
                <p className="term-con">
                  <span><a href="/confidentiality-agreement" target="_blank">Accord de confidentialité</a></span>
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
