import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const ServiceCard = ({ service }) => {
  const { title, img, price, description, Owner, rating, _id, location } =
    service;
  console.log(description);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(``)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="card   lg:card-side bg-base-200 shadow-xl"
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-start">
        <h2 className="card-title text-slate-600 font-bold text-violet-400">
          {title}
        </h2>
        <div className="text-md font-medium">
          Captured by: <span className="text-xl text-violet-400">{Owner}</span>
        </div>
        <span className="text-md font-medium -mt-2">Location: {location}</span>
        <span className="text-md font-medium">Price :{price}$</span>
        <span className="text-md font-medium -mt-2">
          Description:
          {description?.length === 50
            ? description
            : description.slice(0, 50) + "..."}
        </span>

        <div className="card-actions  justify-end">
          <Link
            className="font-extrabold  text-violet-500"
            to={`/services/${_id}`}
          >
            {" "}
            Details...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
