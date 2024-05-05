import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class AutoCarousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Définir la vitesse d'autoplay en millisecondes
    };
    return (
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="slide1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="slide2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="slide3" />
        </div>
      </Slider>
    );
  }
}

export default AutoCarousel;
