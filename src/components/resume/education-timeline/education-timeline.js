import React from 'react';
import './../resume.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { Timeline } from 'antd';


function EducationTimeline() {
    return (
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
                            <li>Bachelor of Arts in Political Science</li>
                        </ul>

                    </Timeline.Item>
                </Timeline>
            </ScrollAnimation>
        </div>
    )
}

export default EducationTimeline
