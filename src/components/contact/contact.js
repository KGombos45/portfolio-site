import React from 'react'
import './contact.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button } from 'antd';

function AppContact() {
    return (

        <section className="contact" id="contact">
        <div className="body-container flex">
            <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1}>
                <div className="section-title">
                    Contact
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1}>
                        <div className="section-title-underline" />
                    </ScrollAnimation>
            <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1}>
                <div className="section-sub-title">
                    Want to work together or have a question? Reach out!
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='slideInUp' initiallyVisible={false} animateOnce={true} duration={1}>
                <form className="contact-form">
                    <input type="text" placeholder="Name" required></input>
                    <input type="email" placeholder="Email" required></input>
                    <textarea type="text" placeholder="Enter your message here..." required></textarea>
                    <Button type="primary" className="submit-btn">
                        Submit
                    </Button>
                </form>
            </ScrollAnimation>
        </div>
    </section>
    )
}

export default AppContact
