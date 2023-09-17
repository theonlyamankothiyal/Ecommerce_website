import React, { useState } from 'react';
import bags from '../../utilities/placeholder/product';
import "./BagsListStyle.css"
import { FaHeart, FaSistrix } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart, addWishlist } from '../../redux/reducer/bagReducer';

function BagsList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [searchQuery, setSearchQuery] = useState('');

    const wishlist = (bag) => {
        dispatch(addWishlist(bag));
        alert("You Wishlist Something..");
    }

    const cart = (bag) => {
        dispatch(addCart(bag));
        alert("Added to Cart continue shopping....");
    }

    const view = (bag) => {
        navigate('/viewdetails', { state: { bag } });
    }

    const filteredBags = bags.filter((category) => {
        const filteredCategory = {
            ...category,
            bags: category.bags.filter((bag) =>
                bag.name.toLowerCase().includes(searchQuery.toLowerCase())
            ),
        };
        return filteredCategory.bags.length > 0;
    });

    return (
        <div className="bags-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search bags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <FaSistrix size={25} style={{ color: "#fff", marginRight: "1rem" }} />
            </div>

            {filteredBags.map((category, index) => (
                <div key={index} className="category-container">
                    <h2 style={{ color: 'white' }}>{category.category}</h2>
                    <div className="bags-list">
                        {category.bags.map((bag, bagIndex) => (
                            <div key={bagIndex} className="bag-item">
                                <img src={bag.image} alt={bag.name} onClick={() => view(bag)} />
                                <h3>{bag.name}</h3>
                                <p>Price: ${bag.price}</p>
                                <p>category:{bag.category}</p>

                                <center>
                                    <button className="btn btn-primary" onClick={() => cart(bag)}>Add to cart</button>
                                    <Link to="/wishlist" onClick={() => wishlist(bag)}>
                                        <FaHeart size={20} style={{ color: "black", marginRight: "1rem" }} />
                                    </Link>
                                </center>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BagsList;
