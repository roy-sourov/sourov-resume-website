import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import Hackathon from './Hackathon';
import Certificates from './Certificates';
import Science from './Science';
import Finance from './Finance';
import Humanities from './Humanities';
import Bengali from './Bengali';
import Footer from './Footer';
import { NAV } from '../utils/constants';

function NavigationBar() {

  const [isHome, setHome] = useState(false);
  const [isResume, setResume] = useState(false);
  const [isProjects, setProjects] = useState(false);
  const [isCertificates, setCertificates] = useState(false);
  const [isHackathon, setHackathon] = useState(false);
  const [isScience, setScience] = useState(false);
  const [isFinance, setFinance] = useState(false);
  const [isHumanities, setHumanities] = useState(false);
  const [isBengali, setBengali] = useState(false);

  const handleNavClick = (option) => {
    setHome(false);
    setResume(false);
    setProjects(false);
    setCertificates(false);
    setHackathon(false);
    setScience(false);
    setFinance(false);
    setHumanities(false);
    setBengali(false);

    if (option === NAV.HOME) {
      setHome(true);
    }

    if (option === NAV.RESUME) {
      setResume(true);
    }

    if (option === NAV.PROJECTS) {
      setProjects(true);
    }

    if (option === NAV.CERTIFICATES) {
      setCertificates(true);
    }

    if (option === NAV.HACKATHON) {
      setHackathon(true);
    }

    if (option === NAV.SCIENCE) {
      setScience(true);
    }

    if (option === NAV.FINANCE) {
      setFinance(true);
    }

    if (option === NAV.HUMANITIES) {
      setHumanities(true);
    }

    if (option === NAV.BENGALI) {
      setBengali(true);
    }
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="ml-auto">
            <Container>
              <img
                src={"https://avatars.githubusercontent.com/u/37055760?v=4"}
                alt=""
                width="35"
                height="35"
                className="d-inline-block align-top"
                style={{ marginRight: '10px' }}
              />
              Sourov Roy
            </Container>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link
              href="#home" onClick={() => handleNavClick(NAV.HOME)}>Home
            </Nav.Link>
            <Nav.Link
              href="#resume" onClick={() => handleNavClick(NAV.RESUME)}>Resume
            </Nav.Link>
            <Nav.Link
              href="#projects" onClick={() => handleNavClick(NAV.PROJECTS)}>Projects
            </Nav.Link>
            <Nav.Link
              href="#certificates" onClick={() => handleNavClick(NAV.CERTIFICATES)}>Certificates
            </Nav.Link>
            <Nav.Link
              href="#hackathon" onClick={() => handleNavClick(NAV.HACKATHON)}>Hackathon
            </Nav.Link>
            <Nav.Link
              href="#science" onClick={() => handleNavClick(NAV.SCIENCE)}>Science
            </Nav.Link>
            <Nav.Link
              href="#finance" onClick={() => handleNavClick(NAV.FINANCE)}>Finance
            </Nav.Link>
            <Nav.Link
              href="#humanities" onClick={() => handleNavClick(NAV.HUMANITIES)}>Humanities
            </Nav.Link>
            <Nav.Link
              href="#bengali" onClick={() => handleNavClick(NAV.BENGALI)}>Bengali
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {isHome && <Home />}
      {isResume && <Resume />}
      {isProjects && <Projects />}
      {isCertificates && <Certificates />}
      {isHackathon && <Hackathon />}
      {isScience && <Science />}
      {isFinance && <Finance />}
      {isHumanities && <Humanities />}
      {isBengali && <Bengali />}

      <Footer />
    </>
  );
}

export default NavigationBar;