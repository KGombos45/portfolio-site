import './App.scss';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import AppHome from './components/home/home';
import AppAbout from './components/about/about';
import AppPortfolio from './components/portfolio/portfolio';
import AppResume from './components/resume/resume';
import AppContact from './components/contact/contact';
import AppFooter from './components/footer/footer';

const { Header, Content } = Layout;


function App() {
  return (
    <div>
        <AppHome/>
        <AppAbout/>
        <AppPortfolio />
        <AppResume />
        <AppContact/>
        <AppFooter/>
    </div>
  );
}

export default App;
