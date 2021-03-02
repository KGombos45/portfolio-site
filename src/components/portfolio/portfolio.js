import React from 'react'
import './portfolio.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function AppPortfolio() {
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
                <div className="card-container flex row">
                    <div className="card-item-container">
                    <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1}>
                        <div className="card-item">
                            <div className="card-front">
                                <img className="card-img" src="uhone-home.jpg"></img>
                            </div>
                            <div className="card-back">

                                <div className="card-header-text">
                                    UHOne
                                        <p>Javascript/HTML/Less and AEM</p>
                                </div>
                                <div className="card-body-text">
                                        I was brought on to assist with this project, where our marketing team was working to 
                                        rebuild our UHOne site as well as convert it from Sitecore to Adobe Experience Manager (AEM).
                                    </div>
                                <Button type="primary" className="view-btn">
                                    View More
                                        <ArrowRightOutlined />
                                </Button>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                    <div className="card-item-container">
                    <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1}>
                        <div className="card-item">
                            <div className="card-front">
                                <img className="card-img" src="uhone-shop.png"></img>
                            </div>
                            <div className="card-back">

                                <div className="card-header-text">
                                    UHOne Shop
                                        <p>AngularJS/Javascript/Bootstrap/HTML/SCSS</p>
                                </div>
                                <div className="card-body-text">                                        
                                        UHOne Shop is a full-stack website built off of .Net Core/C# with Microsoft SQL Server for the back-end. Front-end utilizes AngularJS, Javascript, custom Boostrap components, HTML, and SCSS.
                                    </div>
                                <Button type="primary" className="view-btn">
                                    View More
                                        <ArrowRightOutlined />
                                </Button>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                    <div className="card-item-container">
                    <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1}>
                        <div className="card-item">
                            <div className="card-front">
                                <img className="card-img" src="portfolio.jpg"></img>
                            </div>
                            <div className="card-back">

                                <div className="card-header-text">
                                    Portfolio Site
                                        <p>Javascript/React/HTML/SCSS</p>
                                </div>
                                <div className="card-body-text">
                                        My portfolio site built from the ground up using the React.js framework, Javascript, and basic HTML and SCSS styling.
                                    </div>
                                <Button type="primary" className="view-btn">
                                    View More
                                        <ArrowRightOutlined />
                                </Button>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                    <div className="card-item-container">
                    <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1}>
                        <div className="card-item">
                            <div className="card-front">
                                <img className="card-img" src="bugtracker.jpg"></img>
                            </div>
                            <div className="card-back">

                                <div className="card-header-text">
                                    Bugtracker
                                        <p>Angular/Typescript/HTML/SCSS</p>
                                </div>
                                <div className="card-body-text">
                                        A full-stack website built off of .Net Core/C# with Microsoft SQL Server for the back-end. Front-end utilizes Angular 7, Angular Material, HTML, and SCSS.
                                    </div>
                                <Button type="primary" className="view-btn">
                                    View More
                                        <ArrowRightOutlined />
                                </Button>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default AppPortfolio
