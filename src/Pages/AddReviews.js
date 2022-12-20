import React, { useContext, useState } from "react";
import Rating from "react-rating";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const AddReviews = ({ serviceId, setRefetch ,title}) => {
  const review = useLoaderData();
  console.log(title);
  const [serviceReview, setServiceReview] = useState(null);

  const [rating, setRating] = useState(null);
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email || "unregistered";
    const message = form.message.value;
    const review = {
      reviewerName: name,
      rating: rating,
      reviewBy: email,
      reviewerImg: user?.photoURL,
      reviewMessage: message,
      serviceId: serviceId,
      serviceTitle:title
    };
    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          console.log(data);
          // setReviews((preReviews) => [
          //   ...preReviews,
          //   { ...review, _id: data.insertedId },
          // ]);
          setRefetch(prevRefetch=>!prevRefetch)
          Swal.fire({
            icon: "success",
            title: `review added successfully`,
            showConfirmButton: false,
            timer: 2500,
          });
        }
        // setRe
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container mx-auto">
      <div className="rounded-lg shadow px-4 lg:px-10 py-6 w-10/12 lg:w-2/3 mx-auto my-10">
        <h3 className="mb-4 text-3xl text-primary text-center">
          Add Review Form
        </h3>

        <form onSubmit={handleReview}>
          <div className="mb-4">
            <input
              disabled
              defaultValue={user?.displayName}
              className="input  input-bordered w-full"
            />
            <p className="text-red-400"></p>
          </div>
          <div className="mb-4">
            <input
              disabled
              type="text"
              name="email"
              placeholder="Your Email"
              readOnly
              defaultValue={user?.email}
              className="input input-ghost w-full input-bordered"
            />
          </div>

          <div className="mb-4">
            <input
              name="message"
              placeholder="Enter your review message"
              className="input  input-bordered w-full"
            />
            <p className="text-red-400"></p>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Give Rating</span>
            <Rating
              initialRating={rating}
              emptySymbol={<FaStar className="" />}
              fullSymbol={<FaStar style={{ color: "goldenrod" }} />}
              fractions={2}
              onChange={(rate) => setRating(rate)}
            ></Rating>
          </div>

          <div className="flex justify-center my-6">
            <input
              className="btn btn-active btn-primary w-full max-w-md uppercase text-white bg-gradient-to-r from-secondary to-primary"
              type="submit"
              value="Add Review"
            />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {/* {reviews.map((review) => (
          <DisplayReview review={review} key={review._id}></DisplayReview>
        ))} */}
      </div>
    </div>
  );
};

export default AddReviews;
