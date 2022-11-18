import React, { useEffect, useState } from "react";
import './foryou.css'
import { DEFAULTPRODUCTS } from "../../../config";
import MainProduct from "../functions/mainproduct";

const ForYou = () => {
    const [products, setProducts] = useState([]);   

    useEffect(() => {
        fetch(DEFAULTPRODUCTS).then((res) => res.json()).then(res => {
            console.log(res.data);
            setProducts(res.data);
        })
    })


    return (
        <>
            <div className="foryou" id="foryou">
                <div className="title">
                    <h2>Bests</h2>
                </div>
                <div className="list">
                    {products.map((resProd) =>
                        <MainProduct key={resProd.id} {...resProd} name={resProd.attributes.name} desc={resProd.attributes.desc} oldPrice={resProd.attributes.oldprice} price={resProd.attributes.price} img={resProd.attributes.thumb}/>
                    )}
                </div>
            </div>
        </>

    )
}

export default ForYou;