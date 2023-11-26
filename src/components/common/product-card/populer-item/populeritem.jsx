import React, { Component } from 'react';
import './populeritem.scss';
import { Button } from 'react-bootstrap';
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

  render() {
    const { name, backgroundImg, projectUrl, discountAmount, price, oldPrice } = this.props;

    return (
      <div className="contain container">
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
              <Button className="btn" variant="success">
                More Info
              </Button>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default PopulerItem;



      
