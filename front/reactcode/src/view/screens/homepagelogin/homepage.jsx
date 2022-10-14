import React, { useState } from "react";
import AboutUs from "../../componnents/aboutus/aboutus";
import Apresentation from "../../componnents/apresentation/apresentation";
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

// http://localhost:1337/api/products
// http://localhost:1337/api/auth/local
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYzNjIxOTE1LCJleHAiOjE2NjYyMTM5MTV9.o7snA8KbWVnpDt3uI_uZ2R-h9-rP30yKRTKd-uHsQUg


const HomePage = () => {
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true);
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
                            {/* <div>
                                <button onClick={showOrHide}>Clique em mim</button>
                                {showElement ? <p>Tô aqui</p> : null}
                            </div> */}


                        </div>
                    </div>
                </div>
                <div className="centralpage">
                    <div className="left">
                        <Stories />
                        <Apresentation />
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