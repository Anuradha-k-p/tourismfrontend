import React, { useEffect, useState } from 'react';
import Slide1 from './img1.jpg'; 
import Slide2 from './img2.jpg';
import Slide3 from './img3.jpg';
import Slide4 from "./img4.jpg"
import Slide5 from "./img5.jpg"
import Slide6 from "./img6.jpg"
// import Slide7 from "./img7.jpg"
import "./Slider.css"

const FrontSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slides = [Slide2, Slide1, Slide3, Slide4, Slide5, Slide6];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % Slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + Slides.length) % Slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval);
  });

  return (
    <div className="Slide-slider">
      <img src={Slides[currentSlide]} className='Slide-image' alt={`Slide ${currentSlide + 1}`} />
      <div className="btn-div">
      <button onClick={prevSlide} className='change-btn'><i className='fa-solid fa-angles-left'></i> </button>
      <button onClick={nextSlide} className='change-btn'><i className='fa-solid fa-angles-right'></i></button>
      </div>
    </div>
  );
};

export default FrontSlider;