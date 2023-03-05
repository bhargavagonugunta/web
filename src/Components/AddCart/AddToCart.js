import React, {useContext, useState} from "react";
import styles from './AddToCart.module.css';
import App from "../../App";
import AppContex from "../Context/AppContex";

function AddToCart({prodeuct}){
    const {increseQantity, DecrementQuantity, cart}= useContext(AppContex);
    const quantity = cart[prodeuct.id]?cart[prodeuct.id].quantity:0
    const CartPrice = cart[prodeuct.id]?cart[prodeuct.id].CartPrice:0
   // const [value, setValue]= useState(1)
    function increase() {
        increseQantity(prodeuct);
    }
    function decrese(){
        DecrementQuantity(prodeuct);
    }
    if (quantity===0) {
        return (<button onClick={increase}>Add to Cart</button>
        );
    }if (quantity!==0) {
        return (
            <div class={styles.AddCart}>
                <button onClick={decrese}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        );
    }

}
export default AddToCart;