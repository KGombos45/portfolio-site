import React from 'react'
import './footer.scss';
import { LinkedinOutlined, GithubOutlined, InstagramOutlined, UpCircleOutlined } from '@ant-design/icons';


function AppFooter() {

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

    return (
        <footer>

            <div className="scroll-to-top-wrapper flex">
                <div className="scroll-to-top" onClick={scrollToTop}>
                    <UpCircleOutlined  />
                </div>   
            </div>

            <div className="icon-wrapper flex row">
                <a href="https://www.linkedin.com/in/kgombos/">
                    <div className="flex icon">
                        <LinkedinOutlined />
                    </div>
                </a>
                <a href="https://github.com/KGombos45">
                    <div className="flex icon">
                        <GithubOutlined />
                    </div>
                </a>
                <a href="https://www.instagram.com/kgombos_/">
                    <div className="flex icon">
                        <InstagramOutlined />
                    </div>
                </a>
            </div>
            <div className="footnote-wrapper">
                <div class="footnote-text">
                    KEVIN GOMBOS ©2021
                </div>
            </div>

        </footer>
    )
}

export default AppFooter
