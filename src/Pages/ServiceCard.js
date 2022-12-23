import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price, description, Owner, rating, _id } = service;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(``)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="card  lg:card-side bg-base-200 shadow-xl">
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-start">
        <h2 className="card-title text-slate-600 font-bold text-violet-400">
          {title}
        </h2>
        <div className="text-md font-medium">Captured by: <span className="text-xl text-violet-400">{Owner}</span></div>

        <span className="text-md font-medium -mt-2">{description}</span>
        <div className="text-md font-medium">
          Price :{price}
          <span className="text-lg font-bold text-violet-400">$</span>{" "}
        </div>
        <div className="card-actions  justify-end">
          <Link className="font-extrabold pt-4 text-violet-500" to={`/services/${_id}`}>
            {" "}
            Details...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
