import React, { useState, useContext } from "react";
import '../screens/login/login.css'
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../services/authcontext";
import authApi from "../../services/authapi";




const Register = () => {

    const history = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext);

    const [credentialsRegister, setcredentialsRegister] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handleChangeInput = ({ currentTarget }) => {
        console.log(currentTarget)
        const { value, name } = currentTarget
        setcredentialsRegister({
            ...credentialsRegister,
            [name]: value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await authApi.authRegister(credentialsRegister);
            setIsAuthenticated(true)
            history("admin");
        } catch (error) {
            console.log(error);
        }
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
                            <div> <TextField onChange={handleChangeInput} className="input" id="username" label="Username" type="text" name="identifier" variant="filled" /></div>
                            <div> <TextField onChange={handleChangeInput} className="input" id="email" label="Email" type="text" name="email" variant="filled" /></div>
                            <div> <TextField onChange={handleChangeInput} className="input" id="password" label="Password" type="text" name="password" variant="filled" /></div>

                        </div>
                        <div className="buttonCont">
                            <Button className="buttonPrimary" variant="contained" type="submit">
                                LOGIN
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