import React from "react";
// import goldChain1 from '../images/goldChain1.jpg'
// import goldChain2 from '../images/goldChain2.webp'
function Card(props) {
    return (
        <>
            {/* <div className="card-container"> */}
            <div className="card1">
                <img className="goldChain1" src={props.image} alt="gold image"></img>
                <h2 className="gold-1-title">Item: {props.name}</h2>
                <p className="gold-1-description">Description:{props.description}</p>
            </div>



            {/* </div> */}

        </>

    )
};



export default Card;