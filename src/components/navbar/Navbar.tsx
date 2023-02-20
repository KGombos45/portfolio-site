/* eslint-disable no-nested-ternary */
import {Box} from '@material-ui/core';
import {useState} from 'react';
import {Link} from 'react-scroll';
import {CloseSharp, MenuSharp, SiteLogo} from '../../assets';
import {Image, SectionTitles} from '../../base-components';
import {useNavbarStyles} from '../../hooks';

export const Navbar: React.FC = () => {
  const {
    logo,
    navMenu,
    navMenuHidden,
    navMenuSticky,
    menuItemsWrapper,
    menuItemsWrapperActive,
    link,
    activeLink,
    iconContainer,
    iconStyle,
  } = useNavbarStyles();
  const [navBarOpen, setIsNavbarOpen] = useState(false);
  const [showHiddenNavbar, setShowHide] = useState(false);
  const [stickyNavBar, setSticky] = useState(false);

  const showNavBar = () => {
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
        className={stickyNavBar ? navMenuSticky : showHiddenNavbar ? navMenuHidden : navMenu}
        id='navbar'
      >
        <Box className={logo}>
          <Image alt='site logo' src={SiteLogo} />
        </Box>
        <Box className={iconContainer} onClick={() => setIsNavbarOpen(!navBarOpen)}>
          {!navBarOpen ? <MenuSharp className={iconStyle} /> : <CloseSharp className={iconStyle} />}
        </Box>
        <Box className={navBarOpen ? menuItemsWrapperActive : menuItemsWrapper}>
          {Object.values(SectionTitles).map(title => (
            <Link
              key={title}
              smooth
              spy
              activeClass={activeLink}
              className={link}
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
