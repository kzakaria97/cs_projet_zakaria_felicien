import React from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import "./like.css";
import { Data } from "../../data/Data";

const Like = () => {
  return (
    <div>
      <Navigation />
      <div>
        <h1 className="likeTitle text-center">Vos coups de coeurs</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Like;
