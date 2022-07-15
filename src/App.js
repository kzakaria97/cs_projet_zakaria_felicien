import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Like from "../src/components/like/Like";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Data } from "./data/Data";

const App = () => {
  const [likeItem, setLikeItem] = useState([]);
  let addLike = (jaime) => {
    setLikeItem([...likeItem, jaime]);
    likeItem.push(jaime);
    console.log(likeItem);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home test={addLike} />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/like" element={<Like listLike={likeItem} />} />
        {/* path="*" fonctionne si jamais l'url ne correspond a rien de déclarer au dessus */}
        <Route path="*" element={<Home test={addLike} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
