import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <Navbar bg="light" expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/">React-Redux Setup</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
