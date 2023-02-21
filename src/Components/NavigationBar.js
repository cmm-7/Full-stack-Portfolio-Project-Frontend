import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">PcCustoms</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/products">All Products</Nav.Link>
            <Nav.Link href="products/new">Sell Products</Nav.Link>
            <NavDropdown
              title="Desktop Components"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">CPU</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Motherboard
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Memory</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">
                Video Cards
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Case
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Power Supply
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Storage
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                CPU Cooler
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Operating System
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
