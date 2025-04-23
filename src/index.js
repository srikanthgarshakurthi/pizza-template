import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Products from './components/Products';
import PastaStories from './components/PastaStories';
import PastaVideos from './components/PastaVideos';
// import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import './style.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <HeroSection />
    <Highlights />
    <Products />
    <PastaStories />
    <PastaVideos />
    <SearchBar />
    {/* <Newsletter /> */}
    <Footer />
  </>
);
