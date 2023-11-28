import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../../section-header/section-header';
import { FaArrowLeft, FaArrowRight, FaInfinity } from 'react-icons/fa';
import PopulerItem from '../../product-card/populer-item/populeritem';
import "./soldes-products.scss";
import data from '../../../../data/data';

const { products } = data;

const SoldesProducts = ({ sectionTitle }) => {
  // Filter and sort the products
  const filteredAndSortedProducts = products
    .filter(product => product.sale_title !== null)
    .sort((a, b) => b.sale_title - a.sale_title);
console.log(filteredAndSortedProducts);
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <FaArrowLeft className="slick-arrow slick-prev" />,
    nextArrow: <FaArrowRight className="slick-arrow slick-next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
      <SectionHeader title1={<FaInfinity />} title2="En Soldes" />

      <Slider {...sliderSettings}>
        {filteredAndSortedProducts.map((product) => (
          <Link to={`${product.details_link}`} key={product.id}>
            <PopulerItem
              name={product.name}
              backgroundImg={product.image_url}
              projectUrl={product.details_link}
              discountAmount={product.sale_title}
              price={product.price}
              oldPrice={product.old_price}
            />
          </Link>
        ))}
      </Slider>
    </Container>
  );
};

export default SoldesProducts;








