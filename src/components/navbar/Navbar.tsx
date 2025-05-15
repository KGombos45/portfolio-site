/* eslint-disable no-nested-ternary */
import {useEffect, useState} from 'react';
import {Link} from 'react-scroll';
import {CloseSharp, MenuSharp, SiteLogo} from '../../assets';
import {Image, SectionTitles} from '../../base-components';
import {useNavbarStyles, useResponsive} from '../../hooks';
import {Box} from '@mui/material';

export const Navbar: React.FC = () => {
  const {classes, cx} = useNavbarStyles();
  const [navBarOpen, setIsNavbarOpen] = useState(false);
  const {isLGUp} = useResponsive();

  useEffect(() => {
    if (navBarOpen && isLGUp) {
      setIsNavbarOpen(false);
    }
  }, [navBarOpen, isLGUp]);

  return (
    <nav className={classes.navMenu} id='navbar'>
      <Box className={classes.logo}>
        <Image alt='site logo' src={SiteLogo} />
      </Box>
      <Box className={classes.iconContainer} onClick={() => setIsNavbarOpen(!navBarOpen)}>
        {!navBarOpen ? (
          <MenuSharp className={classes.iconStyle} />
        ) : (
          <CloseSharp className={classes.iconStyle} />
        )}
      </Box>
      <Box className={cx(classes.menuItemsWrapper, {[classes.menuItemsWrapperActive]: navBarOpen})}>
        {Object.values(SectionTitles).map(title => (
          <Link
            key={title}
            smooth
            spy
            activeClass={classes.activeLink}
            className={classes.link}
            duration={1000}
            to={title}
          >
            {title}
          </Link>
        ))}
      </Box>
    </nav>
  );
};
