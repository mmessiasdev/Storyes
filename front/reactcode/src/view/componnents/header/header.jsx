import React from "react";
import './header.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import logo from "../../assets/logo.png";
import { Link, useNavigate, redirect } from "react-router-dom";
import { Button } from "@mui/material";




const Header = ({link}) => {
    return <>
        <div className="header">
            <div className="logo"><h1><img src={logo} /> Storyes</h1></div>
            <div className="input"><AiOutlineSearch size={32} />
                <div className="cont"></div>
            </div>
            <div className="account">

                <Link to={link} className="link">
                    <Button className="buttonSecundary" variant="contained" type="submit">
                        < BsFillPersonFill />
                        <h2>Login</h2>

                    </Button>
                </Link>


            </div>
        </div>
    </>
}

export default Header;