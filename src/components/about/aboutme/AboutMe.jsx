import React from 'react'
import './../about.scss';
import { Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import me from '../../../assets/img/me.jfif';


function AboutMe() {
    return (
        <div className="flex section-about">
        <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1}>
            <img src={me} alt="Profile Picture"></img>
            <div className="section-sub-header">
                About Me
                <div className="section-title-underline sub-header-underline" />
            </div>
            <div className="about-me-text">
                Hello, my name is Kevin Gombos. I'm a full-stack web developer with 2+ years of experience working at <a href="https://www.uhone.com/">United Healthcare</a> and <a href="https://www.optum.com/"> Optum Technology</a>. My primary focus and passion is in front-end
                web development and UI/UX. I love to build apps that are not only visually stimiluating but also highly user friendly. I also hold three degrees in philosophy, political science and my MS in Database Administration.
            </div>
            <Link to="contact" smooth={true} duraction={1000}>
                <Button type="primary" className="contact-btn">
                    Get in touch
                        <MailOutlined />
                </Button>
            </Link>
        </ScrollAnimation>
    </div>
    )
}

export default AboutMe;
