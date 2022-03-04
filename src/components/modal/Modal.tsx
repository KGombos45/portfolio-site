import './modal.scss';
import 'animate.css/animate.compat.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {Button} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {CloseSharp, ExitToAppSharp, GitHub} from '../../assets';
import {type ModalDataType} from '../../hooks/useModal';

type ModalProps = {
  isToggled: boolean;
  isClosing: boolean;
  modalData: ModalDataType | undefined;
  close: () => void;
};

export const Modal: React.FC<ModalProps> = ({isToggled, isClosing, modalData, close}) => {
  if (isToggled && modalData !== undefined) {
    return (
      <div
        className={isClosing ? 'modal-backdrop flex close' : 'modal-backdrop flex'}
        id='modalBackDrop'
      >
        <div className={isClosing ? 'modal-container close' : 'modal-container'} id='modal'>
          <div className='modal-video-container'>
            <video autoPlay controls loop muted preload='auto'>
              <source src={modalData.src} />
            </video>
          </div>
          <div className='modal-content'>
            <div className='modal-title'>
              {modalData.cardTitle}
              <div className='modal-subtitle'>
                <p>{modalData.frontEndSubtitle}</p>
                <p>{modalData.backEndSubtitle}</p>
                <div className='repo-btns-wrapper'>
                  {modalData.repositoryLink && (
                    <a href={modalData.repositoryLink} rel='noreferrer' target='_blank'>
                      <Button className='repo-btn' type='button'>
                        View Repository
                        <GitHub />
                      </Button>
                    </a>
                  )}
                  {modalData.backEndRepositoryLink && (
                    <a href={modalData.backEndRepositoryLink} rel='noreferrer' target='_blank'>
                      <Button className='repo-btn' type='button'>
                        Back End Repository
                        <GitHub />
                      </Button>
                    </a>
                  )}
                  {modalData.frontEndRepositoryLink && (
                    <a href={modalData.frontEndRepositoryLink} rel='noreferrer' target='_blank'>
                      <Button className='repo-btn' type='button'>
                        Front End Repository
                        <GitHub />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className='modal-body'>
              <PerfectScrollbar>
                <p>{modalData.cardBody}</p>
                <p>{modalData.modalBody}</p>
                {modalData.originalLink && (
                  <p>
                    Click here to view{' '}
                    <a href={modalData.originalLink} rel='noreferrer' target='_blank'>
                      Indie Coffee Roaster's Website
                    </a>
                    , the inspiration for the recreation.
                  </p>
                )}
              </PerfectScrollbar>
            </div>
            <div className='modal-footer'>
              <a href={modalData.link} rel='noreferrer' target='_blank'>
                <Button className='viewSite-btn' type='button'>
                  View Site
                  <ExitToAppSharp />
                </Button>
              </a>
              <Button className='exit-icon' onClick={() => close()}>
                <CloseSharp />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
