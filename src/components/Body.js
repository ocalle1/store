import React from "react";
import Card from "./gold-images-cards/goldImages";

import './body.css'
import goldChain1 from './images/goldChain1.jpg'
import goldChain2 from './images/goldChain2.webp'
import goldChain3 from './images/goldChain3.webp'
import Card2 from "./gold-images-cards/silverImages";
import silverChain1 from './images/silverChain1.webp'
function Body() {
    return (
        <>
            <div className="cards-container">
                <Card
                    image={goldChain1}
                    name="gold necklace"
                    description="its not fake gold but its mexican goldasdsaa"
                />

                <Card
                    image={goldChain2}
                    name="gold chain"
                    description="Its long a itdsadsadsdasdas silverdsadsadasd sdad asdasdsada"
                />
                <Card2
                    image={silverChain1}
                    name="Silver chain"
                    description="its silver bitch"
                />
                <Card2
                    image={silverChain1}
                    name="Silver chain"
                    description="its silver bitch"
                /><Card2
                    image={silverChain1}
                    name="Silver chain"
                    description="its silver bitch"
                /><Card2
                    image={silverChain1}
                    name="Silver chain"
                    description="its silver bitch"
                />
                <Card2
                    image={silverChain1}
                    name="Silver chain"
                    description="its silver bitch"
                /><Card2
                    image={silverChain1}
                    name="Silver chain"
                    description="its silver bitch"
                />
                <Card2
                    image={silverChain1}
                    name="Silver chain"
                    description="its silver bitch"
                />
            </div>

        </>

    );
};

export default Body;