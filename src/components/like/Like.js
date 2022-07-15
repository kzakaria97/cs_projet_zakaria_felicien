import React from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import Quantity from "../quantity/Quantity";
import "./like.css";
import { Data } from "../../data/Data";

const Like = ({ listLike }) => {
  return (
    <div>
      <Navigation />
      <div>
        <h1 className="likeTitle text-center">Vos coups de coeurs</h1>
      </div>
      <h2 className="text-center mb-4">YOUR LIKES ! !</h2>
      {listLike.map((element, index) => {
        return (
          <>
            {
              <div>
                <div key={index} className="likeItem">
                  <img
                    src={element.src}
                    style={{ width: "250px", height: "300px" }}
                    alt="item"
                  />
                  <p>{element.name}</p>
                  <Quantity />
                  <p>{element.price}</p>
                  <button
                    className="rounded-pill"
                    style={{
                      backgroundColor: "green",
                      border: "none",
                      color: "white",
                      fontSize: "11px",
                      padding: "1%",
                    }}
                  >
                    Delete this article
                  </button>
                </div>
              </div>
            }
          </>
        );
      })}
      <Footer />
    </div>
  );
};

export default Like;
