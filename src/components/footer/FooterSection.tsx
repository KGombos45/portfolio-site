import {Box, Button, Typography} from '@material-ui/core';
import {ExpandLess} from '../../assets';
import {useAppData, useAppStyles, useFooterStyles} from '../../hooks';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
  };

  const {flexContainerColumnCenter, flexContainerRowCenter} = useAppStyles();
  const {footer, scrollToTopButton, sitesButton, footnoteText, buttonIcon} = useFooterStyles();
  const {footerData} = useAppData();

  return (
    <footer className={footer}>
      <Box className={flexContainerColumnCenter}>
        <Button className={scrollToTopButton} onClick={() => scrollToTop()}>
          <ExpandLess className={buttonIcon} />
        </Button>
      </Box>

      <Box className={flexContainerRowCenter}>
        {footerData.map(item => (
          <a key={item.alt} href={item.src}>
            <Button className={sitesButton}>
              <item.logo />
            </Button>
          </a>
        ))}
      </Box>
      <Box marginTop={3.125} width='100%'>
        <Typography className={footnoteText}>KEVIN GOMBOS ©2021</Typography>
      </Box>
    </footer>
  );
};
