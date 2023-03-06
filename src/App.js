
import './App.css';
import Count from "./Components/Count";
import ProcuctList from "./Components/productList/ProductList";
import Cart from "./Components/Cart/Cart";
import React, {useState} from "react";
import AppContex from "./Components/Context/AppContex";


function App() {
const [cart, setCart]=useState({})
  const [ShowCart,SetShowCart]=useState(false)
    console.log("hoehlrhlsf");

  function increseQantity(prodeuct){
    const Newcart =  {...cart}
   // var CartPrice=0
  if (!Newcart[prodeuct.id]) {
    Newcart[prodeuct.id]={
      id:prodeuct.id,
      title:prodeuct.title,
      price:prodeuct.Price,
      quantity:0,
      CartPrice:0
    }
  }
  Newcart[prodeuct.id].quantity +=1;
  
     // console.log("CartPrice afrer the increse ",Newcart[prodeuct.id].price )
     // console.log("CartPrice afrer the increse ",Newcart[prodeuct.id].title )
   //let kartValue =parseInt(Newcart[prodeuct.id].CartPrice);
     //  kartValue= parseInt(Newcart[prodeuct.id].CartPrice) + parseInt(prodeuct.price);
      //console.log("CartPrice afrer the increse ",kartValue )
       setCart(Newcart);
  }
  function DecrementQuantity(prodeuct){
    const Newcart =  {...cart}
   Newcart[prodeuct.id].quantity -=1;
   if (Newcart[prodeuct.id].quantity<=0){
    delete Newcart[prodeuct.id];

  }
    setCart(Newcart);
  }
  return (

      <div>
        <AppContex.Provider
            value ={{increseQantity, DecrementQuantity, cart}}>

          <Count startFrom={0}/>
          <button onClick={() =>SetShowCart(!ShowCart)}>{ShowCart ?"close Cart": "showCart"} </button>
          {ShowCart?<Cart />:null}
          <ProcuctList  />
        </AppContex.Provider>
      </div>
  );
}
export default App;
