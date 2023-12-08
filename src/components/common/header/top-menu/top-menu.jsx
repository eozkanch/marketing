import React from 'react';
import { Col, Container, NavDropdown, Row } from 'react-bootstrap';
import { BsPhone } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import './top-menu.scss';

const TopMenu = () => {
    return (
        <div className='top-menu'>
            <Container>
                <Row className='top-menu-row'>
                    <Col xs={12} md={6} lg={6} className='top-menu-left'>
                        <ul>
                            <li>
                                <BsPhone /> (+41 44 444 44 44)
                            </li>
                            <li>
                                <FaRegEnvelope /> loghj@example.com
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} lg={6} className='top-menu-right'>
                        <ul>
                            <li>
                                <a href='/about'>À Propos De Nous</a>
                            </li>
                            <li>
                                <a href='/contact'>Communocation</a>
                            </li>
                            <li>
                                <NavDropdown title="Mon Compte">
                                    <NavDropdown.Item href='/register'>S'inscrire</NavDropdown.Item>
                                    <NavDropdown.Item href='/login'>Se connecter</NavDropdown.Item>
                                    <NavDropdown.Item href='/payment'>Paiement</NavDropdown.Item>
                                    <NavDropdown.Item href='/favori'>Favoris</NavDropdown.Item>
                                    <NavDropdown.Item href='/order-history'>Historique des commandes</NavDropdown.Item>
                                    <NavDropdown.Item href='/cart'>Panier</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopMenu;


