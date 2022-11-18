import React, { useState } from "react";
import AboutUs from "../../componnents/aboutus/aboutus";
import Footer from "../../componnents/footer/footer";
import ForYou from "../../componnents/foryou/foryou";
import SideBar from "../../componnents/sidebar/sidebar";
import Stories from "../../componnents/stories/stories";
import './homepage.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import FirtProducts from "../../componnents/firstproducts";

const HomePage = () => {
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
                            <Link to="/auth" className="link">
                                <Button className="buttonSecundary" variant="contained" type="submit">
                                    <BiLogOut className="icon" />
                                    <h2>Sair</h2>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="centralpage">
                    <div className="left">
                        <Stories />
                        <FirtProducts/>
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

export default HomePage;