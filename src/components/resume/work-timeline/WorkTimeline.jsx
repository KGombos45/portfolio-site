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
                            United Healthcare/Optum Tech
                    </div>
                        <div className="timeframe-text">
                            January 2019 - Present
                    </div>
                        <ul>
                            <li className="work-title">Software Engineer
                            <ul>
                                    <li>Helped rebuild the front-end/UI of UHOne.com and assisted the conversion from Sitecore to Adobe Experience Manager (AEM)</li>
                                    <li>Implemented modern UI enhancements to UHOne.com/shop working alongside our UI/UX designer</li>
                                    <li>Extensive work with AngularJS, .NET Core, and Microsoft SQL Server</li>
                                    <li>Experience working with RESTful web API’s and large datasets</li>
                                    <li>Assisted with the implementation of newly configured microservices</li>
                                    <li>Worked with large and small dev teams in an Agile software development lifecycle</li>
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
