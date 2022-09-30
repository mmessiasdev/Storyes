import React, { useState, useContext } from "react";
import './login.css';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import logo from "../../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../../services/authcontext";
import { URLREGISTER } from "../../../model/config";




const Register = () => {

    const history = useNavigate();

    const [credentialsRegister, setcredentialsRegister] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch(
                `${URLREGISTER}`, {
                    headers : {
                        'Content-Type' : 'application/json',
                    },
                    body : JSON.stringify({
                        email: credentialsRegister.email,
                        username: credentialsRegister.username,
                        password: credentialsRegister.password,
                    }),
                    method: 'POST',
                }
            );
            const data = await response.json();
            console.log(data)
            history("/login");
            
        }
        catch (error){
            console.error(error);

        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setcredentialsRegister({
            ...credentialsRegister, [name]: value 
        });
    }

    return (
        <>
            <div className="header">
                <div className="left">
                    <img src={logo} />
                </div>
                <div className="right">
                    <Link to="/login" className="link">
                        <Button className="buttonSecundary" variant="contained" type="submit">

                            login

                        </Button>
                    </Link>
                </div>


            </div>
            <div className="fullscreen">

                <div className="login">
                    <h1>
                        Register
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="formCont">
                            <div> <TextField onChange={handleChange} className="input" id="username" label="Username" type="text" name="username" variant="filled" /></div>
                            <div> <TextField onChange={handleChange} className="input" id="email" label="Email" type="text" name="email" variant="filled" /></div>
                            <div> <TextField onChange={handleChange} className="input" id="password" label="Password" type="password" name="password" variant="filled" /></div>

                        </div>
                        <div className="buttonCont">
                            <Button className="buttonPrimary" variant="contained" type="submit">
                                REGISTER
                            </Button>
                        </div>
                    </form>

                </div>
                <div className="image">
                    <img src="https://fabrimetalarmazenagem123.sirv.com/WP_www.fabrimetalarmazenagem.com.br/2022/05/Pauta-4-Otimizacao_-Tipos-de-armazem-e-sua-finalidade.jpg" alt="" />
                </div>

            </div>
        </>
    );
}

export default Register;