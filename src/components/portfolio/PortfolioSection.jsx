import React from 'react'
import './portfolio.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Card from './card/Card';

function PortfolioSection() {
    return (

        <section className="portfolio" id="portfolio">
            <div className="body-container flex">

                <div className="section-title">
                    <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1}>
                        Portfolio
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1}>
                    <div className="section-title-underline" />
                </ScrollAnimation>

                <Card />
            </div>
        </section>

    )
}

export default PortfolioSection
