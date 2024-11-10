import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import './Navbar.css'


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
                    <h3>Logo</h3>
                </div>
                {/* <h3>Logo</h3> */}
                <nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/#">Work</a>
                    <a href="/#">Blog</a>
                    <a href="/#">About me</a>
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
            </header>
        </>
    )
};


export default Navbar;