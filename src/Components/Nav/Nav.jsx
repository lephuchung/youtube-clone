import React from "react";
import './Nav.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';

const Nav = () => {
    return (
        <>
            <nav className="flex-div">
                <div className="nav-left flex-div">
                    <img className="menu_icon" src={menu_icon} alt="" />
                    <img className="logo" src={logo} alt="" />
                </div>

                <div className="nav-middle flex-div">
                    <input type="text" name="" id="" />
                    <img className="search_icon" src={search_icon} alt="" />
                </div>
            </nav>
        </>
    )
}

export default Nav;