import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="container mx-auto">
      
      <div className="mt-20">
        <div className="w-80 lg:w-3/4 my-16 mx-auto">
          <h1 className="text-3xl font-extrabold text-slate-600">
            Services Section
          </h1>
          <p className="my-4 font-medium text-slate-600">
            Wildlife photography is a genre of photography concerned with
            documenting various forms of wildlife in their natural habitat. .
            You can see our services in this section.There we have My some of
            photography.Yo
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14 mb-14">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
