import React from "react";
import {createStore} from "redux";
import {omit} from "lodash";
import productCard from "./Components/ProductCard/ProductCard";
// prop drilling all childrann

function cartReducer(state={items:{}, isCartOpena:false},action){
    console.log("Action called", state,action.type)
    console.log("Reduser called", state.items)
    switch (action.type) {
        case 'SHOW_CART':{
            return {...state,isCartOpena: true}
        }
        case 'Hide_CART':{
            return {...state,isCartOpena: false}
        }
        case 'ADD_TO_CART':{
            const product = action.payload
            console.log('action pay loard', action.payload)
            console.log('action pay items', action.payload)
            const newState ={...state}
            if (state.items[product.id]){
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]:{
                            ...state.items[product.id],
                            quantity:state.items[product.id].quantity+1
                        }
                    }

                }

            }else {
                return {
                    ...state.items,
                    [product.id]:{
                        ...product,
                        quantity:1
                    }
            }
              }
        }
        case 'REMOVE_FORM_CART':{
            const product = action.payload
            const newState ={...state}
            if (newState.items[product.id].quantity<=1){
                return {
                    ...state,
                    items: omit(state.items,[product.id])
                }

            }else {
                return {
                ...state,
                    items: {
                    ...state.items[product.id],
                        quantity:state.items[product.id].quantity-1
                    }
                }
            }

        }
        default :
            return state;
    }
}
///cartReducer(,"@Redux/INITs.f.k.m.1.9")
const store = createStore(cartReducer);
export default store;