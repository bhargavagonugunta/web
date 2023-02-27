import {useEffect,useState} from "react";
import ProcuctCard from "../ProductCard/ProductCard";
const products =[
    {
        title :"Apple Iphone 14",
        Price :"2000$"
    },
    {
        title: "Samsung Gelaxy Note 20",
        Price: "4000$"
    },
    {
        title:"Apple Macbook",
        Price: "5000$"
    },
    {
        title: "Apple Magic Trackpad",
        Price: "599$"
    },
    {
        title: "Google Pixel xl",
        Price: "1000$"
    }
]
//const isLoading =true;
//const Product =[];
//console.log("Function is automatically called")
function GetProductList(callback){
    console.log("Api is callled")
    setTimeout(function (){
        callback(products);
    },3000);
}
function ProductList({props1}){
    const Lodabule =useState(true);
    const LoadingState = Lodabule[0];
    const LoadingState2 = Lodabule[1];
    const ProductState = useState([]);
    const ProductStatea=ProductState[0];
    const ProductStates=ProductState[1];
    useEffect(()=>{
        GetProductList( (res)=>{
           // console.log("Api gate way is starated",LoadingState,ProductStatea)
            LoadingState2(false);
            ProductStatea(res);
           // console.log("Api is ended",LoadingState,ProductStatea)
        });
    },[]);

    if(LoadingState){
       return <div>Loading...........</div>;
    }else {
            return(
                <div>
                    {
                        products.map(function (props){
                            return <ProcuctCard title={props.title} price={props.Price}/>
                        })
                    }
                </div>
            )
        }
}
    export default ProductList;