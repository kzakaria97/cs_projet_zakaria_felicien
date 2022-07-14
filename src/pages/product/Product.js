import React, { useState, useEffect } from "react";
import Item from "./Item";
import "./product.css";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";

export default function Product() {
  // liste des items (state)
  const [items, setItems] = useState([
    {
      nom: "Herschel supply co 25l",
      url: "/img/item-2.jpg",
      prix: "$75.00",
      nouveauPrix: "",
      pastille: "New",
      id: "i1",
      categorie: "women",
    },
    {
      nom: "Denim jacket blue",
      url: "/img/item-7.jpg",
      prix: "$92.50",
      nouveauPrix: "Coach slim easton black",
      pastille: "",
      id: "i2",
      categorie: "men",
    },
    {
      nom: "Coach slim easton black",
      url: "/img/item-4.jpg",
      prix: "$165.90",
      nouveauPrix: "",
      astille: "",
      id: "i3",
      categorie: "kids",
    },
    {
      url: "/img/item-3.jpg",
      pastille: "New",
      nom: "Supply co l",
      prix: "$75.00",
      nouveauPrix: "",
      id: "i4",
      categorie: "accessoire",
    },
    {
      url: "/img/item-4.jpg",
      pastille: "",
      nom: "Herschel da thing",
      prix: "$75.00",
      nouveauPrix: "",
      id: "i5",
      categorie: "men",
    },
    {
      url: "/img/item-6.jpg",
      pastille: "",
      nom: "Row greey",
      prix: "$92.50",
      nouveauPrix: "",
      id: "i6",
      categorie: "women",
    },
    {
      nom: "Truc no 2l",
      url: "./img/item-5.jpg",
      prix: "$75.00",
      nouveauPrix: "",
      pastille: "New",
      id: "i7",
      categorie: "kids",
    },
  ]);
  // state pour trier les catÃ©gories avec useEffect
  const [tri, setTri] = useState(null);
  useEffect(() => {
    setTri(items);
  });
  const triCategorie = (genre) => {
    let filtreCategorie = items.filter((item) => item.categorie === genre);
    return filtreCategorie;
  };
  const handleTri = (e) => {
    let categorie = e.target.categorieg;
  };
  return (
    <section className="Product">
      <Navigation />
      <h1>
        PRODUCT
        <span> New Arrival Women Collection</span>
      </h1>
      <div className="groupeProduct">
        <nav className="productNav">
          <div className="navTop">
            <h3>Categories</h3>
            <span>All</span>
            <br />
            <span>Women</span>
            <br />
            <span>Kids</span>
            <br />
            <span>Men</span>
            <br />
            <span>Accessories</span>
            <br />
          </div>
          <div className="navBottom">
            <h3>Filter</h3>
            <div className="navInput">
              <input type="text" />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </nav>
        <div className="productItemsContainer">
          <p className="nbreArticles">Nombre de product search: 15 all</p>
          <div className="itemsGrid">
            <Item
              nom={items[1].nom}
              url={items[1].url}
              prix={items[1].prix}
              pastille={items[1].pastille}
              nouveauPrix={items[1].nouveauPrix}
            />
            <Item
              nom={items[2].nom}
              url={items[2].url}
              prix={items[2].prix}
              pastille={items[2].pastille}
              nouveauPrix={items[2].nouveauPrix}
            />
            <Item
              nom={items[3].nom}
              url={items[3].url}
              prix={items[3].prix}
              pastille={items[3].pastille}
              nouveauPrix={items[3].nouveauPrix}
            />
            <Item
              nom={items[4].nom}
              url={items[4].url}
              prix={items[4].prix}
              pastille={items[4].pastille}
              nouveauPrix={items[4].nouveauPrix}
            />
            <Item
              nom={items[5].nom}
              url={items[5].url}
              prix={items[5].prix}
              pastille={items[5].pastille}
              nouveauPrix={items[5].nouveauPrix}
            />
            <Item
              nom={items[6].nom}
              url={items[6].url}
              prix={items[6].prix}
              pastille={items[6].pastille}
              nouveauPrix={items[6].nouveauPrix}
            />
            <Item
              nom={items[1].nom}
              url={items[1].url}
              prix={items[1].prix}
              pastille={items[1].pastille}
              nouveauPrix={items[1].nouveauPrix}
            />
            <Item
              nom={items[2].nom}
              url={items[2].url}
              prix={items[2].prix}
              pastille={items[2].pastille}
              nouveauPrix={items[2].nouveauPrix}
            />
            <Item
              nom={items[3].nom}
              url={items[3].url}
              prix={items[3].prix}
              pastille={items[3].pastille}
              nouveauPrix={items[3].nouveauPrix}
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
