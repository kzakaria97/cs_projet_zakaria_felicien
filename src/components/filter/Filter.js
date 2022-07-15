import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Data } from "../../data/Data";
import "./filter.css";
import Info2 from "../../components/info/Info";
import { useState } from "react";

const Filter = ({ test }) => {
  const [isHovered, setHover] = useState(false);

  return (
    <div className="mt-5">
      <h2 className="text-center">Our products</h2>
      <Tabs className="mt-5">
        <TabList className=" tablist text-center mb-5">
          <Tab>Best Seller</Tab>
          <Tab>New</Tab>
          <Tab>Sale</Tab>
          <Tab>Old</Tab>
        </TabList>

        <TabPanel className="filter1">
          {Data.map((element, index) => {
            return (
              <>
                {element.bestseller === true && (
                  <div>
                    <div key={index} className="filterElement">
                      <div className="imgcontainer">
                        <button
                          className="elementicon-like"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          onClick={() => test(element)}
                        >
                          <i
                            class="fas fa-heart"
                            style={{ color: "red", fontSize: "24px" }}
                          ></i>
                        </button>
                        <img src={element.src} alt="item" />
                        <button className="add-cart">ADD TO BAG</button>
                      </div>
                      <p>{element.etat}</p>
                      <p>{element.name}</p>
                      <p>{element.price} $</p>
                      <div></div>
                      <Info2 />
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </TabPanel>
        <TabPanel className="filter1">
          {Data.map((element, index) => {
            return (
              <>
                {element.new === true && (
                  <div>
                    <div key={index} className="filterElement">
                      <div className="imgcontainer">
                        <button
                          className="elementicon-like"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          onClick={() => test(element)}
                        >
                          <i
                            class="fas fa-heart"
                            style={{ color: "red", fontSize: "24px" }}
                          ></i>
                        </button>
                        <img src={element.src} alt="item" />
                        <button className="add-cart">ADD TO BAG</button>
                      </div>
                      <p>{element.etat}</p>
                      <p>{element.name}</p>
                      <p>{element.price}</p>
                      <div></div>
                      <Info2 />
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </TabPanel>
        <TabPanel className="filter1">
          {Data.map((element, index) => {
            return (
              <>
                {element.sale === true && (
                  <div>
                    <div key={index} className="filterElement">
                      <div className="imgcontainer">
                        <button
                          className="elementicon-like"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          onClick={() => test(element)}
                        >
                          <i
                            class="fas fa-heart"
                            style={{ color: "red", fontSize: "24px" }}
                          ></i>
                        </button>
                        <img src={element.src} alt="item" />
                        <button className="add-cart">ADD TO BAG</button>
                      </div>
                      <p>{element.etat}</p>
                      <p>{element.name}</p>
                      <p>{element.price}</p>
                      <div></div>
                      <Info2 />
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </TabPanel>
        <TabPanel className="filter1">
          {Data.map((element, index) => {
            return (
              <>
                {element.old === true && (
                  <div>
                    <div key={index} className="filterElement">
                      <div className="imgcontainer">
                        <button
                          className="elementicon-like"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          onClick={() => test(element)}
                        >
                          <i
                            class="fas fa-heart"
                            style={{ color: "red", fontSize: "24px" }}
                          ></i>
                        </button>
                        <img src={element.src} alt="item" />
                        <button className="add-cart">ADD TO BAG</button>
                      </div>
                      <p>{element.etat}</p>
                      <p>{element.name}</p>
                      <p>{element.price}</p>
                      <div></div>
                      <Info2 />
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Filter;
