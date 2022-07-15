import React, { useState } from "react";
import Item from "./Item";
import "./product.css";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




export default function Product() {

  // liste des items (state)
  const [items, setItems] = useState([
    {
      nom: "Herschel supply co 25l",
      url: "./img/cintres.jpg",
      prix: "$75.00",
      nouveauPrix: "",
      pastille: "New",
      id: "i1",
      categorie: "women",
    },
    {
      nom: "Denim jacket blue",
      url: "./img/chemise.jpg",
      prix: "$92.50",
      nouveauPrix: "Coach slim easton black",
      pastille: "",
      id: "i2",
      categorie: "men",
    },
    {
      nom: "Coach slim easton black",
      url: "./img/polo.jpg",
      prix: "$165.90",
      nouveauPrix: "",
      astille: "",
      id: "i3",
      categorie: "kids",
    },
    {
      url: "./img/lunette.jpg",
      pastille: "New",
      nom: "Supply co l",
      prix: "$75.00",
      nouveauPrix: "",
      id: "i4",
      categorie: "accessoire",
    },
    {
      url: "./img/sac.jpg",
      pastille: "",
      nom: "Herschel da thing",
      prix: "$75.00",
      nouveauPrix: "",
      id: "i5",
      categorie: "men",
    },
    {
      url: "./img/t-shirt.jpg",
      pastille: "",
      nom: "Row greey",
      prix: "$92.50",
      nouveauPrix: "",
      id: "i6",
      categorie: "women",
    },
    {
      nom: "Truc no 2l",
      url: "./img/chemise.jpg",
      prix: "$75.00",
      nouveauPrix: "",
      pastille: "New",
      id: "i7",
      categorie: "kids",
    },
  ]);

  // const [panier, setPanier] = useState([
  // ])
  // const [favori, setFavori] = useState([
  // ])

  // const handleFavoriClick = () => {
  //   setFavori(this)
  // }
  // const handlePanierClick = () => {
  //   setPanier(this)
  // }



  return (
    <section className="Product">
      <Navigation />
      <h1>
        PRODUCT
        <span> New Arrival Women Collection</span>
      </h1>
      <p className="nbreArticles">Nombre de product search: 15 all</p>

      <Tabs className="groupeProduct" value='all'>
        <TabList>
          <h3>Categories</h3>
          <Tab>All</Tab><br />
          <Tab value='women'>Women</Tab><br />
          <Tab value='kids'>Kids</Tab><br />
          <Tab value='men'>Men</Tab><br />
          <Tab value='accsessoires'>Accessoires</Tab>
          <div className="navBottom">
            <h3>Filter</h3>
            <div className="navInput">
              <input type="text" />
              <i></i>
            </div>
          </div>
        </TabList>
        <TabPanel value='all'>

          <div className="itemsGrid">
            <Item
              url={items[1].url}
              nom={items[1].nom}
              prix={items[1].prix}
              nouveauPrix={items[1].nouveauPrix}
              pastille={items[1].pastille}
              categorie={items[1].categorie}
            />
            <Item
              url={items[6].url}
              nom={items[6].nom}
              prix={items[6].prix}
              nouveauPrix={items[6].nouveauPrix}
              pastille={items[6].pastille}
              categorie={items[6].categorie}
            />
            <Item
              url={items[2].url}
              nom={items[2].nom}
              prix={items[2].prix}
              nouveauPrix={items[2].nouveauPrix}
              pastille={items[2].pastille}
              categorie={items[2].categorie}
            />
            <Item
              url={items[3].url}
              nom={items[3].nom}
              prix={items[3].prix}
              nouveauPrix={items[3].nouveauPrix}
              pastille={items[3].pastille}
              categorie={items[3].categorie}
            />
            <Item
              url={items[4].url}
              nom={items[4].nom}
              prix={items[4].prix}
              nouveauPrix={items[4].nouveauPrix}
              pastille={items[4].pastille}
              categorie={items[4].categorie}
            />
            <Item
              url={items[5].url}
              nom={items[5].nom}
              prix={items[5].prix}
              nouveauPrix={items[5].nouveauPrix}
              pastille={items[5].pastille}
              categorie={items[5].categorie}
            />
            <Item
              url={items[6].url}
              nom={items[6].nom}
              prix={items[6].prix}
              nouveauPrix={items[6].nouveauPrix}
              pastille={items[6].pastille}
              categorie={items[6].categorie}
            />
            <Item
              url={items[0].url}
              nom={items[0].nom}
              prix={items[0].prix}
              nouveauPrix={items[0].nouveauPrix}
              pastille={items[0].pastille}
              categorie={items[0].categorie}
            />
            <Item
              url={items[4].url}
              nom={items[4].nom}
              prix={items[4].prix}
              nouveauPrix={items[4].nouveauPrix}
              pastille={items[4].pastille}
              categorie={items[4].categorie}
            />

          </div>
        </TabPanel>
        <TabPanel value='women'>
          <div className="itemsGrid">
            <Item
              url={items[1].url}
              nom={items[1].nom}
              prix={items[1].prix}
              nouveauPrix={items[1].nouveauPrix}
              pastille={items[1].pastille}
              categorie={items[1].categorie}
            />
            <Item
              url={items[2].url}
              nom={items[2].nom}
              prix={items[2].prix}
              nouveauPrix={items[2].nouveauPrix}
              pastille={items[2].pastille}
              categorie={items[2].categorie}
            />
            <Item
              url={items[5].url}
              nom={items[5].nom}
              prix={items[5].prix}
              nouveauPrix={items[5].nouveauPrix}
              pastille={items[5].pastille}
              categorie={items[5].categorie}
            /></div>
        </TabPanel>
        <TabPanel value='kids'>
          <Item
            url={items[3].url}
            nom={items[3].nom}
            prix={items[3].prix}
            nouveauPrix={items[3].nouveauPrix}
            pastille={items[3].pastille}
            categorie={items[3].categorie}
          />
        </TabPanel>
        <TabPanel value='men'>
          <div className="itemsGrid">

            <Item
              url={items[0].url}
              nom={items[0].nom}
              prix={items[0].prix}
              nouveauPrix={items[0].nouveauPrix}
              pastille={items[0].pastille}
              categorie={items[0].categorie}
            />
            <Item
              url={items[6].url}
              nom={items[6].nom}
              prix={items[6].prix}
              nouveauPrix={items[6].nouveauPrix}
              pastille={items[6].pastille}
              categorie={items[6].categorie}
            />
          </div>
        </TabPanel>
        <TabPanel value='accsessoires'>
          <div className="itemsGrid">

            <Item
              url={items[4].url}
              nom={items[4].nom}
              prix={items[4].prix}
              nouveauPrix={items[4].nouveauPrix}
              pastille={items[4].pastille}
              categorie={items[4].categorie}
            />
          </div>
        </TabPanel>
      </Tabs>
    </section>)
}
