import React from 'react'
import './resume.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import EducationTimeline from './education-timeline/EducationTimeline';
import WorkTimeline from './work-timeline/WorkTimeline';



function ResumeSection() {
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
                    <EducationTimeline />
                    <WorkTimeline />
                </div>
                <Button type="primary" className="view-btn">
                    Download PDF
                    <DownloadOutlined />
                </Button>
            </div>

        </section>
    )
}

export default ResumeSection
