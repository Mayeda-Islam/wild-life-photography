import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import img1 from "../assests/carousel/1.png";
import img2 from "../assests/carousel/2.png";
import img3 from "../assests/carousel/3.png";
import Reviews from "./Reviews";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Home = () => {
  const images = [img1, img2, img3];
  const reviews = useLoaderData();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      `https://wild-life-photography-server-mu.vercel.app/services?limit=${3}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="">
      {/* carousel */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="Images" className="w-full lg:h-[500px]" />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img3} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn btn-circle  bg-transparent border-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent border-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle  bg-transparent border-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent border-white"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent border-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent border-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div> */}
      <div className="mt-32 container mx-auto">
        <div className="w-80 lg:w-1/2 my-16 mx-auto">
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

        <div className="grid picContainer grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-12 py-12  rounded-lg">
          {services.map((service, index) => (
            <div className="item">
              <ServiceCard service={service} key={service._id}></ServiceCard>
            </div>
          ))}{" "}
        </div>

        <h1 className="font-extrabold text-2xl text-slate-600 my-16">
          {" "}
          <Link to={"/services"}>see more...</Link>
        </h1>
      </div>

      <div className="my-20 container mx-auto">
        <h1 className="text-3xl mb-4 font-extrabold text-slate-600">
          Reviews of Our Services
        </h1>
        <hr className="w-1/2   mb-20 mx-auto" />

        <Reviews allReviews={reviews}></Reviews>
      </div>
    </div>
  );
};

export default Home;
