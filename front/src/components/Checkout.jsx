// src/components/Checkout.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        import.meta.env.VITE_API_URL + '/create-checkout-session'
      );
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <Modal>
      <PaymentOptions>
        <button>PayPal</button>
        <button>Apple Pay</button>
        <button>G Pay</button>
      </PaymentOptions>

      <Separator>or pay using credit card</Separator>

      <Form onSubmit={handleCheckout}>
        <label>
          Card holder full name
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Card Number
          <input
            type="text"
            name="cardNumber"
            placeholder="0000 0000 0000 0000"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </label>

        <ExpiryRow>
          <div>
            <label>
              Expiry Date
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              CVV
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </ExpiryRow>

        <SubmitButton disabled={loading}>
          {loading ? 'Processing…' : 'Checkout'}
        </SubmitButton>
      </Form>
    </Modal>
  );
}

/* Styled Components */

const Modal = styled.div`
  width: fit-content;
  max-width: 450px;
  background: #ffffff;
  border-radius: 26px;
  box-shadow:
    0px 187px 75px rgba(0, 0, 0, 0.01),
    0px 105px 63px rgba(0, 0, 0, 0.05),
    0px 47px 47px rgba(0, 0, 0, 0.09),
    0px 12px 26px rgba(0, 0, 0, 0.1),
    0px 2px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: 33% 34% 33%;
  gap: 20px;
  padding: 20px 10px;

  button {
    height: 55px;
    background: #f2f2f2;
    border: none;
    border-radius: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #e0e0e0;
    }
  }
`;

const Separator = styled.p`
  font-size: 0.85rem;
  text-align: center;
  color: #555;
  margin: 0 0 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px 20px;

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    color: #333;

    input {
      margin-top: 6px;
      height: 55px;
      padding: 0 14px;
      font-size: 1rem;
      border: none;
      border-radius: 11px;
      background: #f2f2f2;
      outline: none;
    }
  }
`;

const ExpiryRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
`;

const SubmitButton = styled.button`
  height: 55px;
  margin-top: 10px;
  background: #000;
  color: #fff;
  font-size: 1.05rem;
  font-weight: 600;
  border: none;
  border-radius: 11px;
  cursor: pointer;
  transition: background 0.2s;

  &:disabled {
    background: #444;
    cursor: not-allowed;
  }
  &:hover:enabled {
    background: #222;
  }
`;