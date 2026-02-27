import { useAuth } from '../hooks/useAuth';
import { useToast } from '../hooks/useToast';
import "../styles/ItemProduct.css"

const ItemProduct = ({ id, image, name, price, tag }) => {
    const { addItem } = useAuth();
    const { showToast } = useToast();

    const formattedPrice = typeof price === "number"
        ? `$${price.toFixed(2)}`
        : price.includes("$") ? price : `$${price}`;

    return (
        <div id='product-item-container'>
            <div id="product-item-image">
                <img src={image} alt={name} />
            </div>

            {tag && <div id='product-item-tag'>{tag}</div>}

            <div id="product-item-title">
                <p>{name}</p>
                <p id='price-title'>{formattedPrice}</p>
            </div>

            <button id='item-button' onClick={() => {
                    addItem(id, image, name, price)
                    showToast("success", "Item added to cart successfully!");
                }
            }>
                <span>+</span>
                Add to Cart
            </button>
        </div>
    );
};

export default ItemProduct