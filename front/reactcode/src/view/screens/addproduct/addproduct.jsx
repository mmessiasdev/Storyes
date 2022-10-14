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





const AddP = () => {

    const history = useNavigate();

    const [credentials, setCredentials] = useState({
        name: "",
        desc: "",
        brand: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials, [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `${URLPOSTPRODUCT}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: credentials.name,
                    desc: credentials.desc,
                    brand: credentials.brand,
                }),
                method: 'POST',
            }
            );
            const data = await response.json();
            console.log(data)
        }
        catch (error) {
            console.error(error);

        }
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
                        <form onSubmit={handleSubmit} className="inputs">
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={credentials.name}
                            />
                            <input
                                type="text"
                                name="desc"
                                onChange={handleChange}
                                value={credentials.desc}
                            />
                            <input
                                type="text"
                                name="brand"
                                onChange={handleChange}
                                value={credentials.brand}
                            />

                            <SentPhoto />
                            <SentPhoto />
                            <SentPhoto />

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

const SentPhoto = () => {
    return (
        <>
            <div className="sentphoto">
                <h4>Envie a imagem do Produto</h4>
                <input type="file"></input>
            </div>
        </>
    )
}

export default AddP;