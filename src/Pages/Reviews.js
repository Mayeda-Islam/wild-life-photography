import React, { useContext, useState } from 'react';
import Rating from 'react-rating';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaStar } from "react-icons/fa";

const Reviews = () => {
    const [rating, setRating] = useState(null);
    const {user}=useContext(AuthContext)
    return (
        <div className="rounded-lg shadow px-4 lg:px-10 py-6 w-10/12 lg:w-2/3 mx-auto my-10">
            <h3 className="mb-4 text-3xl text-primary text-center">
                Add Review Form
            </h3>

            <form >
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
    );
};

export default Reviews;