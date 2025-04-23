// import React from 'react';

// export default function Highlights() {
//   return (
//     <section className="highlights">
//       <div className="highlight-card">Want Something Real?</div>
//       <div className="highlight-card">Bambino Macaroni Pep Elbows</div>
//       <div className="highlight-card">Healthy Pasta !!!</div>
//       <div className="highlight-card">Best for any time...</div>
//       <div className="highlight-card">How we bring pasta to your plate?</div>
//     </section>
//   );
// }




import React from 'react';
import img1 from '../assets/special-3.jpg';
import img2 from '../assets/product2.jpg';
import img3 from '../assets/pizza logo.jpg';
import img4 from '../assets/special-4.jpg';
import img5 from '../assets/prod 12.jpg';
import img6 from '../assets/pro 4.jpg';




export default function Highlights() {
  return (
    <section className="highlights">
      <div className="highlight-card">
        <img src={img1} alt="Want Something Real" />
        <p>Want Something Real?</p>
      </div>
      <div className="highlight-card">
        <img src={img2} alt="Twirl Into Something Tasty" />
        <p>Twirl Into Something Tasty</p>
      </div>
      <div className="highlight-card">
        <img src={img3} alt="Healthy Pasta" />
        <p>Healthy Pasta !!!</p>
      </div>
      <div className="highlight-card">
        <img src={img4} alt="Best for Any Time" />
        <p>Best for any time...</p>
      </div>
      <div className="highlight-card">
        <img src={img5} alt="How Pasta is Made" />
        <p>Say Cheese to Every Slice!</p>
      </div>
      <div className="highlight-card">
        <img src={img6} alt="How Pasta is Made" />
        <p>More Than a Meal — It’s a Burger Experience</p>
      </div>
    </section>
  );
}
