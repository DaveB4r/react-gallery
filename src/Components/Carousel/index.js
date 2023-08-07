'use client';

import { Carousel } from "flowbite-react";


const Slider = ({ images }) => {
  return (
    <div className="h-48 mx-auto" >
      <Carousel slideInterval={5000}>
        {images.map(image => (
          <img
          key={image.name}
          alt={image.name}
          src={image.src}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;