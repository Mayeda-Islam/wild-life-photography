import React, { useContext, useEffect, useState } from "react";
import { MdDeleteForever, MdRefresh } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UpdateModal from "../Utilities/UpdateModal";
import ReviewCard from "./ReviewCard";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);
  const handleReviewDelete = (reviewId) => {
    const proceed = window.confirm("Are your sure to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${reviewId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = myReviews.filter(
              (reviews) => reviews._id !== reviewId
            );
            setMyReviews(remaining);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="container mx-auto " style={{ height: "100vh" }}>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Service</th>
            <th>Review</th>
            <th>Rating</th>
            <th>upgrade</th>
          </tr>
        </thead>
        <tbody>
          {myReviews.map((review) => (
            <tr>
              <th>
                <label>
                  <MdDeleteForever
                    onClick={() => handleReviewDelete(review._id)}
                    className="text-2xl "
                  ></MdDeleteForever>
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={review.reviewerImg}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{review.reviewerName}</div>
                    <div className="text-sm opacity-50">{review.reviewBy}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{review.serviceTitle}</div>
                <div className="badge badge-ghost badge-sm">{review._id}</div>
              </td>
              <td>
                <div>{review.reviewMessage}</div>
                <div className="badge badge-ghost badge-sm">
                  {new Date(review.insertDate).toLocaleString()}
                </div>
              </td>
              <td>
                <Rating
                  initialRating={review.rating}
                  emptySymbol={<FaStar className="" />}
                  fullSymbol={<FaStar style={{ color: "goldenrod" }} />}
                  fractions={2}
                  readonly
                ></Rating>
              </td>
              <td>
                <label htmlFor="my-modal-6">
                  <AiTwotoneEdit
                    onClick={() => setSelectedReview(review)}
                    className="text-2xl "
                  ></AiTwotoneEdit>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UpdateModal selectedReview={selectedReview}></UpdateModal>
    </div>
  );
};

export default MyReviews;
