import React from "react"; // Ek olarak, React ve useEffect de içe aktarılmalıdır
import { Container } from "react-bootstrap";

import "./map.scss";
import { constants } from "../../../../constant";


const { website } = constants;

const ContactMap = () => {
   

    return (
        <Container className="contact-map">
           
                <iframe
                    title={website.name}
                    src={website.mapEmbedUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
          
        </Container>
    );
};

export default ContactMap;
