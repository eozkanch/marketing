import React from 'react';
import Slider from 'react-slick';
import { Container, Col } from 'react-bootstrap';
import alldata from '../../../../data/allproduct.json';
import { Link, useNavigate } from 'react-router-dom';
import './similar-products.scss';
import PopulerItem from '../../product-card/populer-item/populeritem';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';  // Import the necessary arrow icons

const { allcategories } = alldata;

const SimilarProducts = ({ currentProductId }) => {
  const currentProductCategory = allcategories.find(category =>
    category.data.some(product => product.details_link.includes(currentProductId))
  );

  const currentProduct = currentProductCategory.data.find(product =>
    product.details_link.includes(currentProductId)
  );

  const similarProducts = currentProductCategory.data
    .filter(product => product.id !== currentProductId)
    .slice(0, 7);

  const history = useNavigate();
  
  const handleProductClick = (productId) => {
    history.push(`/collections/${productId}`);
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true, // Enable autoplay
   autoplaySpeed: 1000,
    prevArrow: <FaArrowLeft className="slick-arrow slick-prev" />,
    nextArrow: <FaArrowRight className="slick-arrow slick-next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          autoPlay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="product-carousel">
      <Slider {...sliderSettings}>
        {similarProducts.map(product => (
            <Link to={`${product.details_link}`} key={product.id}>
            <PopulerItem
              name={product.name}
              backgroundImg={product.image_url}
              projectUrl={product.url}
              price={product.price}
              discountAmount={product.sale_title || ''}
              oldPrice={product.old_price || ''}
            />
          </Link>
        ))}
      </Slider>
    </Container>
  );
};

export default SimilarProducts;


