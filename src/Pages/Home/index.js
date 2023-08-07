'use client';

import Slider from "../../Components/Carousel";
import Gallery from "../../Components/Gallery";

const Home = () => {
  return(
    <div className="container mx-auto">
      <Slider
        images={[
          {
            src: 'https://i.ibb.co/kBYyfWf/cute-gaming-hhgshjfdjd143yjm.jpg',
            name: 'Slide1'
          },
          {
            src: 'https://i.ibb.co/MVPBtDd/future-city-omvusg0yrye3psqv.jpg',
            name: 'Slide2'
          },
          {
            src: 'https://i.ibb.co/k8Q7Fk4/fallout-gaming-cover-19xnjo1pwdl88m2b.jpg',
            name: 'Slide3'
          }
        ]} 
      />
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Choose your favorite Images</h1>
        <Gallery />
      </div>
    </div>
  );
}

export default Home;