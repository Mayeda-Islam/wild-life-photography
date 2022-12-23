import React, { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AddReviews from "./AddReviews";
import Reviews from "./Reviews";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { Owner, img, rating, title, description, price, _id,location } = serviceDetails;

  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    fetch(`https://wild-life-photography-server-mu.vercel.app/reviews?serviceId=${_id}&sortBy=descending`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id, refetch]);
  const handlePlaceService = (e) => {
    e.preventDefault();
    const email = user?.email || "unregistered";
    console.log("clicked");
    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: user?.email,
      email,
      img,
      rating,
      description,
    };
    console.log(order);
    fetch(`https://wild-life-photography-server-mu.vercel.app/service/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // form.reset()

          alert("Placer order successfully");
        }
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container mx-auto">
      <div className="mt-20">
        <form
          onSubmit={handlePlaceService}
          className="card lg:card-side lg:w-3/4  mx-auto bg-indigo-300 shadow-xl"
        >
          <figure className="px-10 pt-10 mb-12 w-1/2">
            <PhotoProvider
              speed={() => 800}
              easing={(type) =>
                type === 2
                  ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                  : "cubic-bezier(0.34, 1.56, 0.64, 1)"
              }
            >
              <PhotoView src={img}>
                <img
                  src={img}
                  style={{ objectFit: "cover" }}
                  alt="bird"
                  className="rounded-xl"
                />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body items-start my-12 w-1/2 text-white">
            <div className="card-title text-3xl">{title}</div>
            <div className="text-2xl font-medium">Captured By: {Owner}</div>
            <div className="text-2xl font-medium">Location : {location} </div>

            <div className="text-cl font-medium">{description}</div>
            <div className="text-2xl font-medium">Price :{price}$</div>

            <div className="card-actions ml-60">
              <Link to={`/checkout/${_id}`}>
                <button className="btn btn-primary ">Buy Now</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div>
        {user ? (
          <AddReviews
            title={title}
            setRefetch={setRefetch}
            // setReviews={setReviews}
            serviceId={_id}
          ></AddReviews>
        ) : (
          < div className="my-20 text-xl font-medium w-3/4 mx-auto lg:w-full ">For adding your review you have to <Link className="font-extrabold text-2xl text-indigo-500" to={"/login"}>
          log in
        </Link> first</div>
          
        )}
      </div>
      <div className="container mx-auto">
        <div className="my-20">
          <h1 className="font-extrabold text-2xl mb-4 ">All Reviews </h1>
          <hr className="w-1/2 mx-auto" />
        </div>

        <Reviews allReviews={reviews}></Reviews>
      </div>
    </div>
  );
};

export default ServiceDetails;
