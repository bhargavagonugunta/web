import React, {useContext, useMemo} from "react";
import styles from "../ProductCard/ProducutCard.module.css";
import AppContex from "../Context/AppContex";
import AddToCart from "../AddCart";


function Cart(){
    const {cart}= useContext(AppContex);
    const CartLisr =Object.values(cart);
function GetTotalPrice(){
    var totalCart=0
    CartLisr.forEach(CartItams =>{
        totalCart += (CartItams.quantity*CartItams.price)
    })
    return totalCart
}
const TotalValue = useMemo(GetTotalPrice,[cart])
    if (CartLisr.length===0) {
        return (
            <div className={styles.card}>No items in the Cart
            </div>
        );
    }else {
        return (
            <div className={styles.card}>
            <ol >
                {CartLisr.map((cartitem) =>(
                    <div className={styles.Cart2}>
                        <div>{cartitem.title}</div>
                        <div>Quantity:{cartitem.quantity}
                            <AddToCart prodeuct={cartitem} />
                        Price of the Product is  {cartitem.quantity} X {parseInt(cartitem.price)} is Rs.{parseInt(cartitem.quantity)*parseInt(cartitem.price)} </div>

                    </div>
                    )
                )}

            </ol>
            <div>
                <h1>
                    Cart value is Rs.{TotalValue}
            </h1>
            </div>
            </div>
        )
    }
}

export default Cart;