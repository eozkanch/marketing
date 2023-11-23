

import { Button, Form, Spinner } from "react-bootstrap";
import SectionHeader from "../../section-header/section-header";



const ContactForm = () => {
    

    return (
        
        <>
            <SectionHeader title2="Formulaire de contact"/>
        <Form  noValidate  className="contact-form">
           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Votre nom" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Courriel</Form.Label>
        <Form.Control type="email" placeholder="Addresse e-mail" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="écrivez votre message..."/>
      </Form.Group>
         
            <Button
                type="submit"
                variant ="primary" className="w-100">
               Envoyer
            </Button>
        </Form>
        </>
    );
};

export default ContactForm;
