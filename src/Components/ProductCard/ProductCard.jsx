import React from "react";
import styles from './ProducutCard.module.css';
import AddToCart from "../AddCart";
import RedexAddtoCart from "../ReduxAddtoCart";
function ProcuctCard({ prodeuct }){
    return (
        <div className={styles.card}>
           <h3> {prodeuct.title}</h3>
              <h3>Rs.   {prodeuct.Price}/-</h3>
            <button>Buy Now</button>
            <RedexAddtoCart prodeuct={prodeuct} />
        </div>
    );
}
export default ProcuctCard;