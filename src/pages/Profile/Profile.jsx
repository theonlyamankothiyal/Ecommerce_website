import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "./ProfileStyle.css";
import { Footer, Navbar } from '../../components';
import { FaHeart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { ORDER, WISHLIST } from '../../router/keys';
import { wishlist } from '../../redux/reducer/bagReducer';

const Profile = () => {
  const navigate=useNavigate();
  
const user=useSelector(state=>state.bag.user)
const handleOrder=()=>{
  navigate(ORDER)
}

  return (
    <div>
      <Navbar/>
    <div className="profile-container"><br/>
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.img}</p>  
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>PhoneNo:</strong> {user.phoneNo}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
      <button className="btn btn-primary"> My Cart</button>
      <button className="btn btn-primary"><Link to ="/wishlist"><FaHeart size={25} 
                         style={{ color: "#fff", marginRight: "1rem" }} />Wishlist </Link></button>
      <button onClick={()=>{handleOrder()}} className="btn btn-primary">Orders</button>
    </div>
    <Footer/>
    </div>
  );
};

export default Profile
