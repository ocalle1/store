import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../Home";
import StoreItems from "../body_store_items/StoreItems";
import Gold from "../body_store_items/Gold";

function Navbar(){
    return(
        <>
        <h1>Header</h1>
       
        <Link to='/'><button>Home</button></Link>
        <Link to='/storeItems'><button>Store Items</button></Link>
        <Link to='/gold'><button>Gold</button></Link>
        </>
    )
};

export default Navbar;