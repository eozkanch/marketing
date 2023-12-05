import Spacer from "../../spacer/spacer";
import TopComponent from "../top-component/top-component";
import "./slider.scss";
import { Button, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import {constants} from "../../../../constant";
const { slider } = constants;
const Slider = () => {
  return (
    <div className="slider-container">
    <Container>
    <Swiper
            effect="fade"
         
            navigation={true}
     
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            className="slider">
            {slider.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className="content">
                    <h2>Authenticité et <br/>Saveur à portée de <br/>clic</h2>
                    <Button href="/collection/tum-urunler" className="btn-slide">TEMPETE</Button>
                    </div>
                    <img
                       src="/Bizimkiler-Slide.webp"
                        alt={slide.title}
                        title={slide.title}
                    />
                    
                </SwiperSlide>
            ))}
        </Swiper>
       
      </Container>
      </div>
  );
};

export default Slider;

