import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-6 text-center">
            <p className="text-black">
              <strong>GET IN TOUCH</strong>
            </p>
            <p className="para-footer">
              Any questions? let us know in store at 8th floor, 379 Hudson St,
              New York ,<br /> NY 10018 or call us on (+1)96 716 6879
            </p>
            <div className="icon-footer">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-pinterest-p"></i>
              <i class="fab fa-snapchat-ghost"></i>
              <i class="fab fa-youtube"></i>
            </div>
          </div>
          <div className="col-3">
            <p className="text-black">
              <strong>LINK</strong>
            </p>
            <p>
              Search <br />
              About Us <br />
              Contact Us <br />
              Returns
            </p>
          </div>
          <div className="col-3">
            <p className="text-black">
              <strong>LINK</strong>
            </p>
            <p>
              Search <br />
              About Us <br />
              Contact Us <br />
              Returns
            </p>
          </div>
        </div>
      </div>
      <div className="div-payment">
        <img src="img/payments.jpg" className="masterCard" alt="" />
        <p>Copyright &copy; All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
