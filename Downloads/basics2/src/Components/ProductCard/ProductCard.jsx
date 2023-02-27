import React from "react";
import styles from './ProducutCard.module.css';
function ProcuctCard(props){
    return (
        <div class ={styles.card}>
           <h3> {props.title}</h3>
           <h5> {props.price}</h5>
            <button>Buy Now</button>
            <button >Add to Cart</button>
        </div>
    );
}
export default ProcuctCard;