import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { Owner, img, rating, title, description } = serviceDetails;
  console.log(Owner);
  return (
    <div className="container ">
      <div className="card mx-auto w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
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
        <div className="card-body items-center">
          <h2 className="card-title">{title}</h2>
          <p>{Owner}</p>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
