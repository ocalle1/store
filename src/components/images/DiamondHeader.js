import React from 'react';

const Diamond = (props) => (
    <svg width={props.width} height={props.height} viewBox="0 0 100 100" {...props}>
        <polygon points="50,0 100,50 50,100 0,50" />
    </svg>
);

export default Diamond;