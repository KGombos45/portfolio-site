import './App.scss';
import 'animate.css/animate.compat.css';
import {Box} from '@material-ui/core';
import {AboutSection} from './components/about/AboutSection';
import {ContactSection} from './components/contact/ContactSection';
import {FooterSection} from './components/footer/FooterSection';
import {HomeSection} from './components/home/HomeSection';
import {PortfolioSection} from './components/portfolio/PortfolioSection';
import {ResumeSection} from './components/resume/ResumeSection';
import {Styling} from './components/theme';

export const App: React.FC = () => (
  <Box>
    <Styling>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ResumeSection />
      <ContactSection />
      <FooterSection />
    </Styling>
  </Box>
);
