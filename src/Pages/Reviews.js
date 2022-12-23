import React, { useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ allReviews }) => {
  
  return (
    <div>
      {" "}
      
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10">
        {allReviews.map((review) => (
          <ReviewCard review={review} key={review._id}></ReviewCard>
        ))}
        
      </div>
    </div>
  );
};

export default Reviews;
