import React from 'react';
import { Col, Container, Dropdown, DropdownButton, NavDropdown, Row } from 'react-bootstrap';
import { BsPhone } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import './top-menu.scss';

const TopMenu = () => {
    return (
        <div className='top-menu'>
            <Container >
                <Row className='d-flex justify-content-between'>
                    <Col lg={5}>
                        <Row className='d-flex justify-content-between align-items-center'>
                            <Col className='top-menu-left text-start'>
                                <BsPhone /> (+41 44 444 44 44)
                            </Col>
                            <Col className='top-menu-left text-start'>
                                <FaRegEnvelope /> loghj@example.com
                            </Col>
                        </Row>
                    </Col>
                    <Col  lg={7} >
                        <Row className='d-flex'>
                            <Col className='top-menu-right '>
                                <a href='/about'>À Propos De Nous</a>
                            </Col>
                            <Col className='top-menu-right '>
                                <a href='/contact'>Communocation</a>
                            </Col>
                            <Col className='top-menu-right '>
                                <NavDropdown title=" Mon Compte" a>
                                    
                                   
                                        <NavDropdown.Item href='/register'>S'inscrire</NavDropdown.Item>
                                        <NavDropdown.Item href='/login'>Se connecter</NavDropdown.Item>
                                        <NavDropdown.Item href='/payment'>Paiement</NavDropdown.Item>
                                        <NavDropdown.Item href='/favori'>Favoris</NavDropdown.Item>
                                        <NavDropdown.Item href='/order-history'>Historique des commandes</NavDropdown.Item>
                                        <NavDropdown.Item href='/cart'>Panier</NavDropdown.Item>
                                
                                </NavDropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopMenu;

