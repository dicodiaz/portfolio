import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prevOpen) => !prevOpen);
  const closeMenu = () => setOpen(false);

  return (
    <header>
      <Navbar id="navbar" bg="secondary" variant="dark" expand="md" fixed="top" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand>
            <Nav.Link href="#cover" className="font-roboto text-white fw-bold py-0">
              Dico Diaz Dussan
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle className="border-0" onClick={toggleMenu}>
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#portfolio" onClick={closeMenu}>
                Portfolio
              </Nav.Link>
              <Nav.Link href="#about" onClick={closeMenu}>
                About
              </Nav.Link>
              <Nav.Link href="#contact" onClick={closeMenu}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
