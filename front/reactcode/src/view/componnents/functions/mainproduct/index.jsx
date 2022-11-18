import React from "react";
import { Link } from "react-router-dom";

const MainProduct = ({ name, desc, oldPrice, price, img, id }) => {
    return (
        <>
            <Link to={`/auth/product/${id}`} className="link" >
                <div className="product">
                    <div className="photo">
                        <img src={img}/>    
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