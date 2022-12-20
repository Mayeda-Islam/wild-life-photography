import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ReviewCard from "./ReviewCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);
  return (
    <div className="container mx-auto">
      <table className="table w-full">
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>Service</th>
          <th>Review</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {myReviews.map((review) => (
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
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
              {review.serviceTitle}
              <br />
              <span className="badge badge-ghost badge-sm">
                {review.serviceId}
              </span>
            </td>
            <td>{review.reviewMessage}</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default MyReviews;

