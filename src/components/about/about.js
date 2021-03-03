import React from 'react';
import './about.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-scroll';


function AppAbout() {
    return (

            <section className="about" id="about">
                <div className="body-container flex">
                    
                        <div className="section-title">
                        <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1}>
                            About
                            </ScrollAnimation>
                        </div>
                    <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1}>
                        <div className="section-title-underline" />
                    </ScrollAnimation>
                    <div className="about-container flex row">
                       
                            <div className="flex section-about">
                            <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1}>
                                <img src="me.jfif" alt="Profile Picture"></img>
                                <div className="section-sub-header">
                                    About Me
                                    <div className="section-title-underline sub-header-underline" />
                                </div>        
                                <div className="about-me-text">
                                    Hello, my name is Kevin Gombos. I'm a full-stack web developer with 2+ years of experience working at <a href="https://www.uhone.com/">United Healthcare</a> and <a href="https://www.optum.com/"> Optum Technology</a>. My primary focus and passion is in front-end
                                    web development and UI/UX. I love to build apps that are not only visual stimiluating but also highly user friendly. I also hold three degrees in philosophy, political science and my MS in Database Administration.
                                </div>
                                <Link to="contact" smooth={true} duraction ={1000}>
                                        <Button type="primary" className="contact-btn">
                                            Get in touch
                                            <MailOutlined/>
                                        </Button>
                                    </Link>
                                    </ScrollAnimation>
                            </div>

                            <div className="flex section-skills">
                            <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1}>

                                <div className="section-sub-header">
                                    Skills
                                    <div className="section-title-underline sub-header-underline" />
                                </div>
                                <div className="skills-area row">
                                    <span>
                                        <img src="angular.png" alt="Angular"></img>
                                        Angular and <br></br>AngularJS
                                    </span>
                                                                   
                                    <span>                                        
                                        <img src="react.svg" alt="React"></img>
                                        React.js
                                    </span>

                                    <span>
                                        <img src="javascript.svg" alt="Javascript"></img>
                                        Javascript
                                    </span>

                                    <span>
                                        <img src="typescript.svg" alt="Typescript"></img>
                                        Typescript
                                    </span>

                                    <span>
                                        <img src="jquery.png" alt="JQuery"></img>
                                        JQuery
                                    </span>

                                    <span>
                                        <img src="html5.png" alt="HTML5"></img>
                                        HTML5
                                    </span>

                                    <span>
                                        <img src="css3.png" alt="CSS3"></img>
                                        CSS3
                                    </span>
                                    
                                    <span>
                                        <img src="sqlserver.svg" alt="SQLServer"></img>
                                        Microsoft SQLServer
                                    </span>

                                    <span>
                                        <img src="oracle.svg" alt="Oracle"></img>
                                        Oracle
                                    </span>

                                    <div className="skills-text">
                                        And much more, with experience in back-end development with Microsoft Visual Studio. This includes C#/.Net, Java, C, C++. 
                                    </div>

                                </div>
                                </ScrollAnimation>

                            </div>
                        </div>
                </div>
            </section>

    )
}

export default AppAbout;
