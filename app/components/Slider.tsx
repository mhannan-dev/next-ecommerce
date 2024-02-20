"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SlideProps {
  image: string;
  title: string;
  description: string;
}

const Slide: React.FC<SlideProps> = ({ image, title, description }) => (
  <div className="px-4">
    <img src={image} alt={title} className="w-full h-auto rounded-lg" />
    <div className="text-center mt-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const slides = [
  {
    image: 'https://via.placeholder.com/800x375',
    title: 'Slide 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: 'https://via.placeholder.com/800x375',
    title: 'Slide 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://via.placeholder.com/800x375',
    title: 'Slide 3',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];
const CustomSlider = () => {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <Slide {...slide} />
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
