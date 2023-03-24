import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import OrderList from "./OrderList";

const Service = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    fetch(
      `https://wild-life-photography-server-mu.vercel.app/orders?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("photo-Token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
    console.log(localStorage.getItem("photo-Token"), "service page");
  }, [user?.email]);
  const handleServiceDelete = (id) => {
    console.log("inside id", id);
    fetch(`https://wild-life-photography-server-mu.vercel.app/orders/${id}`, {
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
  const handleUpdate = (id) => {
    fetch(`https://wild-life-photography-server-mu.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((order) => order._id !== id);
          const approving = orders.find((order) => order._id === id);
          approving.status = "Approved";
          const newOrder = [...remaining, approving];
          setOrders(newOrder);
        }
      });
  };
  return (
    <div style={{ height: "100vh" }}>
      <div className="mt-12 container mx-auto">
        {orders?.length === 0 ? (
          <h1 className="text-2xl font-bold">
            You have nothing in service.Please, add some service.
          </h1>
        ) : (
          <div className="overflow-x-auto ">
            <table className="table w-full">
              <thead>
                <tr className="font-bold text-xl">
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Service name</th>
                  <th>status</th>
                </tr>
              </thead>

              {orders?.map((order) => (
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
    </div>
  );
};

export default Service;
