// src/components/Product.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';
import p4 from '../img/p4.png';
import '../App.css'; // Import CSS here

const Product = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  return (
    <div className="product-container">
      <div className="card product-card">
        <img src={p1} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">laptop</h5>
          <p className="card-text">Buy this amazing product now!</p>
          <button className="btn btn-primary w-100" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>

      <div className="card product-card">
        <img src={p2} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">Mouse</h5>
          <p className="card-text">Buy this amazing product now!</p>
          <button className="btn btn-primary w-100" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>

      <div className="card product-card">
        <img src={p3} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">Keyboard</h5>
          <p className="card-text">Buy this amazing product now!</p>
          <button className="btn btn-primary w-100" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>

      <div className="card product-card">
        <img src={p4} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">CPU</h5>
          <p className="card-text">Buy this amazing product now!</p>
          <button className="btn btn-primary w-100" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>

    
  );
};

export default Product;
