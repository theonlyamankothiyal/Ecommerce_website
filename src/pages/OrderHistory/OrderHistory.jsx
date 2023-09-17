import React from 'react';
import { useSelector } from 'react-redux';
import './order-history.css'; // Import the CSS file
import { Navbar } from '../../components';

const OrderHistory = () => {
  const OrderHistory = useSelector(state => state.bag.OrderHistory);
  const newOrderHistory=OrderHistory[0];
  console.log("inside order history",OrderHistory[0]);

  return (
    <>
    <Navbar/>
    <div className="order-history-container">
      <h2 style={{color:"white"}}>Order History</h2>
      {newOrderHistory.map((order, index) => (
        <div key={index} className="order-details">
          <h3>Order #{index + 1}</h3>
          <h2>{order.name}</h2>
          <h2>Price : ${order.price}</h2>
       
          <p className="total-price">Total Price: ${order.totalPrice}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default OrderHistory;
