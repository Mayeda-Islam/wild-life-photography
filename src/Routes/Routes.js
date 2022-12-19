import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Services from "../Pages/Services";
import Signup from "../Pages/Signup";
import ServiceDetails from "./ServiceDetails";

export const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
      {path:'/',element:<Home></Home>},
      {path:'/login',element:<Login></Login>},
      {path:"/signup",element:<Signup></Signup>},
      {path:'/services',element:<Services></Services>,
    loader:async()=>{
        return fetch(`http://localhost:5000/services`)
    }
    },
    {
        path:'/services/:id',element:<ServiceDetails></ServiceDetails>,
        loader:async({params})=>{
            return fetch (`http://localhost:5000/services/${params.id}`)
        }
    }
    ]}
])