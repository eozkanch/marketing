import React, { useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button,  } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { TfiTruck } from "react-icons/tfi";
import { LuDollarSign } from "react-icons/lu";
import { PiIdentificationCardDuotone } from "react-icons/pi";

import alldata from '../../../../data/allproduct.json';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../../store/slice/cart/cartSlice';
import { addFavorite } from '../../../../store/slice/favori/favoriSlice';
import SectionHeader from '../../../../components/common/section-header/section-header';
import SimilarProducts from '../../../../components/common/collection/similar-products/similar-products';

import { utils } from '../../../../utils';
import './style.scss';
import { FaFacebook, FaHeart, FaInstagram, FaShopify, FaShoppingBag, FaShoppingBasket, FaTwitter } from 'react-icons/fa';

const CollectionDetailsPage = () => {
  const { pathname } = useLocation();
  const [counter, setCounter] = useState(1); // Use setCounter instead of counter[1]

  const pathParts = pathname.split('/');
  const productName = pathParts[pathParts.length - 1];

  const dispatch = useDispatch();
  const productDetails = alldata.allcategories
    .flatMap(category => category.data)
    .find(product => product.details_link.includes(productName));

  const handleAddToFavori = () => {
    dispatch(addFavorite({ product: productDetails }));
    utils.functions.swalToast('Product added to favorites', 'success');
  };

  const handleAddToCart = () => {
    dispatch(addItem({ product: productDetails, quantity: counter }));
    utils.functions.swalToast('The product has been added to the cart', 'success');
  };

  const handleCounterPlus = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const handleCounterMinus = () => {
    if (counter > 1) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  return (
    <div className='text-center mt-5 text-red'>
      <Container>
        {productDetails && (
          <>
          <Row className='product-details-container gap-5'>
  {/* Product Image */}
  <Col md={4} className='product-image-container'>
    <figure className="product_img_top">
      <img src={productDetails.image_url} alt={productDetails.name} className="product-image" />
    </figure>
  </Col>

  {/* Product Details */}
  <Col md={4} className="product-details">
    <div className="product-info-left">
      <h2>{productDetails.name}</h2>
      <h6>Durum: <span>Stokta Var</span></h6>
      <h6>{productDetails.description}</h6>
      <span>
        Price: {productDetails.price}{' '}
        {productDetails.old_price && <span>{productDetails.old_price}</span>}{' '}
        <span>{productDetails.sale_title}</span>
      </span>
      <h6>Acele et stokta sadece 11 ürün kaldı!</h6>
      <h5>Sipariş verdiğiniz 2 gün içinde paketlenerek kargoya verilir.</h5>
      <h6>Taille: <span>1 KG</span></h6>

      {/* Product Counter */}
      <div className='product-count'>
       
          
          <ButtonGroup className="mb-1 count">
          <button className="btn">Adet:</button>
            <button className="btn" onClick={handleCounterMinus} variant="primary">-</button>
            <button className="btn" variant="outline-primary">{counter}</button>
            <button className="btn" onClick={handleCounterPlus} variant="primary">+</button>
          </ButtonGroup>
     

       
        <ButtonGroup className='d-flex align-items-center justify-content-start gap-1 py-1'>
          <Button className='btn1' onClick={handleAddToFavori} variant="primary"><FaHeart /> </Button>
          <Button className='btn1' onClick={handleAddToCart} variant="primary"><FaShoppingBasket /></Button>
          <Button className='btn1' variant="primary"><FaShopify /></Button>
        </ButtonGroup>
      </div>

      {/* Additional Product Information */}
      <div className='d-flex flex-column text-start gap-2'>
        <h6>SKU: BNP-AF1000</h6>
       
        <h4>Paylas: <span><FaInstagram /> <FaFacebook /><FaTwitter /></span></h4>
      </div>
    </div>
  </Col>

  {/* Delivery, Refund, and Guarantee Information */}
  <Col md={3} className="product-info-right">
    <div>
      <span className='icon'><TfiTruck size={30} /></span>
      <h5>TESLİMAT BİLGİSİ</h5>
      <p>Verdiğiniz siparişlerin ardından ürünlerimiz 2 iş günü içinde kargolanmaktadır.</p>
    </div>
    <div>
      <span className='icon'><LuDollarSign size={30} /></span>
      <h5>İPTAL VE İADE</h5>
      <p>Endişelenmeyin! 7 gün içinde siparişinizi iade edebilirsiniz.</p>
    </div>
    <div>
      <span className='icon'><PiIdentificationCardDuotone size={30} /></span>
      <h5>GARANTİ</h5>
      <p>Rahat olun! Markaların sağladığı garanti politikası çerçevesinde güvendesiniz.</p>
    </div>
  </Col>
</Row>

          </>
        )}
      </Container>
      <Container>
   
        <Row>
          <Col md={12}>
            <SectionHeader title2="Benzer Urunler" />
          </Col>
        </Row>
        <SimilarProducts currentProductId={productName} />
      </Container>
   
    </div>
  );
};

export default CollectionDetailsPage;



