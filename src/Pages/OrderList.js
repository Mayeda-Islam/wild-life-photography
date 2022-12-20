import React from 'react';

const OrderList = ({order}) => {
    const {_id, serviceName, price, customer, phone, service ,status} = order;
    return (

    <tbody>
      {/* <!-- row 1 --> */}
      <tr className="hover">
        <th>X</th>
        <td>{customer}</td>
        <td>{price}</td>
        <td>{serviceName}</td>
      </tr>
      
    </tbody>
    );
};

export default OrderList;