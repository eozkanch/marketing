import React from 'react'
import ContactMap from '../../../components/common/contact/map/map'
import ContactForm from '../../../components/common/contact/form/form'
import { Col, Row } from 'react-bootstrap'
import { ContactInfo, SectionHeader, Spacer } from '../../../components'
import "./style.scss"
const ContactPage = () => {
  return (
    <div className='contact-page'>
    <Row>

        <Col md={12}>
        <Spacer />
            <SectionHeader
                title2="Contactez-nous"
                title3="Y a-t-il un problème? Nous aimerions avoir de vos nouvelles. Envoyez-nous un message et nous vous répondrons dès que possible."
            />
        </Col>
        <Col md={12}><ContactMap /></Col>
        <Spacer />
        <div className='contact-div'>
        <Col xs={12} md={4}><ContactForm /></Col>
        <Col  xs={12} md={4}><ContactInfo /></Col>
        </div>
        
        <Spacer />
    </Row>
      

    </div>
  )
}

export default ContactPage