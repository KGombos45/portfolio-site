import './modal.scss';
import 'animate.css/animate.compat.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {Box, Button} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {CloseSharp, ExitToAppSharp, GitHub} from '../../assets';
import {useAppStyles} from '../../hooks';
import {type ModalDataType} from '../../hooks/useModal';

type ModalProps = {
  isToggled: boolean;
  isClosing: boolean;
  modalData: ModalDataType | undefined;
  close: () => void;
};

export const Modal: React.FC<ModalProps> = ({isToggled, isClosing, modalData, close}) => {
  const {link, mainButton, mainButtonRounded, secondaryButton, buttonIcon} = useAppStyles();
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
                    <a
                      className={link}
                      href={modalData.repositoryLink}
                      rel='noreferrer'
                      target='_blank'
                    >
                      <Button className={secondaryButton} type='button'>
                        View Repository
                        <GitHub className={buttonIcon} />
                      </Button>
                    </a>
                  )}
                  {modalData.backEndRepositoryLink && (
                    <a
                      className={link}
                      href={modalData.backEndRepositoryLink}
                      rel='noreferrer'
                      target='_blank'
                    >
                      <Button className={secondaryButton} type='button'>
                        Back End Repository
                        <GitHub className={buttonIcon} />
                      </Button>
                    </a>
                  )}
                  {modalData.frontEndRepositoryLink && (
                    <a
                      className={link}
                      href={modalData.frontEndRepositoryLink}
                      rel='noreferrer'
                      target='_blank'
                    >
                      <Button className={secondaryButton} type='button'>
                        Front End Repository
                        <GitHub className={buttonIcon} />
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
            <Box className='modal-footer'>
              <a className={link} href={modalData.link} rel='noreferrer' target='_blank'>
                <Button className={mainButton} type='button'>
                  View Site
                  <ExitToAppSharp className={buttonIcon} />
                </Button>
              </a>
              <Button className={mainButtonRounded} onClick={() => close()}>
                <CloseSharp />
              </Button>
            </Box>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
