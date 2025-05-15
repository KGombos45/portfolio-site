/* eslint-disable max-lines-per-function */
import 'react-perfect-scrollbar/dist/css/styles.css';
import {Box, Button, Typography} from '@mui/material';
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
  const {classes: appClasses} = useAppStyles();
  const {classes, cx} = useModalStyles();
  const {isLGDown} = useResponsive();
  if (isToggled && modalData !== undefined) {
    return (
      <Box
        alignItems='center'
        className={cx(classes.modalBackDrop, {[classes.modalBackDropClose]: isClosing})}
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <Box className={cx(classes.modalContainer, {[classes.modalContainerClose]: isClosing})}>
          <Box className={classes.videoContainer}>
            <video autoPlay controls loop muted className={classes.video} preload='auto'>
              <source src={modalData.src} />
            </video>
          </Box>
          <Box padding={3.125}>
            <Box className={classes.modalTitle}>
              <Typography variant={isLGDown ? 'h3' : 'h2'}>{modalData.cardTitle}</Typography>
              <Typography color='secondary' variant={isLGDown ? 'h5' : 'h4'}>
                {modalData.frontEndSubtitle}
              </Typography>
              <Typography color='secondary' variant={isLGDown ? 'h5' : 'h4'}>
                {modalData.backEndSubtitle}
              </Typography>
              <Box display='flex' flexDirection='row' flexWrap='wrap' marginY={1}>
                {modalData.repositoryLink && (
                  <a
                    className={appClasses.link}
                    href={modalData.repositoryLink}
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Button className={appClasses.secondaryButton} type='button'>
                      View Repository
                      <GitHub className={appClasses.buttonIcon} />
                    </Button>
                  </a>
                )}
                {modalData.backEndRepositoryLink && (
                  <a
                    className={appClasses.link}
                    href={modalData.backEndRepositoryLink}
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Button className={appClasses.secondaryButton} type='button'>
                      Back End Repository
                      <GitHub className={appClasses.buttonIcon} />
                    </Button>
                  </a>
                )}
                {modalData.frontEndRepositoryLink && (
                  <a
                    className={appClasses.link}
                    href={modalData.frontEndRepositoryLink}
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Button className={appClasses.secondaryButton} type='button'>
                      Front End Repository
                      <GitHub className={appClasses.buttonIcon} />
                    </Button>
                  </a>
                )}
              </Box>
            </Box>
            <Box marginBottom={2} marginTop={3.75}>
              <PerfectScrollbar className={classes.perfectScrollBar}>
                <Typography>{modalData.cardBody}</Typography>
                <Typography>{modalData.modalBody}</Typography>
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
              <a className={appClasses.link} href={modalData.link} rel='noreferrer' target='_blank'>
                <Button className={appClasses.mainButton} type='button'>
                  View Site
                  <ExitToAppSharp className={appClasses.buttonIcon} />
                </Button>
              </a>
              <Button className={appClasses.mainButtonRounded} onClick={() => close()}>
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
