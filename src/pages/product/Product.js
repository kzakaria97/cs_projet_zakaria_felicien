import React, { useState } from "react";
import Item from "./Item";
import "./product.css";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Product() {
  const [toggleState, setToggleState] = useState([
    {
      url: "./public/img/item-2.jpg",
      pastille: "New",
      nom: "Herschel supply co 25l",
      prix: "$75.00",
      nouveauPrix: "",
      categorie: "men",
    },
    {
      url: "./img/item-3.jpg",
      pastille: "",
      nom: "Denim jacket blue",
      prix: "$92.50",
      nouveauPrix: "",
      categorie: "women",
    },
    {
      url: "./img/item-4.jpg",
      pastille: "",
      nom: "Coach slim easton black",
      prix: "$165.90",
      nouveauPrix: "",
      categorie: "women",
    },
    {
      url: "./img/item-5.jpg",
      pastille: "New",
      nom: "Herschel supply co 25l",
      prix: "$75.00",
      nouveauPrix: "",
      categorie: "kids",
    },
    {
      url: "./img/item-6.jpg",
      pastille: "",
      nom: "Denim jacket blue",
      prix: "$92.50",
      nouveauPrix: "",
      categorie: "accsessoire",
    },
    {
      url: "./img/item-8.jpg",
      pastille: "New",
      nom: "Herschel supply co 25l",
      prix: "$75.00",
      nouveauPrix: "",
      categorie: "women",
    },
    {
      url: "./img/item-1.jpg",
      pastille: "Sale",
      nom: "Frayed denim shorts",
      prix: "$102.50",
      nouveauPrix: "",
      categorie: "men",
    },
  ]);

  return (
    <section className="Product">
      <Navigation />
      <h1>
        PRODUCT
        <span> New Arrival Women Collection</span>
      </h1>

      <Tabs className="groupeProduct" value={toggleState.categorie}>
        <TabList>
          <h3>Categories</h3>
          <Tab>All</Tab>
          <br />
          <Tab value="women">Women</Tab>
          <br />
          <Tab value="kids">Kids</Tab>
          <br />
          <Tab value="men">Men</Tab>
          <br />
          <Tab value="accsessoires">Accessoires</Tab>
          <div className="navBottom">
            <h3>Filter</h3>
            <div className="navInput">
              <input type="text" />
              <i></i>
            </div>
          </div>
        </TabList>
        <TabPanel value="all">
          <div className="productItemsContainer">
            <p className="nbreArticles">Nombre de product search: 15 all</p>
            <div className="itemsGrid">
              <Item
                url={toggleState[1].url}
                nom={toggleState[1].nom}
                prix={toggleState[1].prix}
                nouveauPrix={toggleState[1].nouveauPrix}
                pastille={toggleState[1].pastille}
                categorie={toggleState[1].categorie}
              />
              <Item
                url={toggleState[6].url}
                nom={toggleState[6].nom}
                prix={toggleState[6].prix}
                nouveauPrix={toggleState[6].nouveauPrix}
                pastille={toggleState[6].pastille}
                categorie={toggleState[6].categorie}
              />
              <Item
                url={toggleState[2].url}
                nom={toggleState[2].nom}
                prix={toggleState[2].prix}
                nouveauPrix={toggleState[2].nouveauPrix}
                pastille={toggleState[2].pastille}
                categorie={toggleState[2].categorie}
              />
              <Item
                url={toggleState[3].url}
                nom={toggleState[3].nom}
                prix={toggleState[3].prix}
                nouveauPrix={toggleState[3].nouveauPrix}
                pastille={toggleState[3].pastille}
                categorie={toggleState[3].categorie}
              />
              <Item
                url={toggleState[4].url}
                nom={toggleState[4].nom}
                prix={toggleState[4].prix}
                nouveauPrix={toggleState[4].nouveauPrix}
                pastille={toggleState[4].pastille}
                categorie={toggleState[4].categorie}
              />
              <Item
                url={toggleState[5].url}
                nom={toggleState[5].nom}
                prix={toggleState[5].prix}
                nouveauPrix={toggleState[5].nouveauPrix}
                pastille={toggleState[5].pastille}
                categorie={toggleState[5].categorie}
              />
              <Item
                url={toggleState[6].url}
                nom={toggleState[6].nom}
                prix={toggleState[6].prix}
                nouveauPrix={toggleState[6].nouveauPrix}
                pastille={toggleState[6].pastille}
                categorie={toggleState[6].categorie}
              />
              <Item
                url={toggleState[0].url}
                nom={toggleState[0].nom}
                prix={toggleState[0].prix}
                nouveauPrix={toggleState[0].nouveauPrix}
                pastille={toggleState[0].pastille}
                categorie={toggleState[0].categorie}
              />
              <Item
                url={toggleState[4].url}
                nom={toggleState[4].nom}
                prix={toggleState[4].prix}
                nouveauPrix={toggleState[4].nouveauPrix}
                pastille={toggleState[4].pastille}
                categorie={toggleState[4].categorie}
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="women">
          <Item
            url={toggleState[1].url}
            nom={toggleState[1].nom}
            prix={toggleState[1].prix}
            nouveauPrix={toggleState[1].nouveauPrix}
            pastille={toggleState[1].pastille}
            categorie={toggleState[1].categorie}
          />
          <Item
            url={toggleState[2].url}
            nom={toggleState[2].nom}
            prix={toggleState[2].prix}
            nouveauPrix={toggleState[2].nouveauPrix}
            pastille={toggleState[2].pastille}
            categorie={toggleState[2].categorie}
          />
          <Item
            url={toggleState[5].url}
            nom={toggleState[5].nom}
            prix={toggleState[5].prix}
            nouveauPrix={toggleState[5].nouveauPrix}
            pastille={toggleState[5].pastille}
            categorie={toggleState[5].categorie}
          />
        </TabPanel>
        <TabPanel value="kids">
          <Item
            url={toggleState[3].url}
            nom={toggleState[3].nom}
            prix={toggleState[3].prix}
            nouveauPrix={toggleState[3].nouveauPrix}
            pastille={toggleState[3].pastille}
            categorie={toggleState[3].categorie}
          />
        </TabPanel>
        <TabPanel value="men">
          <Item
            url={toggleState[0].url}
            nom={toggleState[0].nom}
            prix={toggleState[0].prix}
            nouveauPrix={toggleState[0].nouveauPrix}
            pastille={toggleState[0].pastille}
            categorie={toggleState[0].categorie}
          />
          <Item
            url={toggleState[6].url}
            nom={toggleState[6].nom}
            prix={toggleState[6].prix}
            nouveauPrix={toggleState[6].nouveauPrix}
            pastille={toggleState[6].pastille}
            categorie={toggleState[6].categorie}
          />
        </TabPanel>
        <TabPanel value="accsessoires">
          <Item
            url={toggleState[4].url}
            nom={toggleState[4].nom}
            prix={toggleState[4].prix}
            nouveauPrix={toggleState[4].nouveauPrix}
            pastille={toggleState[4].pastille}
            categorie={toggleState[4].categorie}
          />
        </TabPanel>
      </Tabs>

      <Footer />
    </section>
  );
}
