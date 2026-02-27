import '../styles/Product.css'
import ItemProduct from './ItemProduct'
import Item1 from '../assets/images/item1.jpg'
import Item2 from '../assets/images/item2.jpg'
import Item3 from '../assets/images/item3.jpg'
import Item4 from '../assets/images/item4.jpg'
import Item5 from '../assets/images/item5.jpg'
import Item6 from '../assets/images/item6.jpg'

const Product = () => {
    return (
        <div id="product-container">
            <div id='product-title-container'>
                <p id="product-subtitle">OUR COLLECTION</p> <br />
                <p id="product-title">Featured Products</p> <br />
                <p id="product-subsubtitle">Handpicked gear for the discerning professional</p> <br />
            </div>
            
            <div id='product-item-container'>
                <ItemProduct
                    id="product-1"
                    name="Obsidian Wireless Headphones"
                    image={Item1}
                    price={129.99}
                    tag="Best Seller"
                />

                <ItemProduct
                    id="product-2"
                    name="Phantom Mechanical Keyboard"
                    image={Item2}
                    price={199.99}
                    tag="New"
                />

                <ItemProduct
                    id="product-3"
                    name="Eclipse Smart Watch Expanded"
                    image={Item3}
                    price={349.99}
                    tag="Premium"
                />

                <ItemProduct
                    id="product-4"
                    name="Nova Desk Lamp"
                    image={Item4}
                    price={89.99}
                    tag="Popular"
                />

                <ItemProduct
                    id="product-5"
                    name="Auro Webcam 4K"
                    image={Item5}
                    price={159.99}
                    tag="Top Pick"
                />

                <ItemProduct
                    id="product-6"
                    name="Zen Portable Speaker"
                    image={Item6}
                    price={74.99}
                    tag="Sale"
                />
            </div>
        </div>
    )
}

export default Product