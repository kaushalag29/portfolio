import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import profileImage from '../../images/favicon.png';

const CustomNavbar = () => {
  // const [isDesktop, setIsDesktop] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth > 769) {
  //     setIsDesktop(true);
  //     setIsMobile(false);
  //   } else {
  //     setIsMobile(true);
  //     setIsDesktop(false);
  //   }
  // }, []);

  // const linkStyle = {color: "white", cursor: "pointer", padding: "8px"};

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand style={{ cursor: 'default' }}>
        <figure>
          <img
            alt="Not Found"
            src={profileImage}
            width="70px"
            height="70px"
            style={{ borderRadius: '50%' }}
          />
          <figcaption>Kaushal Kumar Agarwal</figcaption>
        </figure>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#hero">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#companies">Experience</Nav.Link>
          <Nav.Link href="#certificates">Certificates</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#footer">Social Profiles</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
