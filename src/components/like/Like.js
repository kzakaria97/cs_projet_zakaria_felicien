import React, { useState } from "react";
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
        <h2 className="text-center mb-4">YOUR LIKE !</h2>
        {maison.length == 0 && (
          <div className="text-center">
            Vous n'avez aucun articles dans votre panier à LIKE
          </div>
        )}
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
                    <button
                      onClick={decrementCount}
                      style={{ border: "none", width: "2%" }}
                    >
                      -
                    </button>
                    {count}
                    <button
                      onClick={incrementCount}
                      style={{ border: "none", width: "2%" }}
                    >
                      +
                    </button>
                    <p>{element.price * count} $</p>
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
    </div>
  );
};

export default Like;
