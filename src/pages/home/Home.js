import React from "react";
import Navigation from "../../components/navigation/Navigation";
import "./home.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../../components/footer/Footer";
import Video from "../../components/video/Video";
const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="div1">
        <button className="fleche">&#8592;</button>
        <div className="div1-second">
          <h1 className="title-leather">
            <u>LEATHER BAGS</u>
          </h1>
          <p>New Collection</p>
          <button className="btn-shop rounded-pill">SHOP NOW</button>
        </div>
        <button className="fleche">&#8594;</button>
      </div>
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
      <div className="div3">
        <h2>OUR PRODUCTS</h2>
        <Tabs>
          <TabList className="tab">
            <Tab className="tabs">Best Seller</Tab>
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
            </div>
            <div>
              <div className="img2-BS"></div>
              <p>Denim jacket blue</p>
              <p>$92.50</p>
            </div>
            <div>
              <div className="img3-BS"></div>
              <p>Coach slim easton black</p>
              <p>$165.90</p>
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
            </div>
          </TabPanel>
          <TabPanel className="panel">
            <div>
              <div className="img1-BS">
                <p className="rounded-pill">New</p>
              </div>
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
            </div>
            <div>
              <div className="img1-BS">
                <p className="rounded-pill">New</p>
              </div>
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
            </div>
            <div>
              <div className="img1-BS">
                <p className="rounded-pill">New</p>
              </div>
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
            </div>
            <div>
              <div className="img1-BS">
                <p className="rounded-pill">New</p>
              </div>
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
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
            </div>
          </TabPanel>
          <TabPanel className="panel">
            <div>
              <div className="img2-BS"></div>
              <p>Denim jacket blue</p>
              <p>$92.50</p>
            </div>
            <div>
              <div className="img3-BS"></div>
              <p>Coach slim easton black</p>
              <p>$165.90</p>
            </div>

            <div>
              <div className="img2-BS"></div>
              <p>Denim jacket blue</p>
              <p>$92.50</p>
            </div>
            <div>
              <div className="img3-BS"></div>
              <p>Coach slim easton black</p>
              <p>$165.90</p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div className="div4-home">
        <Video />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
