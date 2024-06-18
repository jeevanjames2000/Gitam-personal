import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import './Styles/ImageSlider.css';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      imgPath: '/Images/Banner.png',
      caption: 'Caption 1',
    },
    // {
    //   imgPath: '/Images/Frame 13.png',
    //   caption: 'Caption 2',
    // },
    // {
    //   imgPath: '/Images/Frame 14.png',
    //   caption: 'Caption 3',
    // },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Grid container className="slider-container">
      <Grid item xs={12}>
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image.imgPath} alt={`Slide ${index + 1}`} className="slide-img" />
            </div>
          ))}
        </div>
        <div className="dots-container">
          {images.map((image, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default ImageSlider;
