import React from "react";
import "./info.css";
import { Data } from "../../data/Data";

const Info2 = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        more informations
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {Data.map((element, index) => {
                return (
                  <>
                    {element.id === 1 && (
                      <div>
                        <div key={index}>
                          <h2 className="text-center">About</h2>
                          <img src={element.src} alt="" />
                          <p>{element.name}</p>
                          <p>{element.price}</p>
                          <p>{element.description}</p>
                          <p>Taille disponible : S/M/L/XL</p>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-info"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info2;
