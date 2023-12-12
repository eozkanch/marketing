import { Col, Container, Dropdown, NavDropdown, Row } from 'react-bootstrap';
import { BsPhone } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout } from '../../../../store/slice/auth/auth-slice';

import utils from '../../../../utils'; // utils'ü import ettiğinizden emin olun
import './top-menu.scss';

const TopMenu = () => {
    const { isLoggedIn, user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // TODO: logout fonksiyonu yazılacak
    const handleLogout = () => {
        utils.functions
            .swalQuestion("Logout", "Are you sure you want to logout?")
            .then((response) => {
                if (response.isConfirmed) {
                    dispatch(logout());
                }
            });
    };

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
                            {isLoggedIn ? (
                                <Dropdown align="end">
                                    <Dropdown.Toggle>
                                        {user?.name
                                            ? `${user.name.charAt(0).toUpperCase()}${user.name.slice(1).toLowerCase()}`
                                            : "Guest"}{" "}
                                        {user?.role
                                            ? `${user.role.charAt(0).toUpperCase()}${user.role.slice(1).toLowerCase()}`
                                            : ""}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {user?.role?.includes("admin") && (
                                            <>
                                                <Dropdown.Item as={Link} to={"/adminDashboard"}>
                                                    Admin Panel
                                                </Dropdown.Item>
                                                <Dropdown.Divider />
                                            </>
                                        )}
                                        <Dropdown.Item as={Link} to={"/userProfile"}>
                                            Control Panel
                                        </Dropdown.Item>
                                        <Dropdown.Item as={Link} to='/payment'>Paiement</Dropdown.Item>
                                        <Dropdown.Item as={Link} to='/favori'>Favoris</Dropdown.Item>
                                        <Dropdown.Item as={Link} to='/order-history'>Historique des commandes</Dropdown.Item>
                                        <Dropdown.Item as={Link} to='/cart'>Panier</Dropdown.Item>
                                        <Dropdown.Item as={Link} onClick={handleLogout}>
                                            Logout
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            ) : (
                                <>
                                    <li>
                                        <a href='/contact'>Communocation</a>
                                    </li>
                                    <li>
                                        <NavDropdown title="Mon Compte">
                                            <NavDropdown.Item as={Link} to='/register'>S'inscrire</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to='/login'>Se connecter</NavDropdown.Item>
                                        
                                        </NavDropdown>
                                    </li>
                                </>
                            )}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopMenu;


