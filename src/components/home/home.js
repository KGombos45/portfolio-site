import React from 'react';
import './home.scss';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-scroll';
import Navbar from './navbar/navbar';

function AppHome() {
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
                <Navbar />
            </div>            
        </section>
    )
}

export default AppHome;