import Spacer from "../../spacer/spacer";
import TopComponent from "../top-component/top-component";
import "./slider.scss";
import { Button } from "react-bootstrap";

const Slider = () => {
  return (
    <div className="swiper-slide">
      <img src="/Bizimkiler-Slide.webp" alt="slider" />
      <div className="content">
        <h2>Authenticité et <br/>Saveur à portée de <br/>clic</h2>
        <Button className="btn-slide">TEMPETE</Button>
      </div>
      <TopComponent />
      <Spacer height={250} />
    </div>
  );
};

export default Slider;

