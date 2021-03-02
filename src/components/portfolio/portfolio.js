import React from 'react'
import './portfolio.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function AppPortfolio() {
    return (

    <section className="portfolio" id="portfolio">
        <div className="body-container flex">
            <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1}>
                <div className="section-title">
                    Portfolio
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1}>
                <div className="section-title-underline" />
            </ScrollAnimation>
        </div>
    </section>

    )
}

export default AppPortfolio
