import React from "react";
import './style.css';

const ProductDiv = (name) => {

    return (
        <>
            <div>
                <div className="list">
                    <h1>{name}</h1>
                </div>
            </div>
        </>
    )
}

export default ProductDiv;