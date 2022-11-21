import React from "react";
import MainProduct from "../mainproduct/mainproduct";
import './style.css';

const Recomended = () => {
    return(
        <>
            <div className="recomended">
                <MainProduct/>
                <MainProduct/>
                <MainProduct/>
                <MainProduct/>
                <MainProduct/>
                <MainProduct/>
                <MainProduct/>
            </div>
        </>
    )
}

export default Recomended;