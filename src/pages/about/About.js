import React from "react";
import Navigation from "../../components/navigation/Navigation";
import "./about.css";
import Footer from "../../components/footer/Footer";
const About = () => {
  return (
    <div>
      <Navigation />
      <div className="div-about">
        <h1 className="about">ABOUT</h1>
      </div>
      <div className="div2-about container">
        <div className="row">
          <div className="col-4">
            <img src="/images/women4.webp" className="cintre" alt="" />
          </div>
          <div className="col-8">
            <h2 className="story">Our story</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptate autem asperiores nobis! Non aut provident, itaque sed
              quos vitae dolore? Eaque quae eos nihil vel necessitatibus
              consequatur voluptatibus doloremque sint alias, itaque minus
              dolorem laboriosam. Adipisci, ad nesciunt dolores odio praesentium
              necessitatibus beatae! Nulla saepe et ea neque velit quis quo,
              cupiditate reiciendis in nisi sunt obcaecati impedit provident,
              doloremque officiis incidunt vero corrupti corporis reprehenderit
              fuga fugit. Quam eveniet expedita doloremque corrupti voluptatum
              esse hic itaque, aperiam quasi reiciendis possimus nemo
              perspiciatis? Odit vero dolorem harum reiciendis nesciunt
              quisquam, vel fugiat, assumenda omnis laborum repudiandae eligendi
              quae adipisci voluptas cupiditate eos ab molestiae explicabo ipsa
              accusantium. Esse illum suscipit eaque doloremque quasi iusto
            </p>
            <p className="para2-about">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem distinctio, eligendi, consequuntur voluptate eaque,
              cumque temporibus saepe at quae nesciunt totam nobis! Iure minima
              inventore sint quia consequuntur quae, eos saepe nihil accusamus
              quas suscipit tempore recusandae ipsa velit expedita commodi
              tempora labore placeat ducimus sit harum architecto accusantium
              quo. <br /> <br /> -Steve job's
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
