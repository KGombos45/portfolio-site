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
                {/* <Particles className="particles"
                    params={{
                        "particles": {
                            "number": {
                                "value": 60,
                                "density": {
                                    "enable": true,
                                    "value_area": 800
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 25,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 6,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": true,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} /> */}
            </div>

            <div className="flex">
                <div className="text">
                    Hello, I'm <span className="highlight">Kevin Gombos</span>.
                   <br />
                            I am a full-stack web developer.
                </div>
                <Link to="about" smooth={true} duraction={1000}>
                    <Button type="primary" className="outline__round">
                        View My Portfolio
                        <ArrowRightOutlined />
                    </Button>
                </Link>
                <Navbar />
            </div>
        </section>
    )
}

export default AppHome;