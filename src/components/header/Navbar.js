import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef();

    // const showNavbar = () => {
    //     navRef.current.classList.toggle("responsive_nav")
    // }
    const showNavbar = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu state
        navRef.current.classList.toggle("responsive_nav"); // Add or remove the class to display the nav
    }
    return (
        <>
            <header>
                <div className="logo">
                    <h3>Jewelry store</h3>
                </div>
                {/* <h3>Logo</h3> */}
                <nav ref={navRef}>
                    {/* <Routes> */}
                    {/* <a href="/#">Home</a>
                    <a href="/#">Work</a>
                    <a href="/#">Blog</a>
                    <a href="/#">About me</a> */}
                    {/* </Routes> */}
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                {!isMenuOpen && (
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaBars />
                    </button>
                )
                }
                <Link to="/home"><button>Home</button></Link>
                <Link to="/about"><button>About</button></Link>

            </header >
        </>
    )
};


export default Navbar;