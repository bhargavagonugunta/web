import { type } from "@testing-library/user-event/dist/type";
import React, {useContext, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import store, { ADD_TO_CART, REMOVE_FORM_CART } from "../../store";

function AddToCart({ prodeuct }){
  //  const dispatch = useDispatch();
    const quantity = useSelector(state => {
        console.log('AddtoCart is called use Selector', state.items[prodeuct.id])
       return state.items[prodeuct.id]?.quantity || 0
    })
    function increase() {
      store.dispatch({type: ADD_TO_CART, payload: prodeuct})
    }
    function decrese(){
       store.dispatch({type: REMOVE_FORM_CART, payload: prodeuct})
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