import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './myjs.js';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import FeaturedProjects from './components/featuredProjects/FeaturedProjects';
import TimeLine from './components/timeLine/TimeLine';
import Footer from './components/footer/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
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
  }
];

function App() {
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await fetch('http://localhost:3001/timeline');
        if (response.ok) {
          setEditMode(true);
        }
      } catch (error) {
        console.error('Localhost server not available:', error);
      }
    };

    checkServer();
    console.log('editMode ',editMode)
  }, []);

  return (
    <Router>
      <div className="App" id="wrapper">
        <Header socialLinks={socialLinks} />
        <Routes>
          <Route path="/" element={[<Profile />, <FeaturedProjects />, <TimeLine edits={editMode} />]} />
          <Route path="/panel" element={<FeaturedProjects edits={true} />} />
          <Route path="/timeline" element={<TimeLine edits={editMode} />} />
        </Routes>
        <Footer socialLinks={socialLinks} />
      </div>
    </Router>
  );
}

export default App;
