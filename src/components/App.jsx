import React, { useState, useEffect } from 'react';
import CustomNavbar from './CustomNavbar/CustomNavbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Companies from './Companies/Companies';
import Certificates from './Certificates/Certificates';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  companiesData,
  certificatesData,
  projectsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [companies, setCompanies] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setCompanies([...companiesData]);
    setCertificates([...certificatesData]);
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, companies, certificates, projects, contact, footer }}>
      <CustomNavbar />
      <Hero />
      <About />
      <Companies />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
