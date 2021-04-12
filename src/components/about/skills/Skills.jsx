import React from 'react'
import './../about.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import angularImg from '../../../assets/img/angular.png';
import reactImg from '../../../assets/img/react.svg';
import javaScriptImg from '../../../assets/img/javascript.svg';
import typeScriptImg from '../../../assets/img/typescript.svg';
import jqueryImg from '../../../assets/img/jquery.png';
import htmlImg from '../../../assets/img/html5.png';
import cssImg from '../../../assets/img/css3.png';
import nodeJS from '../../../assets/img/node.png';
import cSharp from '../../../assets/img/csharp.svg';
import netCore from '../../../assets/img/netcore.png';
import sqlServerImg from '../../../assets/img/sqlserver.svg';
import oracleImg from '../../../assets/img/oracle.svg';


function Skills() {

    const Data = [
        {
            "src": angularImg,
            "alt": "Angular",
            "text": "Angular and AngularJS"
        },
        {
            "src": reactImg,
            "alt": "React.js",
            "text": "React.js"
        },
        {
            "src": javaScriptImg,
            "alt": "JavaScript",
            "text": "JavaScript"
        },
        {
            "src": typeScriptImg,
            "alt": "TypeScript",
            "text": "TypeScript"
        },
        {
            "src": jqueryImg,
            "alt": "JQuery",
            "text": "JQuery"
        },
        {
            "src": htmlImg,
            "alt": "HTML5",
            "text": "HTML5"
        },
        {
            "src": cssImg,
            "alt": "CSS3",
            "text": "CSS3"
        },
        {
            "src": nodeJS,
            "alt": "Node.js",
            "text": "Node.js"
        },
        {
            "src": cSharp,
            "alt": "C#",
            "text": "C#"
        },
        {
            "src": netCore,
            "alt": ".Net Core",
            "text": ".Net Core"
        },
        {
            "src": sqlServerImg,
            "alt": "SQLServer",
            "text": "MS SQLServer"
        },
        {
            "src": oracleImg,
            "alt": "Oracle",
            "text": "Oracle"
        }

    ];

    return (
        <div className="flex section-skills">
            <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1}>

                <div className="section-sub-header">
                    Skills
                <div className="section-title-underline sub-header-underline" />
                </div>
                <div className="skills-area row">
                    {
                        Data.map((item, index) => (
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

export default Skills;
