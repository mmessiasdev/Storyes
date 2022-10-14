import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import api from "../../../services/baseapi";
import AboutUs from "../../componnents/aboutus/aboutus";
import Apresentation from "../../componnents/apresentation/apresentation";
import Footer from "../../componnents/footer/footer";
import ForYou from "../../componnents/foryou/foryou";
import Header from "../../componnents/header/header";
import SideBar from "../../componnents/sidebar/sidebar";
import Stories from "../../componnents/stories/stories";
import './homepage.css';

// http://localhost:1337/api/products
// http://localhost:1337/api/auth/local
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYzNjIxOTE1LCJleHAiOjE2NjYyMTM5MTV9.o7snA8KbWVnpDt3uI_uZ2R-h9-rP30yKRTKd-uHsQUg


function HomePage () {


    return (
        <>
            <div className="homepage">
                <div className="menu">
                    <Header link="/auth" />
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