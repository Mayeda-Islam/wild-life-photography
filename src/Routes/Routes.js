import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Reviews from "../Pages/Reviews";
import Service from "../Pages/Service";
import Services from "../Pages/Services";
import Signup from "../Pages/Signup";
import ServiceDetails from "./ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
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
      {path:'reviews',element:<Reviews></Reviews>},
      {path:'service',element:<Service></Service>}
    ],
  },
]);
