import React, { useContext, useState } from "react";
import './login.css'
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import authApi from "../../../services/authapi";
import logo from "../../assets/logo.png";
import AuthContext from "../../../services/authcontext";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const history = useNavigate();
    const {setIsAuthenticated} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        identifier: "",
        password: "",
    });

    const handleChangeInput = ({ currentTarget }) => {
        console.log(currentTarget)
        const { value, name } = currentTarget
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await authApi.authenticate(credentials);
            setIsAuthenticated(true)
            history("admin");
        } catch (error) {
            console.log(error);
        }

    }


    // const getUsers = async () => {
    //     const { data } = await axios.post('http://localhost:1337/api/auth/local', {

    //     });
    // }


    return (
        <>
            <div className="header">
                <div className="left">
                    <img src={logo} />
                </div>
                <div className="right">
                    <Button className="buttonSecundary" variant="contained" type="submit">
                        Register
                    </Button>
                </div>


            </div>
            <div className="fullscreen">

                <div className="login">
                    <h1>
                        Login
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="formCont">
                            <div>
                                <TextField onChange={handleChangeInput} className="input" id="identifier" label="Username" type="text" name="identifier" variant="filled" />
                            </div>
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

export default Login;