import { TextField } from "@mui/material";
import React, { useState, useContext, useCallback, useEffect } from "react";
import AuthContext from "../../../services/authcontext";
import Header from "../../componnents/header/header";
import './addproduct.css';
import { Link, useNavigate, redirect } from "react-router-dom";
import { Button } from "@mui/material";
import logo from "../../assets/logo.png";
import { BiLogIn } from "react-icons/bi";
import axios from "axios";
import { URLPOSTPRODUCT, URLREGISTER } from "../../../model/config";
import authapi from "../../../services/authapi";
import authcontext from "../../../services/authcontext";





const AddP = () => {

    const [product, setProduct] = useState([]);
    const [newName, setNewName] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [newBrand, setNewBrand] = useState("");


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
        e.preventDefault();
        let name = newName;
        let desc = newDesc;
        let brand = newBrand;
        let body = {
            data: {
                name,
                desc,
                brand
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
                update();
            })
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
                                <TextField value={newName} onChange={e => setNewName(e.currentTarget.value)} className="input" id="name" label="Nome do Produto" type="text" name="name" variant="filled" />
                                <TextField value={newDesc} onChange={e => setNewDesc(e.currentTarget.value)} className="input" id="desc" label="Descrição do Produto" type="text" name="desc" variant="filled" />
                                <TextField value={newBrand} onChange={e => setNewBrand(e.currentTarget.value)} className="input" id="brand" label="Marca do Porduto" type="text" name="brand" variant="filled" />
                            </div>

                            {/* 
                            <div className="sentphoto">
                                <h4>Envie a imagem do Produto</h4>
                                <input type="file" onChange={e => setSentPhoto(e.target.files[0])}></input>
                            </div> */}

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