import React, { Component } from 'react';
import './populer-litle-card.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { PiHandbagFill } from "react-icons/pi";

class PopulerLitleCard extends Component {
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
      <div className="contain">
        <Link to={`/category/${projectUrl}/${backgroundImg}`}>
          <div className="card">
            <img
              className="img"
              src={backgroundImg}
              alt="Product"
              onError={this.handleImageError}
              style={{ zIndex: 15 }}
            />
            <div className="content">
              <h3>{name}</h3>
              {discountAmount && (
                <span className="sale-title">
                  {discountAmount}
                </span>
              )}
              <span className='price'>{price} <span className='oldprice'>{oldPrice}</span></span>
              <div>
                <Button className="btn" variant="success">
                  <CiHeart size={20} />
                </Button>
                <Button className="btn" variant="success">
                  <PiHandbagFill />
                </Button>
                <Button className="btn" variant="success">
                  <FaEye />
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default PopulerLitleCard;


      
