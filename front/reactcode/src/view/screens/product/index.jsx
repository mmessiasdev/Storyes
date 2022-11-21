import React, { useEffect, useState } from "react";
import Header from "../../componnents/containers/header/header";
import './style.css';
import { DEFAULTPRODUCTS } from "../../../config";
import { useParams } from "react-router-dom";

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = async (url) => {

        const res = await fetch(url)
        const data = await res.json();
        setProduct(data.data.attributes);
        console.log(data.data.attributes);
    }

    useEffect(() => {
        const productUrl = `${DEFAULTPRODUCTS}/${id}`;
        getProduct(productUrl);
        console.log(productUrl);
    }, [])

    return <>
        <Header />
        <div className="productpage">
            {product &&
                <>
                    <h1>
                        {product.desc} teste

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