import './apresentation.css';
import React, { useEffect, useState } from "react";
import ProdApres from "../functions/ProdApres";
import { DEFAULTPRODUCTS } from "../../../config";


const Apresentation = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(DEFAULTPRODUCTS).then((res) => res.json()).then(res => {
            setProducts(res.data);
        })
    })





    return (
        <>
            <div className="apresentation" id="apresentation">
                <div className="title">
                    <h2>Popular</h2>
                </div>
                <div className="list">
                    {products.map((resProd) => {
                        return (
                            <>
                                {/* <img scr={resProd.attributes.thumb.data.attributes} /> */}
                                <ProdApres key={resProd.id} {...resProd} name={resProd.attributes.name} desc={resProd.attributes.desc} oldPrice={resProd.attributes.oldprice} price={resProd.attributes.price} />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Apresentation;