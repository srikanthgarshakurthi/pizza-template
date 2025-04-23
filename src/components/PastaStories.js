import React from 'react';
import pastaImage from '../assets/pro 8.jpg';

export default function IntroSection() {
  return (
    <section className="intro-section">

      {/* Brand Name */}
      <h2 className="products__header">Pasta Stories</h2>

      <div className="intro-section__container">
        {/* Left Image */}
        <div className="intro-section__left">
          <img src={pastaImage} alt="Delicious pasta" className="intro-section__image" />
        </div>

        {/* Right Content */}
        <div className="intro-section__right">
          <div className="intro-section__content">
            <p className="intro-section__welcome">Welcome</p>
            <h1 className="intro-section__title">The Specialty of the House</h1>
            <p className="intro-section__description">
              Discover the perfect blend of traditional ingredients and modern flavors. Every bite tells a story of passion, quality, and taste.
            </p>
            <button className="intro-section__btn">Know More</button>
          </div>
        </div>
      </div>

    </section>
  );
}



