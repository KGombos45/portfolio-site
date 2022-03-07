import {makeStyles} from '@material-ui/core';

export const useModalStyles = makeStyles(theme => ({
  modalBackDrop: {
    height: '100vh',
    width: '100%',
    background: '#00000063',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: 1000,
    animation: 'fadeIn',
    animationDuration: '0.8s',
  },
  modalBackDropClose: {
    composes: ['$modalBackDrop'],
    animation: 'fadeOut',
    animationDuration: '0.8s',
  },
  modalContainer: {
    maxWidth: '735px',
    width: '100%',
    background: 'white',
    transition: 'all 0.8s ease-in-out',
    boxShadow: '5px 5px 15px 8px rgba(0, 0, 0, 0.3)',
    borderRadius: theme.spacing(1),
    animation: 'zoomIn',
    animationDuration: '0.8s',
    overflowY: 'auto',
  },
  modalContainerClose: {
    composes: ['$modalContainer'],
    animation: 'zoomOut',
    animationDuration: ' 0.8s',
  },
  videoContainer: {
    width: '100%',
    height: '365px',
    borderBottom: 'solid #0e9b98 3px',
    [theme.breakpoints.down('sm')]: {
      height: '265px',
    },
  },
  video: {
    height: '100%',
    width: '100%',
    objectFit: 'fill',
    borderRadius: theme.spacing(1, 1, 0, 0),
  },
  modalTitle: {
    borderBottom: '1px solid #9696967d',
  },
  perfectScrollBar: {
    [theme.breakpoints.down('md')]: {
      maxHeight: '185px',
    },
  },
}));
