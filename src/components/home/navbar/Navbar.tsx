/* eslint-disable no-nested-ternary */
import {Box, makeStyles} from '@material-ui/core';
import {useState} from 'react';
import './../home.scss';
import {Link} from 'react-scroll';
import {CloseSharp, MenuSharp, SiteLogo} from '../../../assets';
import {Image} from '../../../base-components';
import {useAppData} from '../../../hooks';

const useStyles = makeStyles(() => ({
  logo: {
    height: '40px',
    width: '40px',
  },
}));

export const Navbar: React.FC = () => {
  const {logo} = useStyles();
  const [navBarOpen, setIsNavbarOpen] = useState(false);
  const [showHiddenNavbar, setShowHide] = useState(false);
  const [stickyNavBar, setSticky] = useState(false);
  const {sectionIdData} = useAppData();

  const showNavBar = () => {
    // eslint-disable-next-line no-console
    console.log(window.scrollY);
    if (window.scrollY >= 0 && window.scrollY < window.screen.height) {
      setShowHide(false);
      setSticky(false);
    } else if (window.scrollY > window.screen.height) {
      setSticky(true);
      setShowHide(false);
    }
  };

  window.addEventListener('scroll', showNavBar);

  return (
    <Box>
      <nav
        className={
          stickyNavBar
            ? 'flex navMenu sticky'
            : showHiddenNavbar
            ? 'flex navMenu hidden'
            : 'flex navMenu'
        }
        id='navbar'
      >
        <Box className={logo}>
          <Image alt='site logo' src={SiteLogo} />
        </Box>
        <Box className='hamburger-icon-container' onClick={() => setIsNavbarOpen(!navBarOpen)}>
          {!navBarOpen ? <MenuSharp /> : null}
          {navBarOpen ? <CloseSharp /> : null}
        </Box>
        <Box className={navBarOpen ? 'menuItems-link-wrapper active' : 'menuItems-link-wrapper'}>
          {Object.values(sectionIdData).map(title => (
            <Link
              key={title}
              smooth
              spy
              activeClass='active'
              className='menu-link'
              duration={1000}
              to={title}
            >
              {title}
            </Link>
          ))}
        </Box>
      </nav>
    </Box>
  );
};
