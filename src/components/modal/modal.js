import React from 'react';
import './modal.scss';
import "animate.css/animate.compat.css";
import { Button } from 'antd';
import { ExportOutlined, CloseCircleOutlined } from '@ant-design/icons';


export const Modal = ({show, closeModal, data }) => {
    if (show) {
        console.log(show);
        return (
            <div className="modal-backdrop flex" id="modalBackDrop">
                <div className="modal-container" id="modal">
                <div className="modal-video-container">
                    <video src={data.src} autoPlay muted loop></video>
                </div>
                    <div className="modal-content">
                        <div className="modal-title">
                            {data.cardTitle}
                            <div className="modal-subtitle">
                                {data.cardSubtitle}
                            </div>
                        </div>
                        <div className="modal-body">
                            {data.cardBody}
                        </div>
                        <div className="modal-footer">
                            <a href={data.link} target="_blank">
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
