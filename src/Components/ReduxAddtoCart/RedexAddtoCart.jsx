import React, {useContext, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import store from "../../store";

function AddToCart({ product }){
   // const dispatch = useDispatch();
    const quantity = useSelector(state => {
        console.log("Printing Selector :",state)
        let res = state.items[product.id]?.quantity 
        console.log("Printing res", res)
       return res 
    })
    function increase() {
     ///  store.dispatch({type:'ADD_TO_CART', payload:product })
       console.log('action pay loard', product)
    }
    function decrese(){
       /// store.dispatch({type:'REMOVE_FORM_CART', payload:product })
    }
    if (quantity===0) {
        return (<button onClick={increase}>Add to Cart</button>
        );
    }if (quantity!==0) {
        return (
            <div>
                <button onClick={decrese}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        );
    }
}
export default AddToCart;