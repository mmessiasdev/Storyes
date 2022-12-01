import React from "react";
import FirtProducts from "../../componnents/containers/firstproducts/firstproducts";
import Footer from "../../componnents/containers/footer/footer";
import ForYou from "../../componnents/containers/foryou/foryou";
import Header from "../../componnents/containers/header/header";
import SideBar from "../../componnents/containers/sidebar/sidebar";
import Stories from "../../componnents/containers/stories/stories";
import AboutUs from "../../componnents/containers/aboutus/aboutus";
import './style.css';


function HomePage() {


    return (
        <>
            <div className="homepage">
                <div className="menu">
                    <Header link="/auth" />
                </div>
                <div className="centralpage">
                    <div className="left">
                        <Stories />
                        <FirtProducts />
                        <ForYou />
                    </div>
                    <div className="right">
                        <SideBar />
                    </div>
                </div>
                <div>
                    <AboutUs />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default HomePage;