import { TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import AuthContext from "../../../services/authcontext";
import Header from "../../componnents/header/header";
import './addproduct.css';
import { Link, useNavigate, redirect } from "react-router-dom";
import { Button } from "@mui/material";
import logo from "../../assets/logo.png";
import { BiLogIn } from "react-icons/bi";





const AddP = () => {
    const { setIsAuthenticated } = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        identifier: "",
        password: "",
    });

    const handleChangeInput = ({ currentTarget }) => {
        const { value, name } = currentTarget
        setCredentials({
            ...credentials,
            [name]: value
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
                        <div className="inputs">
                            <TextField onChange={handleChangeInput} className="input" id="text" label="Nome do Produto" type="text" name="text" variant="filled" />
                            <TextField onChange={handleChangeInput} className="input" id="text" label="Descriçao" type="text" name="text" variant="filled" />
                            <TextField onChange={handleChangeInput} className="input" id="text" label="Marca" type="text" name="text" variant="filled" />
                            <TextField onChange={handleChangeInput} className="input" id="text" label="Preço" type="text" name="text" variant="filled" />
                            <TextField onChange={handleChangeInput} className="input" id="text" label="Preço Antigo" type="text" name="text" variant="filled" />
                            <SentPhoto />
                            <SentPhoto />
                            <SentPhoto />
                            <Link to="/login/auth" className="linkStart">
                                <Button className="registerbutton">
                                    <h2>Cadastrar Produto</h2>

                                </Button>
                            </Link>

                        </div>
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
            </div>
        </>
    )
}

export default AddP;