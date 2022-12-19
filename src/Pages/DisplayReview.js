import React from "react";
import { useLoaderData } from "react-router-dom";
import Review from "./Review";

const DisplayReview = ({review}) => {
  
    const { customer, rating, email, message } = review;
    console.log(review);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">NAME:{customer}</h2>
          <h3>EMAIL:{email}</h3>
          <h3>Rating:{rating}</h3>
          <p>{message }</p>
          
        </div>
      </div>
    );
};

export default DisplayReview;
