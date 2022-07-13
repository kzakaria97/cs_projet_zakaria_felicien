import React from "react";
import Carousel from "nuka-carousel";
import "./swipe.css";

const CarouselComponent = () => {
  return (
    <Carousel>
      <div>
        <img className="swiper" src="./img/cart_top.jpg" />
        <div className=" legend-swipe text-center text-white">
          <h1>
            <u>LEATHER BAGS</u>
          </h1>
          <p>New Collection</p>
          <button className="rounded-pill">SHOP NOW</button>
        </div>
      </div>
      <div>
        <img className="swiper" src="./img/about_top.jpg" />
        <div className="legend-swipe text-center text-white">
          <h1>
            <u>LEATHER BAGS</u>
          </h1>
          <p>New Collection</p>
          <button className="rounded-pill">SHOP NOW</button>
        </div>
      </div>
      <div>
        <img className="swiper" src="./img/blog_top.jpg" />
        <div className="legend-swipe text-center text-white">
          <h1>
            <u>LEATHER BAGS</u>
          </h1>
          <p>New Collection</p>
          <button className="rounded-pill">SHOP NOW</button>
        </div>
      </div>
      <div>
        <img className="swiper" src="./img/collection_top.jpg" />
        <div className="legend-swipe text-center text-white">
          <h1>
            <u>LEATHER BAGS</u>
          </h1>
          <p>New Collection</p>
          <button className="rounded-pill">SHOP NOW</button>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
