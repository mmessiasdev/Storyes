import React, { useState } from "react";
import AboutUs from "../../componnents/containers/aboutus/aboutus";
import Footer from "../../componnents/containers/footer/footer";
import ForYou from "../../componnents/containers/foryou/foryou";
import SideBar from "../../componnents/containers/sidebar/sidebar";
import Stories from "../../componnents/containers/stories/stories";
import './style.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import FirtProducts from "../../componnents/containers/firstproducts/firstproducts";
import AuthContext from "../../../controller/auth/authcontext";
import { useContext } from "react";
import authApi from "../../../controller/auth/authapi";

const HomePageAuth = () => {
    const history = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext);
    
   

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsAuthenticated(false)
            history("/auth");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="homepage">
                <div className="menu">
                    <div className="header">
                        <div className="logo"><h1><img src={logo} /> Storyes</h1></div>
                        <div className="input"><AiOutlineSearch size={32} />
                            <div className="cont"></div>
                        </div>
                        <div className="account">

                            <form onSubmit={handleSubmit}>
                                <Button className="buttonSecundary" variant="contained" type="submit">
                                    <BiLogOut className="icon" />
                                    <h2>Sair</h2>
                                </Button>

                            </form>

                        </div>
                    </div>
                </div>
                <div className="centralpage">
                    <div className="left">
                        <Stories />
                        <FirtProducts />
                        <ForYou />
                        <AboutUs />
                    </div>
                    <div className="right">
                        <SideBar />
                    </div>

                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default HomePageAuth;