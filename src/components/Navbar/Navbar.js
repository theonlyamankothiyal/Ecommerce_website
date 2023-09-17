import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import React, { useState } from 'react';
import { FaBars, FaCanadianMapleLeaf, FaHeart, FaHome, FaSignOutAlt, FaSistrix, FaTimes, FaUserAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa"
import { useSelector } from "react-redux";


const Navbar = () => {

    const user = useSelector(state => state.bag.user)

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);
    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>  <FaCanadianMapleLeaf size={30}
                    style={{ color: "white", marginRight: "1rem" }} />Bag Street</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/home"><FaHome size={25}
                        style={{ color: "#fff", marginRight: "1rem" }} /></Link>
                </li>
                <li>
                    <Link to="/profile"> <FaUserAlt size={25}
                        style={{ color: "#fff", marginRight: "1rem" }} />{user.name}</Link>
                </li>
                <li>
                    <Link to="/cart"><FaCartPlus size={25}
                        style={{ color: "#fff", marginRight: "1rem" }} /></Link>
                </li>
                <li>
                    <Link to="/wishlist"><FaHeart size={25}
                        style={{ color: "#fff", marginRight: "1rem" }} /></Link>
                </li>


                <li>
                    <Link to="/"><FaSignOutAlt size={25}
                        style={{ color: "#fff", marginRight: "1rem" }} /></Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }
                } />) : (
                    <FaBars size={20} style={{ color: "#fff" }
                    } />)}

            </div>
        </div>
    )
}

export default Navbar;
