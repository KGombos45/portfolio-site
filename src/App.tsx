import './App.css';
import 'animate.css/animate.compat.css';
import {
  AboutSection,
  ContactSection,
  FooterSection,
  HomeSection,
  Navbar,
  PortfolioSection,
  ResumeSection,
} from './components';
import {Styling} from './theme';
import { Box } from '@mui/material';

export const App: React.FC = () => (
  <Box>
    <Styling>
      <HomeSection />
      <Navbar />
      <AboutSection />
      <PortfolioSection />
      <ResumeSection />
      <ContactSection />
      <FooterSection />
    </Styling>
  </Box>
);
