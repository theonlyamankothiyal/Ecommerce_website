import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {CART, CHECKOUT, DEFAULT, HOME, ORDER, PROFILE, SIGNUP, VIEWDETAILS, WISHLIST,} from "./keys"
import { Cart, Home, Login, Profile, WishList, SignUp, ViewDetails, CheckOut, OrderHistory } from "../pages";

const router=createBrowserRouter([
    {
        path:DEFAULT,
        element:<Login/>
    },
    {
        path:HOME,
        element: <Home/>
    },
    {
        path: CART,
        element:<Cart/>
    },
    {
        path: PROFILE,
        element:<Profile/>
    },
    {
        path: WISHLIST,
        element:<WishList/>
    },
    {
        path: SIGNUP,
        element:<SignUp/>
    },
    {
        path: VIEWDETAILS,
        element:<ViewDetails/>
    },
    {
        path: CHECKOUT,
        element:<CheckOut/>
    },
    {
        path: ORDER,
        element:<OrderHistory/>
    },
    {
        path: CHECKOUT,
        element:<CheckOut/>
    },
   
]);
export default router