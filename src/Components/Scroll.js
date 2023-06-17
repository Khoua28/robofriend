import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: 'solid 5px green', height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;  