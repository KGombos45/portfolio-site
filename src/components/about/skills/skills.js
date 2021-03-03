import React, { Component } from 'react'
import './../about.scss';
import ScrollAnimation from 'react-animate-on-scroll';


class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Data: [
                {
                    "src": "angular.png",
                    "alt": "Angular",
                    "text": "Angular and AngularJS"
                },
                {
                    "src": "react.svg",
                    "alt": "React.js",
                    "text": "React.js"
                },
                {
                    "src": "javascript.svg",
                    "alt": "Javascript",
                    "text": "Javascript"
                },
                {
                    "src": "typescript.svg",
                    "alt": "Typescript",
                    "text": "Typescript"
                },
                {
                    "src": "jquery.png",
                    "alt": "JQuery",
                    "text": "JQuery"
                },
                {
                    "src": "html5.png",
                    "alt": "HTML5",
                    "text": "HTML5"
                },
                {
                    "src": "css3.png",
                    "alt": "CSS3",
                    "text": "CSS3"
                },
                {
                    "src": "sqlserver.svg",
                    "alt": "SQLServer",
                    "text": "MS SQLServer"
                },
                {
                    "src": "oracle.svg",
                    "alt": "Oracle",
                    "text": "Oracle"
                }

            ]
        }
    }

    render() {
        return (
            <div className="flex section-skills">
                <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1}>

                    <div className="section-sub-header">
                        Skills
                <div className="section-title-underline sub-header-underline" />
                    </div>
                    <div className="skills-area row">
                        {
                            this.state.Data.map((item, index) => (
                                <span>
                                    <img src={item.src} alt={item.alt}></img>
                                    {item.text}
                                </span>

                            ))
                        }

                        <div className="skills-text">
                            And much more, with experience in back-end development with Microsoft Visual Studio. This includes C#/.Net, Java, C, C++.
                </div>

                    </div>
                </ScrollAnimation>

            </div>
        )

    }
}

export default Skills;
