import React from 'react'
import './resume.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function AppResume() {
    return (

    <section className="resume" id="resume">
        <div className="body-container flex">
            <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1}>
                <div className="section-title">
                    Resume
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1}>
                <div className="section-title-underline" />
            </ScrollAnimation>
        </div>
    </section>
    )
}

export default AppResume
