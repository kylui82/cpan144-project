import Home from './Home';
import Content from './Content';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function NavbarComp() {
    return (
      <BrowserRouter>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container className="ms-5">
            <LinkContainer to={"/"}>
              <Navbar.Brand>News Feed</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to={"/"}>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/Sports"}>
                  <Nav.Link>Sports</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/Business"}>
                  <Nav.Link>Business</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/Entertainment"}>
                  <Nav.Link>Entertainment</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/ScienceAndTechnology"}>
                  <Nav.Link>ScienceAndTechnology</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/World"}>
                  <Nav.Link>World</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:newsCategory" element={<Content/>} />
        </Routes>
  
      </BrowserRouter>
    )
  }

  export default NavbarComp;