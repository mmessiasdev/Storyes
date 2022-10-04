import React from "react";
import './footer.css';
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <div className="footer" id="footer">
                <div className="title">
                    <h1>Storyes</h1>
                    <h3>Desenvolvido por @mmessiasdev</h3>
                </div>
                <div className="mmessiasdev">
                    <div className="social">
                        <AiOutlineGithub />
                        <AiFillInstagram />
                        <AiFillYoutube />
                        <AiFillLinkedin />
                    </div>
                    <h4>@mmessiasdev</h4>
                </div>
            </div>
        </>
    );
}

export default Footer;