import React from "react";
import './header.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs'

const Header = () => {
    return <>
        <div className="header">
            <div className="logo"><h1>Storyes</h1></div>
            <div className="input"><AiOutlineSearch size={32} />
                <div className="cont"></div>
            </div>
            <div className="account">
                <h3>M. Messias</h3>
                <BsFillPersonFill size={32} />
            </div>
        </div>
    </>
}

export default Header;