import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import OrderList from "./OrderList";

const Service = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [user?.email]);
  return (
    <div>
      <p>this is orders{orders.length} </p>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Service name</th>
            </tr>
          </thead>
          
            {orders.map((order) => (
              <OrderList order={order} key={order._id}></OrderList>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Service;
