import React from "react";
import silverChain1 from '../images/silverChain1.webp'
function Card2(props) {
    return (
        <>
            <div className="card2">
                <img className="silverChain1" src={props.image} alt="silver image"></img>
                <h2 className="silver-1-title">Item: {props.name}</h2>
                <p className="silver-1-description">Description:{props.description}</p>
            </div>

        </>

    )
};



export default Card2;