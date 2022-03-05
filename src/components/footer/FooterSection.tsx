import {Box, Button} from '@material-ui/core';
import {ExpandLess} from '../../assets';
import {useAppData} from '../../hooks';
import './footer.scss';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const {footerData} = useAppData();

  return (
    <footer>
      <div className='scroll-to-top-wrapper flex'>
        <Button className='scroll-to-top' onClick={() => scrollToTop()}>
          <ExpandLess />
        </Button>
      </div>

      <Box className='icon-wrapper flex row'>
        {footerData.map(item => (
          <a key={item.alt} href={item.src}>
            <Button className='flex icon'>
              <item.logo />
            </Button>
          </a>
        ))}
      </Box>
      <div className='footnote-wrapper'>
        <div className='footnote-text'>KEVIN GOMBOS ©2021</div>
      </div>
    </footer>
  );
};
