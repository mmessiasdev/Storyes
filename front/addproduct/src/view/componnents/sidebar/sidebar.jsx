import React from "react";
import './sidebar.css'

const SideBar = () => {
    return(
        <>
            <div className="sidebar">
                <div className="bar">
                </div>
                <div className="sidenumber">
                    <a href="#apresentation"><h2>- Popular</h2></a>
                    <a href="#foryou"><h2>- For You</h2></a>
                    <a href="#aboutus"><h2>- About us</h2></a>
                    <a href="/"><h2>- Footer</h2></a>
                </div>
            </div>
        </>
    )
}

export default SideBar;