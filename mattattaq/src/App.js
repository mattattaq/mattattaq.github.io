import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './myjs.js';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import FeaturedProjects from './components/featuredProjects/FeaturedProjects';
import TimeLine from './components/timeLine/TimeLine';
import Footer from './components/footer/Footer';
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [{
    link: "https://www.facebook.com/MattAttaqArt/?fref=ts",
    font: faFacebook,
    id: "facebook"
    },
    {
    link: "https://www.linkedin.com/in/matthew-allbright-b4896749",
    font: faLinkedin,
    id: "linkedin"
    },
    {
    link: "mailto:mattatttaq@gmail.com",
    font: faEnvelope,
    id: "mail"
    }];

function App() {
  return (
    <div className="App" id="wrapper">
      <Header socialLinks={socialLinks} />
      <Profile />
      <FeaturedProjects />
      <TimeLine />
      <Footer socialLinks={socialLinks} />
    </div>
  );
}

export default App;
