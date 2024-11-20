import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";


function Navbar(){
    return(
        <>
        <h1>Header</h1>
       
        <Link to='/'><button>Home</button></Link>
        </>
    )
};

export default Navbar;