import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import TrukkerLogo from '../../Assets/Images/trukker-logo.svg'
import { useLocation } from 'react-router-dom';
import './Navbar.scss'

function NavigationBar() {
  let location = useLocation()
  return (
    <>
        <Navbar bg="light" expand="sm" className="mb-3 navbar_container">
          <Container fluid>
            <Navbar.Brand to="">
              <Image
                src={TrukkerLogo}
                className="d-inline-block align-top navbar_trukkerlogo"
                alt="React Bootstrap logo"
              ></Image>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="home"><div className={location.pathname === '/home' ? 'active' : ''}>Home</div></Nav.Link>
                  <Nav.Link href="loads"><div className={location.pathname === '/loads' ? 'active' : ''}>Loads</div></Nav.Link>
                  <Nav.Link href="fleets"><div className={location.pathname === '/fleets' ? 'active' : ''}>Fleets</div></Nav.Link>
                  <Nav.Link href="rates"><div className={location.pathname === '/rates' ? 'active' : ''}>Rates</div></Nav.Link>
                  <Nav.Link href="orders"><div className={location.pathname === '/orders' ? 'active' : ''}>Orders</div></Nav.Link>
                  {/* <Nav.Link><Link to="home">Home</Link></Nav.Link>
                  <Nav.Link><Link to="loads">Loads</Link></Nav.Link>
                  <Nav.Link><Link to="fleets">Fleets</Link></Nav.Link>
                  <Nav.Link><Link to="rates">Rates</Link></Nav.Link>
                  <Nav.Link><Link to="orders">Orders</Link></Nav.Link> */}
                  <NavDropdown
                    title="Sadanand"
                  >
                    <NavDropdown.Item to="">Action</NavDropdown.Item>
                    <NavDropdown.Item to="">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item to="">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavigationBar;