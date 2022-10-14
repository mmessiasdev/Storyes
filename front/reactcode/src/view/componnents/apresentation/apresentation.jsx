import axios from "axios";
import { Link } from "react-router-dom";
import './apresentation.css';
import React, { useEffect, useState } from "react";

const Apresentation = () => {
    // axios.get('http://localhost:1337/api/products').then(response => {
    //     console.log(response);
    // });

    // const [error, setError] = useState(null);
    // const [products, setProducts] = useState([]);

    // useEffect((response) => {
    //     console.log(response)
    //     axios.get('http://localhost:1337/api/products').then(({data}) => setProducts(data)).catch((error) => setError(error))
    // }, [])


    // if (error) {
    //     // Print errors if any
    //     return <div>An error occured: {error.message}</div>;
    //   }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1337/api/products?populate=*').then((res) => res.json()).then(res => {
            console.log(res.data)
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
                    {products.map((resProd) =>
                        <ProdApres key={resProd.id} {...resProd}
                            name={resProd.attributes.name}
                            desc={resProd.attributes.desc}
                            price={resProd.attributes.price}
                            oldPrice={resProd.attributes.oldprice} />
                    )}
                </div>
            </div>
        </>
    )
}

const ProdApres = ({ name, desc, oldPrice, price, img }) => {
    const imageUrl = "http://localhost:1337";
    return (
        <>
            <Link to="/auth" className="link" >
                <div className="product">
                    <div className="photo">
                        <img src={imageUrl} />
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

export default Apresentation;