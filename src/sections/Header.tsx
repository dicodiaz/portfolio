import { FC, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import '../styles/header.scss';

const Header: FC = () => {
  const [expanded, setExpanded] = useState(false);
  const NavbarToggleIcon = expanded ? AiOutlineClose : AiOutlineMenu;

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <header>
      <Navbar
        id="navbar"
        expand="md"
        bg="secondary"
        fixed="top"
        expanded={expanded}
        onToggle={handleToggle}
        collapseOnSelect
      >
        <Container className="px-3 px-md-5 px-lg-6" fluid>
          <Navbar.Brand href="#headline" className="font-roboto text-white">
            Dico Diaz Dussan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="px-0">
            <NavbarToggleIcon className="text-white" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <div className="nav-link-separator" />
              <Nav.Link href="#about_me">About</Nav.Link>
              <div className="nav-link-separator" />
              <Nav.Link href="#contact">Contact</Nav.Link>
              <div className="nav-link-separator" />
              <Nav.Link
                href="mailto:dicodiaz@gmail.com"
                className="d-none d-md-flex align-items-md-center"
              >
                <AiOutlineMail className="fs-5" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
