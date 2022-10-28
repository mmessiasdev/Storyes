import React, { useEffect, useState } from "react";
import './foryou.css'
import ProdApres from "../functions/ProdApres";
import { DEFAULTPRODUCTS } from "../../../config";

const ForYou = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(DEFAULTPRODUCTS).then((res) => res.json()).then(res => {
            console.log(res.data)
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
                        <ProdApres key={resProd.id} {...resProd} name={resProd.attributes.name} desc={resProd.attributes.desc} oldPrice={resProd.attributes.oldprice} price={resProd.attributes.price} />
                    )}
                </div>
            </div>
        </>

    )
}

{/* <div>
{estate.attributes.thumb.data ? (
    estate.attributes.thumb.data.map((pic) => (
        <img
            src={`http://localhost:1337${pic.attributes.url}`}
            alt="img"
            key={pic.attributes.id}
        />
    ))
) : (
    <img
        src={`http://localhost:1337${estate.attributes.thumb.data.attributes.url}`}
        alt="img"
    />
)}
</div> */}

export default ForYou;