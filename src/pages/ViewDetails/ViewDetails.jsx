import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'
import bags from '../../utilities/placeholder/product';
import { Navbar } from '../../components';

const ViewDetails = () => {
    const location = useLocation();
    const bag = location.state.bag;
  return (
    
    <div>
      <Navbar/>
         <center>
        <img src={bag.image} alt="" width={450} />
        <h3 style={{ color: "white" }}>{bag.name}</h3>
        <h3 style={{ color: "white" }}>Price: $ {bag.price}</h3>
        <h3 style={{ color: "white" }}> Rating :  <FaStar size={25}
                        style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaStar size={25}
                        style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaStar size={25}
                        style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaStar size={25}
                        style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaStarHalfAlt size={25}
                        style={{ color: "#fff", marginRight: "1rem" }} /></h3>
        <p>{bag.company}</p>
        <p>{bag.specification}</p>
        <p>{bag.specification}</p>
        <p>{bag.specifications.join(', ')}</p>
         <p>{bag.briefSpec}</p>
        
        <h3 style={{ color: "white" }}>Shardul :  Product quality is verry goood</h3>
        <h3 style={{ color: "white" }}>Uttam :   verry goood</h3>
        
        
        </center>
    </div>
  )
}

export default ViewDetails