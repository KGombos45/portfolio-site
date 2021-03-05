import React from 'react';
import './modal.scss';
import "animate.css/animate.compat.css";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Button } from 'antd';
import { ExportOutlined, CloseCircleOutlined } from '@ant-design/icons';
import PerfectScrollbar from 'react-perfect-scrollbar'


export const Modal = ({show, closeModal, data }) => {
    if (show) {
        console.log(show);
        return (
            <div className="modal-backdrop flex" id="modalBackDrop">
                <div className="modal-container" id="modal">
                <div className="modal-video-container">
                    <video autoPlay preload={'auto'} muted loop>
                        <source src={data.src}></source>
                    </video>
                </div>
                    <div className="modal-content">
                        <div className="modal-title">
                            {data.cardTitle}
                            <div className="modal-subtitle">
                                {data.cardSubtitle}
                            </div>
                        </div>
                        <div className="modal-body">
                            <PerfectScrollbar>
                                {data.cardBody}
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
