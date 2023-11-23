import { AiOutlineMobile } from "react-icons/ai";
import { BiHeadphone } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { constants } from "../../../../constant";
import "./info.scss";
import { Container } from "react-bootstrap";
import SectionHeader from "../../section-header/section-header";

const {
    website: { phone,  mapUrl, address, email },
} = constants;

const contactInfoItems = [
    
 
    {
        direct: mapUrl,
        icon: <HiLocationMarker />,
        text: address,
    },
    {
        direct: `mailto:${email}`,
        icon: <MdEmail />,
        text: email,
    },
    {
        direct: `tel:${phone}`,
        icon: <BiHeadphone />,
        text: phone,
    },
   
];

const ContactInfo = () => {
    return (
        <Container className="contact-info">
        <SectionHeader title2="Contactez-nous" title3="N'hésitez pas à nous contacter comme vous le souhaitez. Offrons même un thé." />
            {contactInfoItems.map((item) => (
                <div key={item.text} className="icons">
                    <a
                        href={item.direct}
                        target="_blank"
                        rel="noreferrer noopener">
                        {item.icon} {item.text}
                    </a>
                </div>
            ))}
        </Container>
    );
};

export default ContactInfo;
