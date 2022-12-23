import { async } from "@firebase/util";
import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs";
import CheckOut from "../Pages/CheckOut";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Reviews from "../Pages/AddReviews";
import Service from "../Pages/Service";
import Services from "../Pages/Services";
import Signup from "../Pages/Signup";
import ServiceDetails from "../Pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import MyReviews from "../Pages/MyReviews";
import NotFound from "../Pages/NotFound";
import ResetPassword from "../Utilities/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/reviews`),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      {
        path: "/services",
        element: <Services></Services>,
        loader: async () => {
          return fetch(`http://localhost:5000/services`);
        },
      },
      { path: "/blogs", element: <Blogs></Blogs> },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/services/${params.id}`);
        },
      },
      {
        path: "/myreviews",
        element: <MyReviews></MyReviews>,
      },

      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>  
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/services/${params.id}`);
        },
      },
      {
        path: "/service",
        element: (
          <PrivateRoute>
            <Service></Service>
          </PrivateRoute>
        ),
      },
      {
        path:'/resetPassword',element:<ResetPassword></ResetPassword>
      },
      {
        path:"*",element:<NotFound></NotFound>
      }
    ],
  },
]);
