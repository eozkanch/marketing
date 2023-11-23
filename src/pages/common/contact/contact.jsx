import React from 'react'
import ContactMap from '../../../components/common/contact/map/map'
import ContactForm from '../../../components/common/contact/form/form'
import { Col, Row } from 'react-bootstrap'
import { ContactInfo, SectionHeader, Spacer } from '../../../components'

const ContactPage = () => {
  return (
    <div>
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
        <div className='d-flex justify-content-center gap-5'>
        <Col md={4}><ContactForm /></Col>
        <Col md={4}><ContactInfo /></Col>
        </div>
        
        <Spacer />
    </Row>
      

    </div>
  )
}

export default ContactPage