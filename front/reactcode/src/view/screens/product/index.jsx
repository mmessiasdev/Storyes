import React, { useEffect, useState } from "react";
import ForYou from "../../componnents/foryou/foryou";
import Header from "../../componnents/header/header";
import DivProduct from "../../componnents/functions/screenproduct";
import Recomended from "../../componnents/recomendedproducts";
import './style.css';
import { DEFAULTPRODUCTS } from "../../../config";
import { useParams } from "react-router-dom";

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = async (url) => {

        const res = await fetch(url)
        const data = await res.json();
        setProduct(data.attributes);
        console.log(data);
    }

    useEffect(() => {
        const productUrl = `${DEFAULTPRODUCTS}/${id}`;
        getProduct(productUrl);
        console.log(productUrl);
    }, [])

    return <>
        <div className="productpage">
            {product &&
                <>
                    <h1>
                        {product.attributes.desc} teste

                    </h1>
                </>
            }
            <div className="homepageCont">
                <div className="left">
                </div>
            </div>

        </div>
    </>
}


export default Product;