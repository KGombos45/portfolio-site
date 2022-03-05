import './App.scss';
import 'animate.css/animate.compat.css';
import {Box} from '@material-ui/core';
import {
  AboutSection,
  ContactSection,
  FooterSection,
  HomeSection,
  PortfolioSection,
  ResumeSection,
} from './components';
import {Styling} from './theme';

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
