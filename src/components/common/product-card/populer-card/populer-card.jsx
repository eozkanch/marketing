import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../../section-header/section-header';
import { FaArrowLeft, FaArrowRight, FaInfinity } from 'react-icons/fa';
import PopulerItem from '../populer-item/populeritem';
import "./populer-card.scss";
import  data  from '../../../../data/data';

const { products } = data;

const PopularCard = ({ sectionTitle }) => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <FaArrowLeft className="slick-arrow slick-prev" />,
    nextArrow: <FaArrowRight className="slick-arrow slick-next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="product-carousel">
      <SectionHeader title1={<FaInfinity />} title2="Produits Populaires" />
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <Link to={`/usermodel/${product.id}`} key={product.id}>
            <PopulerItem
              name={product.name} // Replace with the correct property name
              backgroundImg={product.image_url} // Replace with the correct property name
              projectUrl={product.details_link} // Replace with the correct property name
            />
             
          </Link>
        
          
        ))}
      </Slider>
      
    </Container>
  );
};

export default PopularCard;






