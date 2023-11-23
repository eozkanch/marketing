import { Col, Container, Row } from "react-bootstrap";
import { constants } from "../../../constant";
import "./style.scss";
import Spacer from "../../../components/common/spacer/spacer";
import SectionHeader from "../../../components/common/section-header/section-header";


const {
    website: { about },
} = constants;

const AboutPage = () => {
    return (
      <>
      <Spacer height={25} />
     
      <Spacer height={25} />
        <Container className="who-we-are">
    
    <Row>
       
        <Col  className="who-we-are-content">
            <div className="who-we-are-info">
                
                <h1>Quels sont les nôtres ?</h1>
                <Spacer height={25} />
                <h5>Notre aventure e-commerce, débutée en 2021, continue son chemin avec toujours plus de variétés et la priorité à la satisfaction client.</h5>
               
                <Spacer height={25} />

            </div>
        </Col>
        
    </Row>
    <Row className="img-row">
            <Col className="img-col">
                <img src="/kuruyemis.jpeg" alt="Who We Are" />
               
                <div className="border-left"></div>
                <div className="border-top"></div>
                
            </Col>
          
        </Row>
        <Row>
        <Col  className="who-we-are-content">
            <div className="who-we-are-info">
            <Spacer height={50} />
                <p>{about.desc[0]}</p>
                <p>{about.desc[1]}</p>
                <p>{about.desc[2]}</p>
                <p>{about.desc[3]}</p>
              

            </div>
        </Col>
        </Row>
</Container>
 <Spacer/>
      </>
        
    );
};

export default AboutPage;
