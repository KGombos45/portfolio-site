import './App.scss';
import 'antd/dist/antd.css';
import "animate.css/animate.compat.css";
import HomeSection from './components/home/HomeSection';
import AboutSection from './components/about/AboutSection';
import PortfolioSection from './components/portfolio/PortfolioSection';
import ResumeSection from './components/resume/ResumeSection';
import ContactSection from './components/contact/ContactSection';
import FooterSection from './components/footer/FooterSection';

function App() {
  return (
    <div>
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
        <ResumeSection />
        <ContactSection />
        <FooterSection />
    </div>
  );
}

export default App;
