import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const handleCheckout = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(import.meta.env.VITE_API_URL + '/create-checkout-session');
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
  return (
    <div className="checkout-container">
      <button onClick={handleCheckout} disabled={loading} className="btn">
        {loading ? 'Processing...' : 'Checkout'}
      </button>
    </div>
  );
}