// import React from 'react';

// export default function Products() {
//   return (
//     <section className="products">
//       <h2>Our Products</h2>
//       <div className="product-list">
//         <div className="product-card">Only Vegetarian</div>
//         <div className="product-card">Grab & Go!</div>
//         <div className="product-card">Fresh School Tacos</div>
//       </div>
//     </section>
//   );
// }





// components/Products.js
import React from 'react';
// import './Products.css';

// Replace these imports with your actual image paths
import vegImg from '../assets/pic 1.png';
import pastaImg from '../assets/pic 2.png';
import roastedImg from '../assets/pic 3.png';

const products = [
  {
    title: 'Only Vegetarian',
    image: vegImg,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonum nibhie euismod. Facilisis at vero …',
    link: '#'
  },
  {
    title: 'Grab & Go!',
    image: pastaImg,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonum nibhie euismod. Facilisis at vero …',
    link: '#'
  },
  {
    title: 'Fresh Tacos',
    image: roastedImg,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonum nibhie euismod. Facilisis at vero …',
    link: '#'
  }
];

export default function Products() {
  return (
    <section className="products">
      <h2 className="products__header">Our Products</h2>
      <div className="products__list">
        {products.map((prod, idx) => (
          <div key={idx} className="product-card">
            <img src={prod.image} alt={prod.title} className="product-card__image" />
            <h3 className="product-card__title">{prod.title}</h3>
            <p className="product-card__desc">{prod.description}</p>
            <a href={prod.link} className="product-card__link">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}
