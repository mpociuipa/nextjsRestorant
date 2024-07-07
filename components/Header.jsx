import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setExpanded(false);
    router.push(path);
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand href="/">Restaurant Name</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" onClick={(e) => handleNavClick(e, '/')}>
                Home
              </Nav.Link>
              <Nav.Link href="/menu" onClick={(e) => handleNavClick(e, '/menu')}>
                Menu
              </Nav.Link>
              <Nav.Link href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
