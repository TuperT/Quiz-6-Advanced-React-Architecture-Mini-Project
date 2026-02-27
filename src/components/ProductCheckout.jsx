import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import '../styles/ProductCheckout.css'

const ProductCheckout = () => {
    const navigate = useNavigate()
    const { totalItems, cart, totalPrice, updateQty, removeItem } = useAuth()

    function handleCheckout() {
        navigate("/summary")

    }

    return (
        <>  
            <div>
                <div id="checkout-title">
                    <p id="checkout-title1">CHECKOUT</p>
                    <p id="checkout-title2">Your Cart</p>
                    <p id="checkout-title3">{totalItems} Ready to be purchased</p>
                </div>

                {cart.length > 0 ? (
                    <div id="cart">
                        <div id="cart-container-item">
                            {cart.map(item => (
                                <div id='cart-item' key={item.id}>
                                    <div id='cart-image-container'>
                                        <img src={item.image} id='cart-image-item' />
                                    </div>
                                    <div>
                                        <p id='cart-item-name'>{item.name}</p>
                                        <p id='cart-item-qty'>Qty: {item.qty} - ${item.price} / item</p>
                                    </div>
                                    <p id='cart-item-price'>${item.price * item.qty}</p>
                                    <button id='cart-minus' onClick={() => updateQty(item.id, "minus")}>-</button>
                                    <button id='cart-plus' onClick={() => updateQty(item.id, "plus")}>+</button>
                                    <button id='cart-delete' onClick={() => removeItem(item.id)}>X</button>
                                </div>
                            ))}
                        </div>

                        <div id="order-sumarry">
                            <p id='sumarry-title'>Order Sumarry</p>
                            <hr />

                            {cart.map(item => (
                                <div id='sumarry-product-container' key={`sum-${item.id}`}>
                                    <p id='product-sumarry'>{item.name}</p>
                                    <p id='product-sumarry-price'>${item.price * item.qty}</p>
                                </div>
                            ))}

                            <div id='shipping'>
                                <p id='sumarry-shipping'>shipping</p>
                                <p id='sumarry-shipping-fee'>free</p>
                            </div>

                            <hr />

                            <div id="sumarry-total">
                                <p id='total'>Total</p>
                                <p id='price-total'>${totalPrice}</p>
                            </div>

                            <button id='sumarry-order' onClick={handleCheckout}>
                                Place Order →
                            </button>
                        </div>
                    </div>
                ) : (
                    <div id='cart-empty'> 
                        <div>🛒</div>
                        <p>Your cart is empty</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductCheckout