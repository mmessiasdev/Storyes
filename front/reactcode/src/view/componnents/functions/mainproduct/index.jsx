import React from "react";
import { Link } from "react-router-dom";
import { GENERALURL } from "../../../../config";

const MainProduct = ({ name, desc, oldPrice, price, img }) => {
    return (
        <>
            <Link to="/auth/product/:id" className="link" >
                <div className="product">
                    <div className="photo">
                        <img src={GENERALURL + img}/>
                    </div>
                    <div className="info">
                        <div className="text">
                            <h3>{name}</h3>
                            <h5>{desc}</h5>
                        </div>
                        <div className="number">
                            <h4>de {oldPrice} R$</h4>
                            <h2>por {price} R$</h2>
                        </div>
                    </div>
                </div>

            </Link>
        </>

    )
}

export default MainProduct;