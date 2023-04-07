import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Component/Header';
import Login from './Component/login';
import { createBrowserRouter, Outlet, router, RouterProvider, children } from 'react-router-dom';
import Home from './Component/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Baserouter=()=>{
return(
  <>
  <React.StrictMode>
    
    <Outlet />
  </React.StrictMode>  
  </>
)
}
const rootrouter= createBrowserRouter([
  {
    path:"/",
    element:<Baserouter />,
    children:[{
      path:"/Home",
      element:<Login />,
    
    },
    {
      path:"/Home/logedin",
      element:<Home />
    },
    {
      path:"/Signup",
      element:<Login />
    }]
  }
] )
  root.render(<RouterProvider router={rootrouter}/>)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
