import React, { useEffect, useState } from "react";
import {  MdDeleteForever, MdRefresh } from "react-icons/md";
const ReviewCard = ({ review }) => {
  const {
    reviewerName,
    reviewBy,
    serviceTitle,
    reviewerImg,
    rating,
    reviewMessage,
    serviceId
  } = review;
  const handleReviewDelete=()=>{
    const proceed=window.confirm('Are your sure to delete?')
    if(proceed){
      fetch(`http://localhost:5000/reviews/${serviceId}`,{
        method:"DELETE"
      })
      .then(res=>res.json())
      // .then(data=>{
      //   if(data.deletedCount>0){
      //     const remaining=
      //   }

      // })
      .catch(error=>console.log(error))
    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body relative pl-12">
        <div className="flex items-center my-4">
          <img className=" rounded-full h-12 w-12" src={reviewerImg} alt="" />
          <div className="text-start  mx-4">
            <strong className="text-lg text-slate-500">{reviewerName}</strong>
            <h4 className="font-medium text-slate-400">{reviewBy}</h4>
          </div>
          <div className="flex absolute top-14 right-4">
          <MdRefresh className="text-2xl "></MdRefresh>
          <MdDeleteForever onClick={handleReviewDelete}  className="text-2xl "></MdDeleteForever>
          
          </div>
        </div>

        <div className="text-start">
          <h3 className="font-semibold">Service : {serviceTitle}</h3>
          <h3 className="font-semibold">Rating : {rating}</h3>
          <h3 className="font-semibold">Review : {reviewMessage}</h3>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
