import React from "react";
import './style.css';

const DivProduct = (name) => {

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

export default DivProduct;