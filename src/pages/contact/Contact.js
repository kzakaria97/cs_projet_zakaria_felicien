import React from "react";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import "./contact.css";

export default function Contact() {
  return (
    <section className="Contact">
      <Navigation />
      <h1 className="contactTitle">Contact</h1>
      <div className="contactForm">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20136.679569373682!2d4.718200431155834!3d50.88513814039853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c16730abb865d9%3A0xd5833ad8db0443c1!2sKessel-Lo%2C%203010%20Louvain!5e0!3m2!1sfr!2sbe!4v1657629378302!5m2!1sfr!2sbe"
        ></iframe>

        <div className="formInput">
          <h2>Send us your message</h2>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Email Adress" />
          <input type="text" placeholder="Message" />
          <button type="submit" className="send">
            SEND
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
}
