import React from "react";
import Navigation from "../../components/navigation/Navigation";
import "./home.css";
import "react-tabs/style/react-tabs.css";
import Footer from "../../components/footer/Footer";
import Video from "../../components/video/Video";
import CarouselComponent from "../../components/swiper/Swipe";
import Filter from "../../components/filter/Filter";

const Home = ({ test }) => {
  return (
    <div>
      <Navigation />
      <CarouselComponent />
      <div className="div2">
        <div className="div2-1">
          <button className="btn1-div2">COMING SOON</button>
        </div>
        <div className="div2-2">
          <button className="btn2-div2">COMING SOON</button>
        </div>
        <div className="div2-3">
          <button className="btn3-div2">COMING SOON</button>
        </div>
      </div>
      <Filter test={test} />
      <div className="div4-home">
        <Video />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
