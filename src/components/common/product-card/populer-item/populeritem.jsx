import React, { Component } from 'react';
import './populeritem.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
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
    const { name, backgroundImg, projectUrl, discountAmount, price, oldPrice } = this.props;

    return (
      <div className="populer-item-container">
        <Link to={`/category/${projectUrl}/${backgroundImg}`}>
          <div className="populer-item-card">
            <img
              className="populer-item-img"
              src={backgroundImg}
              alt="Product"
              onError={this.handleImageError}
            />
            <div className="populer-item-buttons">
              <Button className="populer-item-btn" variant="success">
                <CiHeart size={25} color="white" />
              </Button>
              <Button className="populer-item-btn" variant="success">
                <PiHandbagFill color="white" size={25}/>
              </Button>
              <Button className="populer-item-btn" variant="success">
                <FaEye   color="white" size={25}/>
              </Button>
            </div>
            <div className="populer-item-content">
              <h3>{name}</h3>
              {discountAmount && (
                <span className="populer-item-sale-title">
                  {discountAmount}
                </span>
              )}
              <span className='populer-item-price'>{price} <span className='populer-item-oldprice'>{oldPrice}</span></span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default PopulerItem;





      
