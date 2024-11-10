import React, { useState } from "react";
import './Header.css';
// import Diamond from './images/DiamondHeader';
import { ReactComponent as Diamond } from './images/Diamond.svg';


function Header() {

    const [open, setOpen] = useState(false);

    // Toggle function for the dropdown
    const handleButtonClick = () => {
        setOpen(!open);
    };
    return (
        <header className="header">

            <div>
                <Diamond width="100" height="100" />
            </div>
            <h3 className="storeName">Marthas store name</h3>




            {/* Dropdown menu */}
            <div className="menuContainer">

                <button type="button" className="button" onClick={handleButtonClick}>
                    ☰
                </button>
                {open && (
                    <div className="dropdown">
                        <ul>
                            <li>About</li>
                            <li>Gold</li>
                            <li>Silver</li>
                            <li>Diamond</li>
                        </ul>
                    </div>
                )}
            </div>
        </header>

    );
};
export default Header;