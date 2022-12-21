import React from "react";
import { TiDelete } from "react-icons/ti";
const OrderList = ({ order ,handleServiceDelete,handleUpdate }) => {
  const { _id, serviceName, price, customer, phone, service, status } = order;
 
  return (
    <tbody>
      {/* <!-- row 1 --> */}
      <tr className="hover">
        <th>
          <TiDelete
            className="text-2xl"
            onClick={() => handleServiceDelete(_id)}
          ></TiDelete>
        </th>
        <td>{customer}</td>
        <td>{price}</td>
        <td>{serviceName}</td>
        <td><button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">{status?status:'pending'}</button></td>
      </tr>
    </tbody>
  );
};

export default OrderList;
