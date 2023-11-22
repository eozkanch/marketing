import React, { Component } from 'react';
import VanillaTilt from 'vanilla-tilt';
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

  componentDidMount() {
    this.initVanillaTilt();
  }

  initVanillaTilt() {
    VanillaTilt.init(this.cardElement, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  }

  handleImageError = () => {
    this.setState({ imageError: true });
  };

  render() {
    
    const { name, backgroundImg, projectUrl,discountAmount } = this.props;
    

    return (
      <div ref={(el) => (this.cardElement = el)} className="contain container">
       <Link to={`/category/${projectUrl}/${backgroundImg}`}>
        <div className="card">
          <img
            className="img"
            src={backgroundImg}
            alt="Product"
            onError={this.handleImageError}
            style={{ zIndex: 9999 }}
          />
          <div className="content">
            <h3>{name}</h3>
            {discountAmount && (
                <p className="sale-title">
                  {discountAmount}% OFF
                </p>
              )}
            <Button className="btn" variant="success" >
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


      
