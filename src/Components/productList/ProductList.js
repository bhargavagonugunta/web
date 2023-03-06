import React, {memo, useContext, useEffect, useState} from "react";
import ProcuctCard from "../ProductCard/ProductCard";

var StartCount=0;

function ProductList(){
  //  const {increseQantity,DecrementQuantity,cart}=useContext(AppContex);
    const [load,unload]=useState(true);
    const [products,setproducts] = useState([]);
    useEffect(()=>{
         fetch('http://localhost:3021/prodeucts')
        .then(responsr=>{
            return responsr.json();
          //  console.log("lococal hose db called" )
        }).then(reslt=>{
            unload(false)
             setproducts(reslt)
             }
         )
        .catch(error =>{console.log("Somthing Went Wrong......")
        });

    },[]);
    if(load){
       return <div>Loading...........</div>;
    }else {
            return(
                <div>
                    {
                        products.map(function (prodeuct){
                            return <ProcuctCard key={prodeuct.id}
                                                prodeuct={prodeuct}
                            />
                        })
                    }
                </div>
            )
        };
}
    export default ProductList;