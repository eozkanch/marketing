import React, { Component } from 'react';
import './populeritem.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FaEye,FaHeart} from "react-icons/fa";
import { PiHandbagFill } from "react-icons/pi";

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

  render() {
    const { name, backgroundImg, discountAmount, price, oldPrice, } = this.props;

    return (
      <div className="populer-item-container">
       
          <div className="populer-item-card">
              <div className='card-top'>
                  {discountAmount && (
                        <span className="populer-item-sale-title">
                          {discountAmount}
                        </span>
                      )}
                    <img
                      className="populer-item-img"
                      src={backgroundImg}
                      alt="Product"
                      onError={this.handleImageError}
                    />
                    <div className="populer-item-buttons">
                      <Button className="populer-item-btn" size="sm" variant="success">
                        <FaHeart size={20} color="white" />
                      </Button>
                      <Button className="populer-item-btn" size="sm" variant="success">
                        <PiHandbagFill color="white" size={20}/>
                      </Button>
                      <Button className="populer-item-btn" size="sm" variant="success">
                        <FaEye   color="white" size={20}/>
                      </Button>
                    </div>
              </div> 
              <div className='card-bottom'>
                <div className="populer-item-content">
                  <h3>{name}</h3>
                
                  <span className='populer-item-price'>{price} <span className='populer-item-oldprice'>{oldPrice}</span></span>
                </div>
              </div>
          </div>
        
      </div>
    );
  }
}

export default PopulerItem;





      
