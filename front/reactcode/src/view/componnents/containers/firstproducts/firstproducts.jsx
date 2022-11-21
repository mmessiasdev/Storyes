import './style.css';
import React, { useEffect, useState } from "react";
import { DEFAULTPRODUCTS } from '../../../../config';
import MainProduct from '../../widgets/mainproduct/mainproduct';


const FirtProducts = () => {
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
                                <MainProduct id={resProd.id} key={resProd.id} {...resProd} name={resProd.attributes.name} desc={resProd.attributes.desc} oldPrice={resProd.attributes.oldprice} price={resProd.attributes.price} img={resProd.attributes.thumb} />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default FirtProducts;