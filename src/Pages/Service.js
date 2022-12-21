import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import OrderList from "./OrderList";

const Service = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [user?.email]);
  const handleServiceDelete = (id) => {
    console.log("inside id", id);
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        }
      });
  };
  const handleUpdate=id=>{
    fetch(`http://localhost:5000/orders/${id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({status:'Approved'})
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount>0){
            const remaining=orders.filter(order=>order._id!==id)
            const approving=orders.find(order=>order._id===id)
            approving.status='Approved'
            const newOrder=[...remaining,approving]
            setOrders(newOrder)
        }
    })
  }
  return (
    <div style={{ height: "100vh" }}>
      {orders.length === 0 ? (
        <h1>You have nothing in service,Please add some service</h1>
      ) : (
        <div className="overflow-x-auto ">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Service name</th>
                <th>status</th>
            
              </tr>
            </thead>

            {orders.map((order) => (
              <OrderList
                order={order}
                handleUpdate={handleUpdate}
                handleServiceDelete={handleServiceDelete}
                key={order._id}
              ></OrderList>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Service;
