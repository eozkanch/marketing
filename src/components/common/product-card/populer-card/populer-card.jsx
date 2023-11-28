import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../../section-header/section-header';
import { FaArrowLeft, FaArrowRight, FaInfinity } from 'react-icons/fa';
import PopulerItem from '../populer-item/populeritem';
import data from '../../../../data/allproduct.json';
import './populer-card.scss';
import data2 from '../../../../data/data';


const { products2 } = data2;
const PopularCard = ({ sectionTitle }) => {
  const { allcategories } = data;
  const products = allcategories.flatMap((category) => category.data);

  const CategoryButtons = ({ selectedCategory, handleClick }) => {
    return (
      <Container className="slider-container">
        <Button
          className={`product-btn ${selectedCategory === 'DES NOISETTES' ? 'active' : ''}`}
          variant="outline-light"
          onClick={() => handleClick('DES NOISETTES')}
        >
          DES NOISETTES
        </Button>
        <Button
          className={`product-btn ${selectedCategory === 'PETITS DÉJEUNERS' ? 'active' : ''}`}
          variant="outline-light"
          onClick={() => handleClick('PETITS DÉJEUNERS')}
        >
          PETITS DÉJEUNERS
        </Button>
        <Button
          className={`product-btn ${selectedCategory === 'LÉGUMINEUSES' ? 'active' : ''}`}
          variant="outline-light"
          onClick={() => handleClick('LÉGUMINEUSES')}
        >
          LÉGUMINEUSES
        </Button>
      </Container>
    );
  };

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

  const [selectedCategory, setSelectedCategory] = useState('DES NOISETTES');

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const selectedCategoryData = allcategories.find((category) => {
    if (selectedCategory === 'DES NOISETTES') {
      return category.categories === '/kuruyemisler';
    } else if (selectedCategory === 'PETITS DÉJEUNERS') {
      return category.categories === '/kahvaltiliklar';
    } else if (selectedCategory === 'LÉGUMINEUSES') {
      return category.categories === '/bakliyatlar';
    }

    return false;
  });

  return (
    <Container className="product-carousel">
      <SectionHeader title1={<FaInfinity />} title2="Produits Populaires" />
      <CategoryButtons selectedCategory={selectedCategory} handleClick={handleClick} />
      <Slider {...sliderSettings}>
        {selectedCategoryData.data.map((product, index) => (
          <Link to={`${product.details_link}`} key={index}>
            <PopulerItem
              name={product.name}
              backgroundImg={product.image_url}
              projectUrl={product.url}
              price={product.price}
              link={product.details_link}
              discountAmount={product.sale_title || ''}
              oldPrice={product.old_price || ''}
            />
          </Link>
        ))}
      </Slider>
    </Container>
  );
};

export default PopularCard;



