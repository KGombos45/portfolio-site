import React from 'react';
import './about.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import AboutMe from './aboutme/AboutMe';
import Skills from './skills/Skills';



function AboutSection() {
    
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
                       
                        <AboutMe />
                        <Skills />

                    </div>
                </div>
            </section>

    )
}

export default AboutSection;
