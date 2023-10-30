// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCartPlus , FaUserAlt } from 'react-icons/fa';
import '../css/Navbar.css'

function NavScrollExample() {
  return (
    <Navbar  className="body-tertiary topnav">
      <Container fluid>
        <Navbar.Brand href="#" className='navtitle'>SHOP.CO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
    
            <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#action1">On Sale</Nav.Link>

            <Nav.Link href="newArrival">New Arrival</Nav.Link>

            <Nav.Link href="#">Brands</Nav.Link>
          </Nav>

          
          <Form className="d-flex search" >
            <Form.Control 
              type="search"
              placeholder="Search for Products..."
              className="me-2"
              aria-label="Search"
              
              
            />
            {/* <Button variant="outline-success" >Search</Button> */}

            <FaCartPlus style={{fontSize:'3rem', paddingLeft:'1rem'}}/>

            <FaUserAlt style={{fontSize:'3rem', paddingLeft:'1rem', marginRight:'2em'}}/>
            
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;