import React from 'react';
import '../styles.css';

export default function About() {
  return (
    <section className="about-section">
      <h2>About</h2>
      <h3>How We Started</h3>
      <div className="about-columns">
        <div className="about-column">
          <h4>Column Title</h4>
          <p>
            Pair text with an image to focus on your chosen product, collection, or blog post. Add
            details on availability, style, or even provide a review.
          </p>
        </div>
        <div className="about-column">
          <h4>Column Title</h4>
          <p>
            Pair text with an image to focus on your chosen product, collection, or blog post. Add
            details on availability, style, or even provide a review.
          </p>
        </div>
        <div className="about-column">
          <h4>Column Title</h4>
          <p>
            Pair text with an image to focus on your chosen product, collection, or blog post. Add
            details on availability, style, or even provide a review.
          </p>
        </div>
      </div>
    </section>
  );
}