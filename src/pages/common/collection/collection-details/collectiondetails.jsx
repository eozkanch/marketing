import React, { useState } from 'react';
import { Container, Row, Col, ButtonGroup, InputGroup, Button, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import alldata from '../../../../data/allproduct.json';
import "./style.scss"
import { TfiTruck } from "react-icons/tfi";
import { LuDollarSign } from "react-icons/lu";
import { PiIdentificationCardDuotone } from "react-icons/pi";
import Spacer from '/Users/geneve/Desktop/marketing/marketing/src/components/common/spacer/spacer.jsx';
const { allcategories } = alldata;
import SectionHeader from "../../../../components/common/section-header/section-header";
import SimilarProducts from '../../../../components/common/collection/similar-products/similar-products';
import {  useDispatch } from 'react-redux';
import { addItem } from '../../../../store/slice/cart/cartSlice'; 
import Swal from 'sweetalert2';
import { utils } from '../../../../utils';
import { addFavorite } from '../../../../store/slice/favori/favoriSlice';

const CollectionDetailsPage = () => {
  const { pathname } = useLocation();
  const counter =useState(1);
  const pathParts = pathname.split('/');
  const productName = pathParts[pathParts.length - 1];



  const dispatch = useDispatch();

const handleAddToFavori = () => {

  dispatch(addFavorite({ product: productDetails }));
  utils.functions.swalToast('Urun favorilere eklendi', 'success');
}
  const handleAddToCart = () => {
    // Dispatch the addItem action with the selected product and counter value
    dispatch(addItem({ product: productDetails, quantity: counter[0] }));

    // Use SweetAlert to display a success message
   utils.functions.swalToast('Urun sepete eklendi', 'success');
  };
  
  const handleCounterPlus = () => { 

    counter[1](counter[0] + 1);
    

  }
  const handleCounterMinus = () => {
    if (counter[0] > 1) {
      counter[1](counter[0] - 1);
    }
  };

  const productDetails = allcategories
    .flatMap(category => category.data)
    .find(product => product.details_link.includes(productName));

  return (
    <div className='text-center mt-5 text-red'>
      <Container >
        {productDetails && (
          <>
            <Row className='gap-5'>
              <Col md={4} className='product-image-container'>
              <figure className="product_img_top">
                <img src={productDetails.image_url} alt={productDetails.name} className="product-image" />
                </figure>
              </Col>
              <Col md={4} className="product-details">
                <div className="product-info-left">
                  <h4>{productDetails.name}</h4>
                  <h5>Durum: <span>Stokta Var</span></h5>
                  <h5>{productDetails.description}</h5>
                  <h3>Price: {productDetails.price} {productDetails.old_price && <span>{productDetails.old_price}</span>} <span>{productDetails.sale_title}</span></h3>
                  <h2>Acele et stokta sadece 11 ürün kaldı!</h2>
                  <h1>Sipariş verdiğiniz 2 gün içinde paketlenerek kargoya verilir.</h1>
                  <h3>Taille: <span>1 KG</span></h3>
                  <div className='product-count'>
                <span className='count'>  
                        <div >Adet:</div>
                    
                        <div className=" input-roup">
                          <button  className="btn " onClick={handleCounterMinus} variant="primary" >
                           -
                          </button>
                          <button className="btn " variant="outline-primary"  >
                            {counter[0]}
                          </button>
                          <button  className="btn "onClick={handleCounterPlus} variant="primary" >
                            +
                          </button>
                        </div>
                       
                </span>
                <ButtonGroup className='d-flex align-items-center justify-content-start gap-1 py-1'>
                  <Button className='btn1' onClick={handleAddToFavori} variant="primary" >Favorilere Ekle</Button>
                  <Button className='btn1' onClick={handleAddToCart} variant="primary">Sepete Ekle</Button>
                  <Button className='btn1' variant="primary">Hemen Al</Button>
                </ButtonGroup>
                </div>
                
               <div className='d-flex flex-column text-start gap-2'>
                <h5>SKU: BNP-AF1000</h5>
                <h5>Vendor: {productDetails.vendor_title}</h5>
                <h5>Paylas:</h5>
                </div> 
                </div>
              </Col>
              <Col md={3} className="product-info-right">
                <div>
                  <span  className='icon'><TfiTruck size={30} /></span>
                  <h5>TESLİMAT BİLGİSİ</h5>
                  <p>Verdiğiniz siparişlerin ardından ürünlerimiz 2 iş günü içinde kargolanmaktadır.</p>
                </div>
                <div >
                  <span  className='icon'><LuDollarSign size={30} /></span>
                  <h5>İPTAL VE İADE</h5>
                  <p>Endişelenmeyin! 7 gün içinde siparişinizi iade edebilirsiniz.</p>
                </div>
                <div>
                    <span className='icon' ><PiIdentificationCardDuotone size={30}  /></span>
                  <h5>GARANTİ</h5>
                  <p>Rahat olun! Markaların sağladığı garanti politikası çerçevesinde güvendesiniz.</p>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
      <Container>
      <Spacer height={25} />
        <Row>
          <Col md={12}>
            <SectionHeader
              title2="Benzer Urunler"
                         />
          </Col>
        </Row>
        <SimilarProducts currentProductId={productName} />
      </Container>
      <Spacer height={100} />
    </div>
  );
};

export default CollectionDetailsPage;
