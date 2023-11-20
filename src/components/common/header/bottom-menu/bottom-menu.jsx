import React from 'react'
import "./bottom-menu.scss"
import { Col, Container, NavDropdown, Row } from 'react-bootstrap'

const BottomMenu = () => {
  return (
    <div className='bottom-menu'>
      <Container>
      <Row>
        <Col className='bottom-col'> 
             <NavDropdown title="Produits De Boulangerie" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> Antep Baklavası</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Lokum</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Kek & Pasta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Şekerlemeler</NavDropdown.Item>   
            </NavDropdown>
          </Col>
        <Col className='bottom-col'><NavDropdown title="Épicerie Fine" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> Épices</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Légumes séchés</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Sauces</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">pâte de tomate</NavDropdown.Item>   
              <NavDropdown.Item href="#action/3.4">Turşu</NavDropdown.Item>   
            </NavDropdown></Col>
            




        <Col className='bottom-col'><NavDropdown title="Boisson" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Thés</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Cafés</NavDropdown.Item>
             
            </NavDropdown></Col>
        <Col className='bottom-col'><NavDropdown title="Des Noisettes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> Des Noisettes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Fruit Sec</NavDropdown.Item>
                 
            </NavDropdown></Col>
        <Col className='bottom-col'><NavDropdown title="Döjeuner" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> Fromage aux olives</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Confiture</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Miel-Tahini-Mélasse</NavDropdown.Item>
            
            </NavDropdown></Col>
        <Col className='bottom-col'><NavDropdown title="Légumineuses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> Légumineuses</NavDropdown.Item>
               
            </NavDropdown></Col>
        <Col className='bottom-col'><NavDropdown title="Cosmétiques et Santé" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> Cosmétiques et Santé</NavDropdown.Item>
             
            </NavDropdown></Col>
      </Row>
      </Container>
    </div>
  )
}

export default BottomMenu




