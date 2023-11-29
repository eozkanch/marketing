import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Container } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaInfinity } from 'react-icons/fa';
import PopulerItem from '../populer-item/populeritem';
import './populer-card.scss';
import data from '../../../../data/allproduct.json';

import SectionHeader from '../../section-header/section-header';

const PopularCard = () => {
  const { allcategories } = data;
console.log("allcategories",allcategories);
  const CategoryButtons = ({ selectedCategory, handleClick }) => {
    const specificCategories = [
      { categories: "/kuruyemisler", label: "Kuruyemişler" },
      { categories: "/kahvaltiliklar", label: "Kahvaltılıklar" },
      { categories: "/bakliyatlar", label: "Bakliyatlar" },
    ];

    return (
      <Container className="slider-container">
        {specificCategories.map(category => (
          <Button
            key={category.categories}
            className={`product-btn ${selectedCategory === category.categories ? 'active' : ''}`}
            variant="outline-light"
            onClick={() => handleClick(category.categories)}
          >
            {category.label}
          </Button>
        ))}
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

  const [selectedCategory, setSelectedCategory] = useState("/kuruyemisler");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const selectedCategoryData = allcategories.find(category => category.categories === selectedCategory);
console.log("selectedCategoryData",selectedCategoryData);
  return (
    <Container className="product-carousel">
      <SectionHeader title1={<FaInfinity />} title2="Produits Populaires" />
      <CategoryButtons selectedCategory={selectedCategory} handleClick={handleClick} />
      <Slider {...sliderSettings}>
        {selectedCategoryData?.data.map((product) => (
          <PopulerItem
            key={product.categories}
            product={product}
          />
        ))}
      </Slider>
    </Container>
  );
};

export default PopularCard;





