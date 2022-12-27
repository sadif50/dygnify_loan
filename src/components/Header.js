import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="warning" expand="lg" className='shadow py-3'>
      <Container>
        <Link className='fs-4 fw-bold text-decoration-none text-black text-uppercase' to ='/'>Dygnify Loan</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className='btn' to='/'>Home</NavLink>
            <NavLink className='btn' to='/allApplications'>All Applications</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;