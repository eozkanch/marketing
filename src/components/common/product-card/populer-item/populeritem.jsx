import React, { Component, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../../store/slice/cart/cartSlice';
import { FaEye, FaHeart } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai'; // Assuming you meant AiFillShopping instead of PiHandbagFill
import './populeritem.scss';
import { Link } from 'react-router-dom';

class PopulerItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageError: false,
    };
  }

  handleImageError = () => {
    this.setState({ imageError: true });
  };

  handleAddToCart = () => {
    const { name, price, backgroundImg, link } = this.props;
    // Dispatch the addItem action with the product details
    this.props.dispatch(addItem({ name, price, backgroundImg, link }));
  };

  render() {
    const { name, backgroundImg, discountAmount, price, oldPrice, link } = this.props;

    return (
      <div className="populer-item-container">
        <div className="populer-item-card">
          <div className="card-top">
            {discountAmount && (
              <span className="populer-item-sale-title">{discountAmount}</span>
            )}
            <img
              className="populer-item-img"
              src={backgroundImg}
              alt="Product"
              onError={this.handleImageError}
            />
            <div className="populer-item-buttons">
              <Button
                onClick={this.handleAddToCart}
                className="populer-item-btn"
                size="sm"
                variant="success"
              >
                <AiFillShopping color="white" size={20} />
              </Button>
              <Button className="populer-item-btn" size="sm" variant="success">
                <FaHeart size={20} color="white" />
              </Button>
              <Button
                href={link}
                className="populer-item-btn"
                size="sm"
                variant="success"
              >
                <FaEye color="white" size={20} />
              </Button>
            </div>
          </div>
          <div className="card-bottom">
            <div className="populer-item-content">
              <h3>{name}</h3>
              <span className="populer-item-price">
                {price} <span className="populer-item-oldprice">{oldPrice}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopulerItem;





      
