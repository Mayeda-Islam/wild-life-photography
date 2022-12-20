import React, { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AddReviews from "../Pages/AddReviews";
import Reviews from "../Pages/Reviews";

const ServiceDetails = () => {
  const serviceDetails= useLoaderData();
  const { Owner, img, rating, title, description,price,_id } = serviceDetails;
   


  const {user}=useContext(AuthContext)
  const [reviews,setReviews]=useState([])
const[refetch,setRefetch]=useState(false)

  useEffect(()=>{
    fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
    .then(res=>res.json())
    .then(data=>setReviews(data))
   },[_id,refetch])
  const handlePlaceService=e=>{
    e.preventDefault();
    const email = user?.email || "unregistered";
    console.log('clicked')
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
    console.log(order)
    fetch(`http://localhost:5000/service/${_id}`,{
      method:'POST',
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        // form.reset()
        
        alert('Placer order successfully')
      }
      console.log(data)
    })
    .catch(error=>console.log(error))
  }
  return (
    <div className="container ">
      <form onSubmit={handlePlaceService} className="card mx-auto w-96 bg-base-100 shadow-xl">
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
          <p>{price}</p>
          <p>{description}</p>
          <div className="card-actions">
            <Link to={`/checkout/${_id }`}>
            <button  className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </form>
      <div >
        {
          user ?<AddReviews title={title}
          setRefetch={setRefetch}
          // setReviews={setReviews}
           serviceId={_id}></AddReviews >:<Link to={'/login'}>log in</Link>
        }
        
      </div>
      <div>
        <Reviews allReviews={reviews} ></Reviews>
      </div>
    </div>
  );
};

export default ServiceDetails;
