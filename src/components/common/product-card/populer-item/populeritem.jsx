import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../../store/slice/cart/cartSlice';
import { FaEye, FaHeart } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import './populeritem.scss';

import { utils } from '../../../../utils';
import { addFavorite } from '../../../../store/slice/favori/favoriSlice';

const  PopulerItem = ({ product }) => {
  const [imageError, setImageError] = useState(false);
  const dispatch = useDispatch();

  const handleImageError = () => {
    setImageError(true);
  };

  const handleAddToCart = async () => {
    
    dispatch(addItem({ product, quantity: 1 }));
    utils.functions.swalToast('Urun sepete eklendi', 'success');
 
  };
  const handleAddToFavori = async () => {
    
    dispatch(addFavorite({ product }));
    utils.functions.swalToast('Urun favorilere eklendi', 'success');
 
  };
const { image_url, details_link, name, old_price, price, sale_title,  } = product;

  return (
    <div className="populer-item-container">
      <div className="populer-item-card">
        <div className="card-top">
          
          <img
            className="populer-item-img"
            src={image_url}
            alt="Product"
            onError={handleImageError}
          />
          {sale_title && (
  <span className='populer-item-sale-title'>{sale_title}</span>
)}

          <div className="populer-item-buttons">
            <Button
              onClick={handleAddToCart}
              className="populer-item-btn"
              size="sm"
              variant="success"
            >
              <AiFillShopping color="white" size={20} />
            </Button>
            <Button 
            onClick={handleAddToFavori}
            className="populer-item-btn" 
            size="sm" 
            variant="success">
              <FaHeart size={20} color="white" />
            </Button>
            <Button
              
              className="populer-item-btn"
              size="sm"
              variant="success"
            >
              <FaEye href={product.details_link} color="white" size={20} />
            </Button>
          </div>
        </div>
        
        <div className="card-bottom">
          <div className="populer-item-content">
            <h3>{name}</h3>
            <span className="populer-item-price">
              {price} <span className="populer-item-oldprice">{old_price}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerItem;


