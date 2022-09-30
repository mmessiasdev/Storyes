import React from "react";
import Apresentation from "../../componnents/apresentation/apresentation";
import ForYou from "../../componnents/foryou/foryou";
import Header from "../../componnents/header/header";
import Stories from "../../componnents/stories/stories";
import './homepage.css';

// http://localhost:1337/api/products
// http://localhost:1337/api/auth/local
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYzNjIxOTE1LCJleHAiOjE2NjYyMTM5MTV9.o7snA8KbWVnpDt3uI_uZ2R-h9-rP30yKRTKd-uHsQUg


const HomePage = () => {
    return (
        <>
            <div className="homepage">
                <div className="menu">
                    <Header />
                </div>
                <div className="left">
                    <Stories />
                    <Apresentation/>
                    <ForYou/>
                </div>
                <div className="right">

                </div>
            </div>
        </>
    )
}

export default HomePage;