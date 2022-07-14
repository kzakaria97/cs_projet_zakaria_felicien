import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import CarouselComponent from "../swiper/Swipe";
import Footer from "../footer/Footer";
import "./info.css";

const Info2 = () => {
  return (
    <div>
      <Navigation />
      <CarouselComponent />
      <h1 className="text-center mb-5">Plus d'info sur votre article</h1>
      <div className="div1-info">
        <div className="div2-info">
          <img src="/img/polosRL.jpg" className="image1info" alt="" />
          <p>
            Taille disponible : XS/S/M/L/XL/XXL <br />
            Prix : $75.00 <br />
            <span className="stock rounded-pill">Actuellement disponible</span>
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia saepe
          eum, quibusdam ratione nihil velit id minima ut qui repellat, eveniet
          sunt placeat. Error veniam quisquam nam odit consectetur culpa ullam,
          et itaque ut a est aliquam harum praesentium porro ducimus vel. Minima
          nisi velit sit excepturi enim, explicabo adipisci consequatur
          voluptates voluptas nihil natus eveniet quia. Natus exercitationem
          maiores eaque officiis! Magni consectetur tempore vitae sapiente
          distinctio aliquam et omnis mollitia quae, tenetur illo? Quibusdam
          error deleniti consequatur, id atque unde amet deserunt quas et ipsam
          earum reprehenderit similique sint tempora est harum asperiores
          adipisci natus saepe libero dignissimos dicta? Quibusdam neque aperiam
          ex maxime dolores, quas dolor minima molestias autem delectus
          consequuntur, ratione doloribus molestiae eos provident nisi minus
          fugiat atque obcaecati. Molestias rem a ea sint veritatis at assumenda
          delectus saepe nulla sed, accusamus deleniti ratione ducimus! Tempore
          perspiciatis voluptates deleniti quia, iusto facilis commodi
          laboriosam dolor?
        </p>
      </div>
      <div className="text-center mb-3">
        <NavLink
          to="/home"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <button id="info1" className="btn-back rounded-pill">
            back to home here
          </button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Info2;
