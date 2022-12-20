import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price, description, Owner, rating ,_id} = service;
  const [reviews,setReviews]=useState([])
  useEffect(()=>{
    fetch(``)
    .then(res=>res.json())
    .then(data=>setReviews(data))
  },[])

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure><img src={img} alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>Captured by: {Owner}</p>
       <p>Price :{price}</p>
        <p>{description}</p>
      <div className="card-actions justify-end">
      <Link to={`/services/${_id}`}> <button className="btn btn-primary">Details</button></Link>
      </div>
    </div>
  </div>
  );
};

export default ServiceCard;
