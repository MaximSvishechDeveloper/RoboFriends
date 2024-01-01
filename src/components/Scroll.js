import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY:'auto', border:'1px solid black', height:'830px'}}>
            {props.children}
        </div>
    )

};

export default Scroll