import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { NavLink } from "react-router-dom";
import "./panel.css";

const Panel = () => {
  return (
    <div>
      <div className="div3">
        <h2>OUR PRODUCTS</h2>
        <Tabs>
          <TabList className="tab">
            <Tab className="tabs">Best Sellerr</Tab>
            <Tab className="tabs">New</Tab>
            <Tab className="tabs">Sale</Tab>
            <Tab className="tabs">Old</Tab>
          </TabList>
          <TabPanel className="panel">
            <div>
              <div className="img1-BS">
                <p className="rounded-pill">New</p>
              </div>
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
              <p>
                <NavLink
                  to="/info/article1"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <button id="info1" className="btn-info">
                    More information
                  </button>
                </NavLink>
              </p>
            </div>
            <div>
              <div className="img2-BS"></div>
              <p>Denim jacket blue</p>
              <p>$92.50</p>
              <p>
                <NavLink
                  to="/info/article2"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <button id="info2" className="btn-info">
                    More information
                  </button>
                </NavLink>
              </p>
            </div>
            <div>
              <div className="img3-BS"></div>
              <p>Coach slim easton black</p>
              <p>$165.90</p>
              <p>
                <NavLink
                  to="/info/article3"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <button id="info3" className="btn-info">
                    More information
                  </button>
                </NavLink>
              </p>
            </div>
            <div>
              <div className="img4-BS">
                <p className="rounded-pill">Sale</p>
              </div>
              <p>Herschel supply co 25l</p>
              <p>
                <strike>$29.50</strike>
                <span className="solde"> $15.90</span>
              </p>
              <p>
                <NavLink
                  to="/info/article4"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <button id="info4" className="btn-info">
                    More information
                  </button>
                </NavLink>
              </p>
            </div>
          </TabPanel>
          <TabPanel className="panel">
            <div>
              <div className="img1-BS">
                <p className="rounded-pill">New</p>
              </div>
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
              <p>
                <NavLink
                  to="/info/article1"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <button id="info1" className="btn-info">
                    More information
                  </button>
                </NavLink>
              </p>
            </div>
            <div>
              <div className="img1-BS">
                <p className="rounded-pill">New</p>
              </div>
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
              <p>
                <NavLink
                  to="/info/article1"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <button id="info1" className="btn-info">
                    More information
                  </button>
                </NavLink>
              </p>
            </div>
            <div>
              <div className="img1-BS">
                <p className="rounded-pill">New</p>
              </div>
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
              <NavLink
                to="/info/article1"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <button id="info1" className="btn-info">
                  More information
                </button>
              </NavLink>
            </div>
            <div>
              <div className="img1-BS">
                <p className="rounded-pill">New</p>
              </div>
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
              <p></p>
              <NavLink
                to="/info/article1"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <button id="info1" className="btn-info">
                  More information
                </button>
              </NavLink>
            </div>
          </TabPanel>
          <TabPanel className="panel">
            <div>
              <div className="img4-BS">
                <p className="rounded-pill">Sale</p>
              </div>
              <p>Herschel supply co 25l</p>
              <p>
                <strike>$29.50</strike>
                <span className="solde"> $15.90</span>
              </p>
              <p>
                <NavLink
                  to="/info/article4"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <button id="info4" className="btn-info">
                    More information
                  </button>
                </NavLink>
              </p>
            </div>
            <div>
              <div className="img4-BS">
                <p className="rounded-pill">Sale</p>
              </div>
              <p>Herschel supply co 25l</p>
              <p>
                <strike>$29.50</strike>
                <span className="solde"> $15.90</span>
              </p>
              <p>
                <NavLink
                  to="/info/article4"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <button id="info4" className="btn-info">
                    More information
                  </button>
                </NavLink>
              </p>
            </div>
            <div>
              <div className="img4-BS">
                <p className="rounded-pill">Sale</p>
              </div>
              <p>Herschel supply co 25l</p>
              <p>
                <strike>$29.50</strike>
                <span className="solde"> $15.90</span>
              </p>
              <p>
                <NavLink
                  to="/info/article4"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <button id="info4" className="btn-info">
                    More information
                  </button>
                </NavLink>
              </p>
            </div>
            <div>
              <div className="img4-BS">
                <p className="rounded-pill">Sale</p>
              </div>
              <p>Herschel supply co 25l</p>
              <p>
                <strike>$29.50</strike>
                <span className="solde"> $15.90</span>
              </p>
              <p></p>
              <NavLink
                to="/info/article4"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <button id="info4" className="btn-info">
                  More information
                </button>
              </NavLink>
            </div>
          </TabPanel>
          <TabPanel className="panel">
            <div>
              <div className="img2-BS"></div>
              <p>Denim jacket blue</p>
              <p>$92.50</p>
              <p>
                <NavLink
                  to="/info/article2"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <button id="info2" className="btn-info">
                    More information
                  </button>
                </NavLink>
              </p>
            </div>
            <div>
              <div className="img3-BS"></div>
              <p>Coach slim easton black</p>
              <p>$165.90</p>
              <p>
                <NavLink
                  to="/info/article3"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <button id="info3" className="btn-info">
                    More information
                  </button>
                </NavLink>
              </p>
            </div>

            <div>
              <div className="img2-BS"></div>
              <p>Denim jacket blue</p>
              <p>$92.50</p>
              <p>
                <NavLink
                  to="/info/article2"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <button id="info2" className="btn-info">
                    More information
                  </button>
                </NavLink>
              </p>
            </div>
            <div>
              <div className="img3-BS"></div>
              <p>Coach slim easton black</p>
              <p>$165.90</p>
              <p>
                <NavLink
                  to="/info/article3"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <button id="info3" className="btn-info">
                    More information
                  </button>
                </NavLink>
              </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Panel;
