import React from 'react';
import './home.scss';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useState } from 'react';

function AppHome() {
    const [navbar, setNavbar] = useState(false);   

    const showNavBar = () => {
        var navbar = document.getElementById("navbar");  
        var home = document.getElementById("home");

        if (window.scrollY > 1 && window.scrollY <= home.clientHeight && navbar.classList.contains("hidden")) {
            navbar.classList.remove("hidden");
        } else if (window.scrollY > home.clientHeight && !navbar.classList.contains("hidden")) {
            navbar.classList.add("sticky");
        } else if (window.scrollY < home.clientHeight && navbar.classList.contains("sticky")) {
            navbar.classList.remove("sticky");
            navbar.classList.add("hidden");
        } 
        
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
                <Button type="primary" className="outline__round">
                    View My Portfolio
                    <ArrowRightOutlined />
                </Button>
                <nav className="flex navMenu hidden" id="navbar">
                    <div className="menuItems-link-wrapper">
                        <div className="menu-link active" to="home">home</div>
                        <div className="menu-link" to="about">about</div>
                        <div className="menu-link">portfolio</div>
                        <div className="menu-link">resume</div>
                        <div className="menu-link">contact</div>
                    </div>
                </nav>
            </div>            
        </section>
    )
}

export default AppHome;