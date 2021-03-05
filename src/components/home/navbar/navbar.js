import React from 'react'
import './../home.scss';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

function Navbar() {

    const [navBarMobile, setVisibility] = useState(false);   

    const showNavBar = () => {
        var navbar = document.getElementById("navbar");  
        var home = document.getElementById("home");

        if (window.scrollY > 1 && window.scrollY <= home.clientHeight && navbar.classList.contains("hidden")) {
            navbar.classList.remove("hidden");
        } else if (window.scrollY >= home.clientHeight && !navbar.classList.contains("hidden")) {
            navbar.classList.add("sticky");
        } else if (window.scrollY <= home.clientHeight && navbar.classList.contains("sticky")) {
            navbar.classList.remove("sticky");
            navbar.classList.add("hidden");
        } 

    };

    const handleClick = () => {
        setVisibility(!navBarMobile)
    };

    window.addEventListener('scroll', showNavBar);

    return (
        <nav className="flex navMenu hidden" id="navbar">
        <div className="hamburger-icon-container" onClick={handleClick}>
            { !navBarMobile ? <MenuOutlined/> : null }
            { navBarMobile ? <CloseOutlined /> : null }
        </div>
        <div className={navBarMobile ? 'menuItems-link-wrapper active' : 'menuItems-link-wrapper'}>
            <Link className="menu-link" to="home" smooth={true} duraction ={1000} spy={true} activeClass="active">home</Link>
            <Link className="menu-link" to="about" smooth={true} duraction ={1000} spy={true} activeClass="active">about</Link>
            <Link className="menu-link" to="portfolio" smooth={true} duraction ={1000} spy={true} activeClass="active">portfolio</Link>
            <Link className="menu-link" to="resume" smooth={true} duraction ={1000} spy={true} activeClass="active">resume</Link>
            <Link className="menu-link" to="contact" smooth={true} duraction ={1000} spy={true} activeClass="active">contact</Link>
        </div>
    </nav>
    )
}

export default Navbar;