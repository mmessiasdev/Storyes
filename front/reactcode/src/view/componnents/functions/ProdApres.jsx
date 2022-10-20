import React from "react";
import { Link } from "react-router-dom";

const ProdApres = ({ name, desc, oldPrice, price, img }) => {
    const imageUrl = "http://localhost:1337";
    return (
        <>
            <Link to="/auth" className="link" >
                <div className="product">
                    <div className="photo">
                        {/* <img src={imageUrl + img} /> */}
                        <h3>{img}</h3>
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

export default ProdApres;