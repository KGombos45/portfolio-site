import React from 'react'
import './contact.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AppContact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_86m9zqq', 'template_9smier7', e.target, 'user_riigRc7g9Tt3dpEWepHtq')
          .then((result) => {
              toast.success("Email sent succesfully! Thanks for reaching out!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
              e.target.reset();
          }, (error) => {
              toast.error("An error occured sending your email, feel free to contact me at: gomboskevin@gmail.com. Thank you!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          });
        }


    return (

        <section className="contact" id="contact">
        <ToastContainer />
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
                <form className="contact-form" onSubmit={sendEmail}>
                    <input className="input-box" type="text" placeholder="Name" name="name" required></input>
                    <input className="input-box" type="email" placeholder="Email" name="email" required></input>
                    <textarea className="input-box-textarea" type="text" placeholder="Enter your message here..." name="subject" required></textarea>
                    <input type="submit" className="submit-btn" value="Submit"></input>
                </form>
            </ScrollAnimation>
        </div>
    </section>
    )
}

