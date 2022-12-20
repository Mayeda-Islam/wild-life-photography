import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const message = form.message.value;
    const phone = form.phone.value;
    console.log('clicked')
    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };
    fetch(`http://localhost:5000/orders`,{
      method:'POST',
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        form.reset()
        alert('Placer order successfully')
      }
    })
    .catch(error=>console.log(error))
  };
  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-5xl text-center">{title}</h2>
        <h4 className="text-center">Price:{price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="input input-ghost w-full input-bordered"
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            readOnly
            defaultValue={user?.email}
            className="input input-ghost w-full input-bordered"
          />
        </div>
        <textarea
        name="message"
        className="textarea textarea-bordered h-24 w-full"
        placeholder="Your message"
      ></textarea>
      <input className="btn" type="submit" value="Place your order" />
      </form>
      
    </div>
  );
};

export default CheckOut;