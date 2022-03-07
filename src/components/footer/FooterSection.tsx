import {Box, Button, Typography} from '@material-ui/core';
import {Link} from 'react-scroll';
import {ExpandLess} from '../../assets';
import {SectionTitles} from '../../base-components';
import {useAppData, useAppStyles, useFooterStyles} from '../../hooks';

export const FooterSection: React.FC = () => {
  const {flexContainerColumnCenter, flexContainerRowCenter} = useAppStyles();
  const {footer, scrollToTopButton, sitesButton, footnoteText, buttonIcon} = useFooterStyles();
  const {footerData} = useAppData();

  return (
    <footer className={footer}>
      <Box className={flexContainerColumnCenter}>
        <Link smooth spy duration={1000} to={SectionTitles.Home}>
          <Button className={scrollToTopButton}>
            <ExpandLess className={buttonIcon} />
          </Button>
        </Link>
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
