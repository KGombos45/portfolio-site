import React from 'react';
import './modal.scss';
import "animate.css/animate.compat.css";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Button } from 'antd';
import { ExportOutlined, CloseCircleOutlined, GithubOutlined } from '@ant-design/icons';
import PerfectScrollbar from 'react-perfect-scrollbar'


export const Modal = ({ show, closeModal, data }) => {
    if (show) {
        return (
            <div className="modal-backdrop flex" id="modalBackDrop">
                <div className="modal-container" id="modal">
                    <div className="modal-video-container">
                        <video autoPlay preload={'auto'} muted loop controls>
                            <source src={data.src}></source>
                        </video>
                    </div>
                    <div className="modal-content">
                        <div className="modal-title">
                            {data.cardTitle}
                            <div className="modal-subtitle">
                                <p>{data.frontEndSubtitle}</p>
                                <p>{data.backEndSubtitle}</p>
                                <div className="repo-btns-wrapper">
                                {data.repositoryLink && <a href={data.repositoryLink} target="_blank" rel="noreferrer">
                                        <Button type="primary" className="repo-btn">
                                            View Repository
                                            <GithubOutlined />
                                        </Button>
                                    </a>}
                                    {data.backEndRepositoryLink && <a href={data.backEndRepositoryLink} target="_blank" rel="noreferrer">
                                        <Button type="primary" className="repo-btn">
                                            Back End Repository
                                            <GithubOutlined />
                                        </Button>
                                    </a>}
                                    {data.frontEndRepositoryLink && <a href={data.frontEndRepositoryLink} target="_blank" rel="noreferrer">
                                        <Button type="primary" className="repo-btn">
                                            Front End Repository
                                            <GithubOutlined />
                                        </Button>
                                    </a>}
                                </div>

                            </div>
                        </div>
                        <div className="modal-body">
                            <PerfectScrollbar>
                                <p>{data.cardBody}</p>
                                <p>{data.modalBody}</p>
                                { data.originalLink && <p>Click here to view <a href={data.originalLink} target="_blank" rel="noreferrer">Indie Coffee Roaster's Website</a>, the inspiration for the recreation.</p> }
                            </PerfectScrollbar>
                        </div>
                        <div className="modal-footer">
                            <a href={data.link} target="_blank" rel="noreferrer">
                                <Button type="primary" className="viewSite-btn">
                                    View Site
                                    <ExportOutlined />
                                </Button>
                            </a>
                            <div className="exit-icon" onClick={closeModal}>
                                <CloseCircleOutlined />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    } else {
        return null;
    }

}

export default Modal;
