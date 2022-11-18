import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import './addproduct.css';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import logo from "../../assets/logo.png";






const AddP = () => {

    const [product, setProduct] = useState([]);
    const [newName, setNewName] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [newOldPrice, setNewOldPrice] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newBrand, setNewBrand] = useState("");
    const [newQuantity, setNewQuantity] = useState("");


    useEffect(() => {
        update();
      }, []);


    function update() {
        fetch('http://localhost:1337/api/products')
            .then(res => res.json())
            .then(product => {
                setProduct(product.data);
            })
    }



    function addProduct(e) {
        alert("Produto cadastrado.")
        e.preventDefault();
        let name = newName;
        let desc = newDesc;
        let brand = newBrand;
        let oldprice = newOldPrice;
        let price = newPrice;
        let quantity = newQuantity;
        let body = {
            data: {
                name,
                desc,
                brand,
                quantity,
                price,
                oldprice,
            }
        };

        fetch('http://localhost:1337/api/products', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(() => {
                setNewDesc("");
                setNewName("");
                setNewBrand("");
                setNewQuantity("");
                setNewOldPrice("");
                setNewPrice("");
                update();
            });



    }


    return (
        <>
            <div className="addproductscreen">
                <div className="header">
                    <div className="left">
                        <Link to="/homepage" className="linkStart">
                            <img src={logo} />
                            <h1>Storyes</h1>

                        </Link>
                    </div>
                    <div className="right">

                    </div>
                </div>
                <div className="addp">
                    <div className="left">
                        <h1>Adicione seu produto</h1>
                        <form className="inputs" onSubmit={addProduct}>
                            <div>
                                <TextField value={newName} onChange={e => setNewName(e.currentTarget.value)} className="input" id="name" label="Nome do Produto" type="text" name="name" variant="filled" required />
                                <TextField value={newDesc} onChange={e => setNewDesc(e.currentTarget.value)} className="input" id="desc" label="Descrição do Produto" type="text" name="desc" variant="filled" required />
                                <TextField value={newOldPrice} onChange={e => setNewOldPrice(e.currentTarget.value)} className="input" id="oldprice" label="Preço Antigo" type="text" name="oldprice" variant="filled" required />
                                <TextField value={newPrice} onChange={e => setNewPrice(e.currentTarget.value)} className="input" id="price" label="Preço" type="text" name="price" variant="filled" required />
                                <TextField value={newBrand} onChange={e => setNewBrand(e.currentTarget.value)} className="input" id="brand" label="Marca do Porduto" type="text" name="brand" variant="filled" required />
                                <TextField value={newQuantity} onChange={e => setNewQuantity(e.currentTarget.value)} className="input" id="quantity" label="Quatidade de produtos" type="text" name="quantity" variant="filled" required />

                            </div>

                            <Button className="registerbutton" type="submit">
                                <h2>Cadastrar Produto</h2>

                            </Button>

                        </form>
                    </div>
                    <div className="right">
                    </div>

                </div>

            </div>
        </>
    )
}
export default AddP;