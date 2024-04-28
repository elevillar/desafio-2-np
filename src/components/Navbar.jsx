import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Navbar bg='ssucess'>
      <Container>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <Link to='/'> Home &nbsp; </Link>
            <Link to='/favoritos'> | &nbsp; Favoritos </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
