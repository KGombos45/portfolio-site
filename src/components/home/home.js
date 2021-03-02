import React from 'react';
import './home.scss';
import { Button } from 'antd';
import { ArrowRightOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-scroll';

function AppHome() {
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
        <section className="home flex" id="home">


            <div className="video-container">
                <video src="video.mp4" autoPlay muted loop></video>
            </div>

            <div className="flex">
                <div className="text">
                    Hello, I'm <span className="highlight">Kevin Gombos</span>.
                   <br />
                            I am a full-stack web developer.
                </div>
                <Link to="about" smooth={true} duraction ={1000}>
                    <Button type="primary" className="outline__round">
                        View My Portfolio
                        <ArrowRightOutlined/>
                    </Button>
                </Link>
                <nav className="flex navMenu hidden" id="navbar">
                    <MenuOutlined onClick={handleClick} />
                    <div className={navBarMobile ? 'menuItems-link-wrapper active' : 'menuItems-link-wrapper'}>
                        <Link className="menu-link" to="home" smooth={true} duraction ={1000} spy={true} activeClass="active">home</Link>
                        <Link className="menu-link" to="about" smooth={true} duraction ={1000} spy={true} activeClass="active">about</Link>
                        <Link className="menu-link" to="portfolio" smooth={true} duraction ={1000} spy={true} activeClass="active">portfolio</Link>
                        <Link className="menu-link" to="resume" smooth={true} duraction ={1000} spy={true} activeClass="active">resume</Link>
                        <Link className="menu-link" to="contact" smooth={true} duraction ={1000} spy={true} activeClass="active">contact</Link>
                    </div>
                </nav>
            </div>            
        </section>
    )
}

export default AppHome;