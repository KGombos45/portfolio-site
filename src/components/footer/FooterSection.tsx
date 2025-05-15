import {Box, Button, Typography} from '@mui/material';
import {Link} from 'react-scroll';
import {ExpandLess} from '../../assets';
import {SectionTitles} from '../../base-components';
import {useAppData, useAppStyles, useFooterStyles} from '../../hooks';

export const FooterSection: React.FC = () => {
  const {classes: appClasses} = useAppStyles();
  const {classes} = useFooterStyles();
  const {footerData} = useAppData();

  return (
    <footer className={classes.footer}>
      <Box className={appClasses.flexContainerColumnCenter}>
        <Link smooth spy duration={1000} to={SectionTitles.Home}>
          <Button className={classes.scrollToTopButton}>
            <ExpandLess className={classes.buttonIcon} />
          </Button>
        </Link>
      </Box>
      <Box className={appClasses.flexContainerRowCenter}>
        {footerData.map(item => (
          <a key={item.alt} href={item.src}>
            <Button className={classes.sitesButton}>
              <item.logo />
            </Button>
          </a>
        ))}
      </Box>
      <Box marginTop={3.125} width='100%'>
        <Typography className={classes.footnoteText}>KEVIN GOMBOS ©{new Date().getFullYear()}</Typography>
      </Box>
    </footer>
  );
};
