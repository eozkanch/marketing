import React from 'react';
import { Container, Row, Col, ButtonGroup, InputGroup, Button, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import alldata from '../../../../data/allproduct.json';
import "./style.scss"
import { TfiTruck } from "react-icons/tfi";
import { LuDollarSign } from "react-icons/lu";
import { PiIdentificationCardDuotone } from "react-icons/pi";
import Spacer from '/Users/geneve/Desktop/marketing/marketing/src/components/common/spacer/spacer.jsx';
const { allcategories } = alldata;

const CollectionDetailsPage = () => {
  const { pathname } = useLocation();
  const pathParts = pathname.split('/');
  const productName = pathParts[pathParts.length - 1];

  const productDetails = allcategories
    .flatMap(category => category.data)
    .find(product => product.details_link.includes(productName));

  return (
    <div className='text-center mt-5 text-red'>
      <Container>
        {productDetails && (
          <>
            <Row>
              <Col md={4}>
                <img src={productDetails.image_url} alt={productDetails.name} className="product-image" />
              </Col>
              <Col md={5} className="product-details">
                <div>
                  <h4>{productDetails.name}</h4>
                  <h5>Durum: <span>Stokta Var</span></h5>
                  <h5>{productDetails.description}</h5>
                  <p>Price: {productDetails.price} {productDetails.old_price && <span>{productDetails.old_price}</span>} <span>{productDetails.sale_title}</span></p>
                  <p>Acele et stokta sadece 11 ürün kaldı!</p>
                  <p>Sipariş verdiğiniz 2 gün içinde paketlenerek kargoya verilir.</p>
                  <h5>Taille: <span>1 KG</span></h5>
                  <p>Vendor: {productDetails.vendor_title}</p>
                </div>

                <InputGroup className="mb-3">
                  <Button variant="outline-primary" id="button-addon1">
                    Button
                  </Button>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    variant="outline-primary"
                  />
                  <Button variant="outline-primary" id="button-addon1">
                    Button
                  </Button>
                </InputGroup>

                <ButtonGroup className='gap-1 py-5'>
                  <Button variant="primary" >Favorilere Ekle</Button>
                  <Button variant="primary">Sepete Ekle</Button>
                  <Button variant="primary">Hemen Al</Button>
                </ButtonGroup>
                <h5>SKU: BNP-AF1000</h5>
                <h5>Paylas:</h5>
              </Col>
              <Col md={3} className="product-info">
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
      <Spacer height={100} />
    </div>
  );
};

export default CollectionDetailsPage;
