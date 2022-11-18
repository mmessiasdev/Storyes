import React from "react";
import AboutUs from "../../componnents/aboutus/aboutus";
import FirtProducts from "../../componnents/firstproducts";
import Footer from "../../componnents/footer/footer";
import ForYou from "../../componnents/foryou/foryou";
import Header from "../../componnents/header/header";
import SideBar from "../../componnents/sidebar/sidebar";
import Stories from "../../componnents/stories/stories";
import './homepage.css';


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