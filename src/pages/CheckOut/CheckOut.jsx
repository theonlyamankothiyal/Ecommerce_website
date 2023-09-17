import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "./CheckOutStyle.css"
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const cart = useSelector(state => state.bag.cart);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    billingAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    
    alert('Payment processed successfully!');
    navigate('/home');
  };

  return (
    <div className='payment'>
        <center>
      <h3 >Payment Details</h3>
      <div className='form'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="billingAddress">Billing Address:</label>
          <input
            type="text"
            id="billingAddress"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success" onClick={()=>handleSubmit()}>Submit Payment</button>
      </form>
      </div>
      </center>
      
    </div>
  );
};

export default PaymentPage;
