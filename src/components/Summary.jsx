import Lottie from "lottie-react";
import confirmAnimation from "../assets/svgs/Payment Successful.json"
import { useAuth } from "../hooks/useAuth";
import "../styles/Summary.css"

const Summary = () => {
    const { email, totalItems, totalPrice } = useAuth()

    return (
        <>  
            <div id="payment-container">
                <div>
                    <Lottie animationData={confirmAnimation} loop={false} id="confirm-animation" />
                </div>
                <p id="payment-confirm-text">Order <br />Confirmed<span>!</span></p>
                <div id="text-payment">
                    <p>Thank you {email?.email}</p>
                    <p>Your order has been placed succesfully</p>
                </div>
                <div id="label-payment">
                    <div id="label1">
                        <p id="label-item">ITEMS</p>
                        <p id="label-item-count">{totalItems}</p>
                    </div>
                    <div id="label2">
                        <p id="label-paid">TOTAL PAID</p>
                        <p id="label-paid-count">{totalPrice}</p>
                    </div>
                    <div id="label3">
                        <p id="label-status">STATUS</p>
                        <p id="label-status2">Processing</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary