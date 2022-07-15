import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Like from "../src/components/like/Like";
import Info1 from "./components/info/Info1";
import Info2 from "./components/info/Info2";
import Info3 from "./components/info/Info3";
import Info4 from "./components/info/Info4";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './mediaQueries.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/like" element={<Like />} />
        <Route path="/info/article1" element={<Info1 />} />
        <Route path="/info/article2" element={<Info2 />} />
        <Route path="/info/article3" element={<Info3 />} />
        <Route path="/info/article4" element={<Info4 />} />
        {/* path="*" fonctionne si jamais l'url ne correspond a rien de déclarer au dessus */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
