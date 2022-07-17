import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import "./like.css";
import { Data } from "../../data/Data";

const Like = ({ listLike, maison }) => {
  const [count, setCount] = useState(1);
  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  console.log(count);
  const decrementCount = () => {
    setCount(count - 1);
  };
  console.log(maison.length);

  return (
    <div>
      <div>
        <Navigation />
        <div>
          <h1 className="likeTitle text-center">Vos coups de coeurs</h1>
        </div>
        <div
          className="description"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <p
            style={{
              border: "solid black 1px",
              width: "320px",
              textAlign: "center",
            }}
          >
            Product
          </p>
          <p
            style={{
              border: "solid black 1px",
              width: "320px",
              textAlign: "center",
            }}
          >
            Reference
          </p>
          <p
            style={{
              border: "solid black 1px",
              width: "320px",
              textAlign: "center",
            }}
          >
            Quantity
          </p>
          <p
            style={{
              border: "solid black 1px",
              width: "320px",
              textAlign: "center",
            }}
          >
            Price
          </p>
        </div>
        {maison.length == 0 && (
          <div
            className="text-center"
            style={{
              display: "flex",
              gap: "50px",
              flexDirection: "column",
              paddingBottom: "5%",
            }}
          >
            <h6 className=" empty text-center">
              Vous n'avez aucun article dans votre panier à LIKE
            </h6>
            <div>
              <i
                class="fal fa-exclamation-circle"
                style={{ fontSize: "5rem", color: "black" }}
              ></i>
            </div>
            <NavLink
              to="/home"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <button
                className="back rounded-pill"
                style={{
                  padding: "1%",
                  fontSize: "10px",
                  border: "none",
                  color: "white",
                  backgroundColor: "black",
                }}
              >
                BACK TO HOME
              </button>
            </NavLink>
          </div>
        )}
        <div>
          {listLike.map((element, index) => {
            return (
              <>
                {
                  <div
                    style={{
                      border: "solid black 1px",
                      marginBottom: "5%",
                      paddingTop: "5%",
                      backgroundColor: "#d9d9d9",
                    }}
                  >
                    <div key={index} className="likeItem">
                      <img
                        className="img-like"
                        src={element.src}
                        style={{
                          width: "250px",
                          height: "300px",
                          position: "relative",
                          left: "-110px",
                        }}
                        alt="item"
                      />
                      <h6
                        className="legend"
                        style={{ position: "relative", left: "-50px" }}
                      >
                        {element.name}
                      </h6>
                      <button
                        onClick={decrementCount}
                        style={{
                          border: "none",
                          width: "2%",
                          position: "relative",
                          left: "50px",
                        }}
                      >
                        -
                      </button>
                      <div style={{ position: "relative", left: "25px" }}>
                        {count}
                      </div>
                      <button
                        onClick={incrementCount}
                        style={{ border: "none", width: "2%" }}
                      >
                        +
                      </button>
                      <p style={{ position: "relative", left: "100px" }}>
                        {element.price * count} $
                      </p>
                      <button
                        className="add-bag rounded-pill"
                        style={{
                          position: "relative",
                          left: "100px",
                          backgroundColor: "green",
                          border: "none",
                          color: "white",
                          fontSize: "11px",
                          padding: "1%",
                        }}
                      >
                        ADD TO BAG
                      </button>
                    </div>
                  </div>
                }
              </>
            );
          })}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Like;
