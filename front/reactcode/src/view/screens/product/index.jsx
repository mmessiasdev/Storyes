import React from "react";
import ForYou from "../../componnents/foryou/foryou";
import Header from "../../componnents/header/header";
import DivProduct from "../../componnents/pageproduct";
import Recomended from "../../componnents/recomendedproducts";
import './style.css';

const Product = () => {
    return <>
        <div className="productpage">
            <Header />
            <div className="homepageCont">
                <div className="left">
                    <DivProduct />
                    <ForYou />
                </div>

                <Recomended />
            </div>

        </div>
    </>
}


export default Product;