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
      <div className="grid gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myReviews.map((review) => (
          <ReviewCard review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
