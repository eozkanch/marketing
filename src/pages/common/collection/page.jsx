import { Checkbox } from '@mui/material';
import React, { useState } from 'react';
import { Row, Col, Container, Form, Offcanvas } from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { PopulerItem, PopulerLitleCard, Spacer } from '../../../components';
import data from '../../../data/categories.json';
import alldata from '../../../data/allproduct.json';
import { IoGridOutline } from "react-icons/io5";
import { LiaListUlSolid } from "react-icons/lia";
import { MdFilterAlt } from "react-icons/md";
import './style.scss';

const { categories } = data;
const { allcategories } = alldata;
const styles = {
  backgroundColor: 'v.$color1',
  border: '1px solid v.$color1',
  color: 'white', // Set your desired text color
};

const CollectionPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedCategoryUrl, setSelectedCategoryUrl] = useState('');
  const { pathname } = useLocation();
  const pathParts = pathname.split('/');
  const lastPathSegment = decodeURIComponent(pathParts[pathParts.length - 1]);
  console.log(lastPathSegment);
  console.log(selectedCategoryUrl);


  const filteredProducts = allcategories.reduce((acc, category) => {
    const matchingCategory = category.categories && category.categories.includes(lastPathSegment);
  
    if (matchingCategory) {
      return acc.concat(category.data);
    }
  
    return acc;
  }, []);
  

  const [sortingOption, setSortingOption] = useState("1");
  const navigate = useNavigate();

  const convertPrice = (priceString) => {
    const priceParts = priceString.split(' ');
    const numericPrice = parseFloat(priceParts[1]);
    return numericPrice;
  };

  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  const handleCategoryChange = (categoryUrl) => {
  
    setSelectedCategoryUrl(categoryUrl);
    const newUrl = `/collection${categoryUrl}`;
    navigate(newUrl);
  };

  const sortedProducts = [...filteredProducts];

  switch (sortingOption) {
    case "1":
      sortedProducts.sort((a, b) => a.vendor_title.localeCompare(b.vendor_title));
      break;
    case "2":
      sortedProducts.sort((a, b) => convertPrice(a.price) - convertPrice(b.price));
      break;
    case "3":
      sortedProducts.sort((a, b) => convertPrice(b.price) - convertPrice(a.price));
      break;
    default:
      sortedProducts.sort((a, b) => a.id - b.id);
      break;
  }



  return (
    <div className='collection'>
      <Spacer height={100} />
      <Container>
        <Row >
        
        
        <Col md={3} className='collection-left-xs'>
        <div  className='collection-left-md'>
        <div className='category'>
        <h4>Categories</h4>
        {categories.map((category, index) => (
                <div className={`category-item ${selectedCategoryUrl === category.url ? 'active' : ''}`} key={index}>
                  <Checkbox
                    className='checkbox'
                    checked={selectedCategoryUrl === category.url}
                    onChange={() => handleCategoryChange(category.url)}
                  />
                  {category.name} ({category.count})
                </div>
              ))}
        </div>
        </div>
        <Offcanvas show={show} onHide={handleClose} style={{ width: '80%' }} >
     
            <div className='category'>
            <Offcanvas.Header closeButton>
              <h4>Categories</h4>
              </Offcanvas.Header>
              <Offcanvas.Body>
              {categories.map((category, index) => (
                <div className={`category-item ${selectedCategoryUrl === category.url ? 'active' : ''}`} key={index}>
                  <Checkbox
                    className='checkbox'
                    checked={selectedCategoryUrl === category.url}
                    onChange={() => handleCategoryChange(category.url)}
                  />
                  {category.name} ({category.count})
                </div>
              ))}
              </Offcanvas.Body>
            </div>
            </Offcanvas>
          </Col>
          <Col md={9} className='collection-right'>
          
            <div className='collection-sort'>
              <Container>
                <Row className='d-flex justify-content-between'>
                  <Col md={4} className='d-flex justify-content-between align-items-center gap-3'>
                   <span className='filter'> <MdFilterAlt  onClick={handleShow} size={20} /></span>
                    <span className='d-flex gap-3'>
                    <IoGridOutline color="v.$color1" size={20} />
                    <LiaListUlSolid color="v.$color1" size={20} />
                  
                    </span>
                    
                  </Col>
                  <Col md={4} className='d-flex justify-content-end align-items-center gap-3'>
                    <Form.Select   className={styles} onChange={handleSortingChange} value={sortingOption}>
                    <option>Selected Sorting </option>
                      <option value="1">A-Z</option>
                      <option value="2">Prix: faible à élevé</option>
                      <option value="3">Prix: élevé à faible</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Container>
            </div>
            <div>
              <Spacer height={25} />
              <Row xs={2} md={4} lg={5} className='row-gap-5'>
                {sortedProducts.map((product, index) => (
                  <Link to={`${product.details_link}`} key={index}>
                    <Col>
                      <PopulerItem
                         key={product.categories}
            product={product}
                      />
                    </Col>
                  </Link>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Spacer height={100} />
    </div>
  );
};

export default CollectionPage;

