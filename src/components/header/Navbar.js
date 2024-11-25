import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../page-links/Home";


function Navbar() {
    return (
        <>
            <h1>Header</h1>

            <Link to='/'><button>Home</button></Link>
            <Link to='/about'><button>About</button></Link>
            <Link to='/body'><button>Body</button></Link>
        </>
    )
};

export default Navbar;