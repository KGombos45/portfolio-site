import React from 'react'
import './../home.scss';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

function Navbar() {

    const [navBarMobile, setMobile] = useState(false);
    const [showHidenNavbar, setShowHide] = useState(false);
    const [stickyNavBar, setSticky] = useState(false);

    const showNavBar = () => {

        if (window.pageYOffset > 1 && window.pageYOffset <= window.screen.height - 1) {
            setShowHide(false);
            setSticky(false);
        } else if (window.pageYOffset >= window.screen.height) {
            setSticky(true);
            setShowHide(false);
        }

    };

    const handleClick = () => {
        setMobile(!navBarMobile)
    };

    window.addEventListener('scroll', showNavBar);

    return (
        <nav className={stickyNavBar ? "flex navMenu sticky" : showHidenNavbar ? "flex navMenu hidden" : "flex navMenu"} id="navbar">
            <div className="logo">
                <img src="logo.svg"></img>
            </div>
            <div className="hamburger-icon-container" onClick={handleClick}>
                {!navBarMobile ? <MenuOutlined /> : null}
                {navBarMobile ? <CloseOutlined /> : null}
            </div>
            <div className={navBarMobile ? 'menuItems-link-wrapper active' : 'menuItems-link-wrapper'}>

                <Link className="menu-link" to="home" smooth={true} duraction={1000} spy={true} activeClass="active">home</Link>
                <Link className="menu-link" to="about" smooth={true} duraction={1000} spy={true} activeClass="active">about</Link>
                <Link className="menu-link" to="portfolio" smooth={true} duraction={1000} spy={true} activeClass="active">portfolio</Link>
                <Link className="menu-link" to="resume" smooth={true} duraction={1000} spy={true} activeClass="active">resume</Link>
                <Link className="menu-link" to="contact" smooth={true} duraction={1000} spy={true} activeClass="active">contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;