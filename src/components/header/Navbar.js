import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../page-links/Home";
import StoreItems from "../body_store_items/StoreItems";
import Gold from "../body_store_items/Gold";

function Navbar() {
    return (
        <>
            <h1>Header</h1>

            <Link to='/'><button>Home</button></Link>
            <Link to='/about'><button>About</button></Link>
            <Link to='/body'><button>Body Page</button></Link>
        </>
    )
};

export default Navbar;