/* eslint-disable max-lines-per-function */
import 'react-perfect-scrollbar/dist/css/styles.css';
import {Box, Button, Typography} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {CloseSharp, ExitToAppSharp, GitHub} from '../../assets';
import {useAppStyles, useModalStyles, useResponsive} from '../../hooks';
import {type ModalDataType} from '../../hooks/useModal';

type ModalProps = {
  isToggled: boolean;
  isClosing: boolean;
  modalData: ModalDataType | undefined;
  close: () => void;
};

export const Modal: React.FC<ModalProps> = ({isToggled, isClosing, modalData, close}) => {
  const {link, mainButton, mainButtonRounded, secondaryButton, buttonIcon} = useAppStyles();
  const {
    modalBackDrop,
    modalBackDropClose,
    modalContainer,
    modalContainerClose,
    videoContainer,
    video,
    modalTitle,
    perfectScrollBar,
  } = useModalStyles();
  const {isMDDown} = useResponsive();
  if (isToggled && modalData !== undefined) {
    return (
      <Box
        alignItems='center'
        className={isClosing ? modalBackDropClose : modalBackDrop}
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <Box className={isClosing ? modalContainerClose : modalContainer}>
          <Box className={videoContainer}>
            <video autoPlay controls loop muted className={video} preload='auto'>
              <source src={modalData.src} />
            </video>
          </Box>
          <Box padding={3.125}>
            <Box className={modalTitle}>
              <Typography variant={isMDDown ? 'h3' : 'h2'}>{modalData.cardTitle}</Typography>
              <Typography color='secondary' variant={isMDDown ? 'h5' : 'h4'}>
                {modalData.frontEndSubtitle}
              </Typography>
              <Typography color='secondary' variant='h4'>
                {modalData.backEndSubtitle}
              </Typography>
              <Box display='flex' flexDirection='row' flexWrap='wrap' marginY={1}>
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
              </Box>
            </Box>
            <Box marginBottom={2} marginTop={3.75}>
              <PerfectScrollbar className={perfectScrollBar}>
                <Typography paragraph>{modalData.cardBody}</Typography>
                <Typography paragraph>{modalData.modalBody}</Typography>
                {modalData.originalLink && (
                  <Box>
                    Click here to view{' '}
                    <a href={modalData.originalLink} rel='noreferrer' target='_blank'>
                      Indie Coffee Roaster's Website
                    </a>
                    , the inspiration for the recreation.
                  </Box>
                )}
              </PerfectScrollbar>
            </Box>
            <Box>
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
          </Box>
        </Box>
      </Box>
    );
  }
  return null;
};
