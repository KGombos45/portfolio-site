import React from 'react';
import './../resume.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { Timeline } from 'antd';

function WorkTimeline() {
    return (
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
    )
}

export default WorkTimeline
