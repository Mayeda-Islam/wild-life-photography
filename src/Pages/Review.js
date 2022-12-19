import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = ({review}) => {
    
    const {customer,
        rating,
        email,
        message,}=review
        console.log(review)
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{customer}</h1>
      <p className="mb-5">{email}</p>
      <p className="mb-5">{rating}</p>
      <p className="mb-5">{message}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Review;