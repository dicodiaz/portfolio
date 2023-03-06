import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import navLinks from '../../data/navLinks';
import useBoolean from '../../hooks/useBoolean';

const Header = () => {
  const { value: isMenuOpen, setFalse: closeMenu, toggle: toggleMenu } = useBoolean();

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
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="ms-auto">
              {navLinks.map((navLink) => {
                const { id, href, text } = navLink;
                return (
                  <Nav.Link key={id} href={href} onClick={closeMenu}>
                    {text}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
