import React from 'react'
import './resume.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { Timeline, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


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

            <div className="resume-container flex row">
                <div className="education-timeline">
                <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1}>
                    <div className="section-sub-header">
                        Education
                        <div className="section-title-underline sub-header-underline" />
                    </div> 
                    <Timeline>
                    <Timeline.Item>
                            <div className="school-text">
                                Depaul University - Graduate
                            </div>
                            <div className="timeframe-text">
                                January 2018 - June 2021
                            </div>
                            <ul>
                                <li>Masters of Science in Database Administration</li>
                            </ul>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="school-text">
                                Depaul University - Undergraduate
                            </div>
                            <div className="timeframe-text">
                                January 2012 - June 2016
                            </div>
                            <ul>
                                <li>Bachelor of Arts in Philosophy</li>
                                <li>Bachelor of Arts in Philosophy</li>
                            </ul>

                        </Timeline.Item>
                    </Timeline>
                    </ScrollAnimation>
                </div>
                <div className="work-timeline">
                <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1}>
                <div className="section-sub-header">
                        Work
                        <div className="section-title-underline sub-header-underline" />
                    </div> 
                <Timeline>
                        <Timeline.Item>
                            <div className="work-text">
                                United Healthcare
                            </div>
                            <div className="timeframe-text">
                                January 2019 - Present
                            </div>
                            <ul>
                                <li className="work-title">Full-stack Jr. Web Developer
                                    <ul>
                                        <li>Helped build and develop a new front-end experience for UHOne</li>
                                        <li>Developed new features for UHOne Shop</li>
                                        <li>Helped maintain and debug any current issues on the UHOne Shop site</li>
                                    </ul>
                                </li>
                            </ul>

                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="work-text">
                                Wintrust Financial
                            </div>
                            <div className="timeframe-text">
                                May 2018 - January 2019
                            </div>
                            <ul>
                                <li className="work-title">Quality Control Analyst
                                    <ul>
                                        <li>Assisted with the development of BIC reports (SAP/SQL)</li>
                                        <li>Helped build a foundation for a more efficient QC workflow process</li>
                                    </ul>
                                </li>
                            </ul>

                        </Timeline.Item>
                    </Timeline>

                </ScrollAnimation>
                </div>
            </div>
            <Button type="primary" className="view-btn">
                            Download PDF
                            <DownloadOutlined />
                        </Button>
        </div>
        
    </section>
    )
}

export default AppResume
