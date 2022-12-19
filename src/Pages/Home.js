import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import img1 from "../assests/carousel/1.png";
import img2 from "../assests/carousel/2.png";
import img3 from "../assests/carousel/3.png";
import DisplayReview from "./DisplayReview";
import ServiceCard from "./ServiceCard";
const Home = () => {
    const reviews=useLoaderData()
    const [services,setServices]=useState([])
    useEffect(()=>{
     fetch(`http://localhost:5000/`)
     .then(res=>res.json())
     .then(data=>setServices(data))
    },[])
  return (

   

    <div className="container mx-auto">
      {/* carousel */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div>
      <div className="grid grid-cols-2">
      {
        services.map(service=><ServiceCard service={service} key={service._id}></ServiceCard>)
      } <Link to={'/services'}><button > see more</button></Link>
      </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {
            reviews.map(review=><DisplayReview review={review} key={review._id}></DisplayReview>)
        }
      </div>
    </div>
  );
};

export default Home;
