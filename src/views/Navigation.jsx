import React from 'react'
import { Link } from "react-router-dom";
import { Nav, Col, Row, Navbar, NavDropdown, Container } from 'react-bootstrap';

export default () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">React-Cassandra</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/users">Users</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
            {/* <div>            
            <Col className="">
                <Col md="8" className="mt-5">
                    <Col className="p-2">
                        <Nav variant="tabs" defaultActiveKey="link-1">
                            <Nav.Item> <Nav.Link href="/home" eventKey="link-1">Home</Nav.Link> </Nav.Item>
                            <Nav.Item><Nav.Link as={Link} to="/signup" eventKey="link-2">Signup</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link as={Link} to="/vacation" eventKey="link-6">Vacation</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link as={Link} to="/login" eventKey="link-7">Logout</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>
                </Col>
            </Col>   
        </div> */}
        </Navbar>
        
    )
}