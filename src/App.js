import './App.scss';
import 'antd/dist/antd.css';
import "animate.css/animate.compat.css";
import 'react-perfect-scrollbar/dist/css/styles.css';
import AppHome from './components/home/home';
import AppAbout from './components/about/about';
import AppPortfolio from './components/portfolio/portfolio';
import AppResume from './components/resume/resume';
import AppContact from './components/contact/contact';
import AppFooter from './components/footer/footer';
import PerfectScrollbar from 'react-perfect-scrollbar'

function App() {
  return (
    <div>
        <AppHome />
        <AppAbout />
        <AppPortfolio />
        <AppResume />
        <AppContact />
        <AppFooter />
    </div>
  );
}

export default App;
