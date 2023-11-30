import React, { useState } from 'react'
import "./bottom-menu.scss"
import {  Accordion, Col, Container,  NavDropdown,  Offcanvas, Row } from 'react-bootstrap'
import { GiHamburgerMenu } from "react-icons/gi";
const BottomMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='bottom-menu'>
     <div className='bottom-menu-offcanvas'>
     <GiHamburgerMenu color="black" size={40}  onClick={handleShow}/>
     <Offcanvas show={show} onHide={handleClose} style={{ width: '80%' }} >
     <Offcanvas.Header closeButton></Offcanvas.Header>      
     <Offcanvas.Body>
     
     <Accordion defaultActiveKey="0"  style={{ border: 'none' }}>
      <Accordion.Item eventKey="1" style={{ border: 'none' }}>
        <Accordion.Header >Produits De Boulangerie</Accordion.Header>
        <Accordion.Body>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("baklava")}`}> Antep Baklavası</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("lokum")}`}> Lokum</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("kek-pasta")}`}> Kek & Pasta</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("sekerlemeler")}`}>Şekerlemeler</NavDropdown.Item>   
         
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" style={{ border: 'none' }}>
        <Accordion.Header> Épicerie Fine</Accordion.Header>
        <Accordion.Body>
        <NavDropdown.Item href={`/collection/${encodeURIComponent("baharatlar")}`}> Épices</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("kurutulmus-sebze")}`}> Légumes séchés</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("sos-nar-eksisi")}`}> Sauces</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("salcalar")}`}>pâte de tomate</NavDropdown.Item>   
              <NavDropdown.Item href={`/collection/${encodeURIComponent("tursu")}`}>Turşu</NavDropdown.Item>   
         
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" style={{ border: 'none' }}>
        <Accordion.Header>Boisson</Accordion.Header>
        <Accordion.Body>
        <NavDropdown.Item href={`/collection/${encodeURIComponent("caylar")}`}>Thés</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("kahveler")}`}> Cafés</NavDropdown.Item>  
         
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" style={{ border: 'none' }}>
        <Accordion.Header>Des Noisettes</Accordion.Header>
        <Accordion.Body>
        <NavDropdown.Item href={`/collection/${encodeURIComponent("kuruyemisler")}`}> Des Noisettes</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("kurutulmus-meyve")}`}> Fruit Sec</NavDropdown.Item>
         
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5" style={{ border: 'none' }}>
        <Accordion.Header>Deujeuner</Accordion.Header>
        <Accordion.Body>
        <NavDropdown.Item href={`/collection/${encodeURIComponent("zeytin-peynir")}`}> Fromage aux olives</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("recel")}`}> Confiture</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("bal-tahin-pekmez")}`}>Miel-Tahini-Mélasse</NavDropdown.Item> 
         
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6" style={{ border: 'none' }}>
        <Accordion.Header>Légumineuses</Accordion.Header>
        <Accordion.Body>
        <NavDropdown.Item href={`/collection/${encodeURIComponent("bakliyatlar")}`}> Légumineuses</NavDropdown.Item>
         
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7" style={{ border: 'none' }}>
        <Accordion.Header>Cosmétiques et Santé</Accordion.Header>
        <Accordion.Body>
        <NavDropdown.Item href={`/collection/${encodeURIComponent("kozmetik-bakim")}`}> Cosmétiques et Santé</NavDropdown.Item>
         
        </Accordion.Body>
      </Accordion.Item>
      
      </Accordion>
      <Container>
    
       

      </Container>
      </Offcanvas.Body>
    </Offcanvas>
    </div>
    <div className='bottom-menu-row'>
    <Container>
    <Row >
        <Col className='bottom-col'> 
             <NavDropdown title="Produits De Boulangerie" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/collection/${encodeURIComponent("baklava")}`}> Antep Baklavası</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("lokum")}`}> Lokum</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("kek-pasta")}`}> Kek & Pasta</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("sekerlemeler")}`}>Şekerlemeler</NavDropdown.Item>   
            </NavDropdown>
          </Col>
        <Col className='bottom-col'><NavDropdown title="Épicerie Fine" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/collection/${encodeURIComponent("baharatlar")}`}> Épices</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("kurutulmus-sebze")}`}> Légumes séchés</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("sos-nar-eksisi")}`}> Sauces</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("salcalar")}`}>pâte de tomate</NavDropdown.Item>   
              <NavDropdown.Item href={`/collection/${encodeURIComponent("tursu")}`}>Turşu</NavDropdown.Item>   
            </NavDropdown></Col>
            

        <Col className='bottom-col'><NavDropdown title="Boisson" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/collection/${encodeURIComponent("caylar")}`}>Thés</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("kahveler")}`}> Cafés</NavDropdown.Item>
             
            </NavDropdown></Col>
        <Col className='bottom-col'><NavDropdown title="Des Noisettes" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/collection/${encodeURIComponent("kuruyemisler")}`}> Des Noisettes</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("kurutulmus-meyve")}`}> Fruit Sec</NavDropdown.Item>
                 
            </NavDropdown></Col>
        <Col className='bottom-col'><NavDropdown title="Deujeuner" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/collection/${encodeURIComponent("zeytin-peynir")}`}> Fromage aux olives</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("recel")}`}> Confiture</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("bal-tahin-pekmez")}`}>Miel-Tahini-Mélasse</NavDropdown.Item>
            
            </NavDropdown></Col>
        <Col className='bottom-col'><NavDropdown title="Légumineuses" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/collection/${encodeURIComponent("bakliyatlar")}`}> Légumineuses</NavDropdown.Item>
               
            </NavDropdown></Col>
        <Col className='bottom-col'><NavDropdown title="Cosmétiques et Santé" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/collection/${encodeURIComponent("kozmetik-bakim")}`}> Cosmétiques et Santé</NavDropdown.Item>
             
            </NavDropdown></Col>
        </Row>
        </Container>
        </div>

    </div>
  );
}

export default BottomMenu




