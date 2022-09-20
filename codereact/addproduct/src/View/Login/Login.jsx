import React from "react";
// import axios from 'axios';
import { Button, TextField } from "@mui/material";

import './Login.css'


const Login = () => {
    return (
        <>
            <div className="fullscreen">

                <div className="login">
                    <h1>
                        Login
                    </h1>
                    <form className="formCont">
                        <div>
                            <TextField className="input" id="identifier" label="username" type="text" name="identifier" />
                        </div>
                        <div>
                            <TextField className="input" id="password" label="password" type="text" name="password" />
                        </div>
                    </form>
                    <div className="buttonCont">    
                        <Button className="buttonPrimary" variant="contained"  type="submit">
                            ENTRAR
                        </Button>
                    </div>

                </div>
                <div className="image">
                    <img src="https://fabrimetalarmazenagem123.sirv.com/WP_www.fabrimetalarmazenagem.com.br/2022/05/Pauta-4-Otimizacao_-Tipos-de-armazem-e-sua-finalidade.jpg" alt="" srcset="" />
                </div>

            </div>
        </>
    );
}

export default Login;