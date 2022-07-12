import React from 'react'
import Item from './Item'
import './Product.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'

export default function Product() {
    return (
        <section className="Product">
            <Navigation />
            <h1>PRODUCT
                <span> New Arrival Women Collection</span>
            </h1>
            <div className="groupeProduct">
                <nav className='productNav'>
                    <div className="navTop">
                        <h3>Categories</h3>
                        <span>All</span>
                        <span>Women</span>
                        <span>Kids</span>
                        <span>Men</span>
                        <span>Accessories</span>
                    </div>
                    <div className="navBottom">
                        <h3>Filter</h3>
                        <div className="navInput">
                            <input type="text" />
                            <i></i>
                        </div>

                    </div>
                </nav>
                <div className="productItemsContainer">
                    <p className="nbreArticles">Nombre de product search: 15 all</p>
                    <div className="itemsGrid">
                        <Item
                            url='./img/item-2.jpg'
                            pastille="New"
                            nom="Herschel supply co 25l"
                            prix="$75.00"
                        />
                        <Item
                            url='./img/item-3.jpg'
                            pastille=""
                            nom="Denim jacket blue"
                            prix="$92.50"
                        />
                        <Item
                            url='./img/item-4.jpg'
                            pastille=""
                            nom="Coach slim easton black"
                            prix="$165.90"
                        />
                        <Item
                            url='./img/item-5.jpg'
                            pastille="New"
                            nom="Herschel supply co 25l"
                            prix="$75.00"
                        />
                        <Item
                            url='./img/item-6.jpg'
                            pastille=""
                            nom="Denim jacket blue"
                            prix="$92.50"
                            nouveauPrix=""
                        />
                        <Item
                            url='./img/item-7.jpg'
                            pastille="New"
                            nom="Herschel supply co 25l"
                            prix="$75.00"
                            nouveauPrix=""
                        />
                        <Item
                            url='./img/item-8.jpg'
                            pastille="New"
                            nom="Herschel supply co 25l"
                            prix="$75.00"
                            nouveauPrix=""
                        />
                        <Item
                            url='./img/item-4.jpg'
                            pastille=""
                            nom="Herschel supply co 25l"
                            prix="$75.00"
                            nouveauPrix=""
                        />
                        <Item
                            url='./img/item-1.jpg'
                            pastille="Sale"
                            nom="Frayed denim shorts"
                            prix="$102.50"
                            nouveauPrix=""
                        />
                    </div>
                </div>

            </div>
            <Footer />
        </section>
    )
}
