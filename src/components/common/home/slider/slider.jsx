import Spacer from "../../spacer/spacer";
import TopComponent from "../top-component/top-component";
import "./slider.scss";
import { Button, Container } from "react-bootstrap";

const Slider = () => {
  return (
    <div className="swiper-slide">
    <Container>
      <img src="/Bizimkiler-Slide.webp" alt="slider" />
      <div className="content">
        <h2>Authenticité et <br/>Saveur à portée de <br/>clic</h2>
        <Button href="/collection/tum-urunler" className="btn-slide">TEMPETE</Button>
      </div>
      <TopComponent className="top-component" />
      <Spacer height={250} />
      </Container>
    </div>
  );
};

export default Slider;

