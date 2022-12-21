import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Swal from "sweetalert2";

const UpdateModal = ({ selectedReview, setMyReviews, myReviews }) => {
  const { serviceTitle, _id, reviewerName, reviewMessage, rating } =
    selectedReview;
  const [updatedRating, setUpdatedRating] = useState(rating);
  const handleUpdateReview = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const message = from.reviewMessage.value;

    const updateReview = {
      reviewerName: name,
      rating: updatedRating,
      reviewMessage: message,
    };
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updatedReviews = [...myReviews];
          const index = myReviews.map((review) => review._id).indexOf(_id);
          updatedReviews.splice(index, 1, updateReview);
          setMyReviews(updatedReviews);
        }
        Swal.fire({
          icon: "success",
          title: `review updated successfully`,
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box h-full">
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Update Review</h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={handleUpdateReview}
                    className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                  >
                    <label className="block text-start text-black text-sm font-bold mb-1">
                      Full Name
                    </label>
                    <input
                      defaultValue={reviewerName}
                      name="name"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />

                    <label className="block text-start text-black text-sm font-bold mb-1">
                      Service Name
                    </label>
                    <input
                      name="reviewTitle"
                      readOnly
                      disabled
                      defaultValue={serviceTitle}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-start text-black text-sm font-bold mb-1">
                      Your Review
                    </label>
                    <input
                      name="reviewMessage"
                      defaultValue={reviewMessage}
                      className="textarea textarea-bordered shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      placeholder="Bio"
                    ></input>
                    <label className="block text-start text-black text-sm font-bold mb-1">
                      Rating
                    </label>
                    <Rating
                      initialRating={updatedRating}
                      emptySymbol={<FaStar className="" />}
                      fullSymbol={<FaStar style={{ color: "goldenrod" }} />}
                      fractions={2}
                      onChange={(rate) => setUpdatedRating(rate)}
                    ></Rating>

                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <div>
                        <label
                          htmlFor="my-modal-6"
                          className="text-red-500   background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        >
                          close
                        </label>
                      </div>

                      <div className="modal-action">
                        <label
                          htmlFor="my-modal-6"
                          className="text-white btn bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        >
                          <button type="submit"> Submit</button>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
