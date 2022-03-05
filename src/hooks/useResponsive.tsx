import {useMediaQuery, useTheme} from '@material-ui/core';

export const useResponsive = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isXS = useMediaQuery(theme.breakpoints.down('xs'));
  const isSM = useMediaQuery(theme.breakpoints.only('sm'));
  const isSMUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isSMDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isMD = useMediaQuery(theme.breakpoints.only('md'));
  const isMDUp = useMediaQuery(theme.breakpoints.up('md'));
  const isMDDown = useMediaQuery(theme.breakpoints.down('md'));
  const isLG = useMediaQuery(theme.breakpoints.only('lg'));
  const isLGUp = useMediaQuery(theme.breakpoints.up('lg'));
  const isLGDown = useMediaQuery(theme.breakpoints.down('lg'));
  const isXL = useMediaQuery(theme.breakpoints.only('xl'));
  const isXLUp = useMediaQuery(theme.breakpoints.up('xl'));

  return {
    isMobile,
    isDesktop,
    isXS,
    isSM,
    isSMUp,
    isSMDown,
    isMD,
    isMDUp,
    isMDDown,
    isLG,
    isLGUp,
    isLGDown,
    isXL,
    isXLUp,
  };
};
