import React from "react";
import { TiDelete } from "react-icons/ti";
const OrderList = ({ order, handleServiceDelete, handleUpdate }) => {
  const { _id, serviceName, price, customer, phone, service, status } = order;

  return (
    <tbody>
      {/* <!-- row 1 --> */}
      <tr className="hover font-bold ">
        <th>
          <TiDelete
            className="text-2xl text-indigo-300"
            onClick={() => handleServiceDelete(_id)}
          ></TiDelete>
        </th>
        <td>{customer}</td>
        <td>{price}</td>
        <td>{serviceName}</td>
        <td>
          <button
            onClick={() => handleUpdate(_id)}
            className="btn btn-ghost bg-indigo-300 text-white btn-xs"
          >
            {status ? status : "pending"}
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default OrderList;
