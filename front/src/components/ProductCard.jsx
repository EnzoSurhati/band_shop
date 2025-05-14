import React from "react";
import styled from "styled-components";
import { useCart } from "./CartContext";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ image, title, price }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ image, title, price });
  };

  return (
    <Card>
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="card-info">
        <p className="text-title">{title}</p>
        <p className="text-body">Product description and details</p>
      </div>
      <div className="card-footer">
        <span className="text-title">${price}</span>
        <div className="card-button" onClick={handleAdd}>
        <FiShoppingCart size={16} className="cart-icon" style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  width: 190px;
  height: 254px;
  padding: 0.8em;
  background: #f5f5f5;
  border-radius: 0.5rem;
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s ease-in-out;

  .card-img {
    height: 40%;
    width: 100%;
    background-color: #ffcaa6;
    border-radius: 0.5rem;
    transition: 0.3s ease-in-out;
  }

  .card-info {
    padding-top: 10%;
  }

  .text-title {
    font-weight: 900;
    font-size: 1.1em;
    line-height: 1.5;
  }

  .text-body {
    font-size: 0.9em;
    padding-bottom: 10px;
    color: #333;
  }

  .card-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid #ddd;
  }

  .svg-icon {
    color: #252525;
  }

  .card-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #252525;
    padding: 0.3em;
    border-radius: 50px;
    transition: 0.3s ease-in-out;
  }

  .card-img:hover {
    transform: translateY(-25%);
    box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px,
      rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
  }

  .card-button:hover {
    border-color: ffcaa6;
    background-color: #ffcaa6;
  }
`;
