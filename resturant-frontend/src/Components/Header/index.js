import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import logo from "../../Images/logo.png"

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      // bg="dark"
      variant="dark"
      style={{ zIndex: 1 }}
    >
      <Container fluid>
        {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
        <Link to="/" className="navbar-brand" style={{ color: "#F2BD57" }}>
        <img className="logo" src={logo} alt="logo" />
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="stroke">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
           </Nav>
           <Nav>
            <li className="nav-item">
              <NavLink to="/menu" className="nav-link">
                Menu
              </NavLink>
            </li>
          </Nav>
          <Nav>
            <li className="nav-item">
              <NavLink to="/reserve" className="nav-link">
                Reserve Table
              </NavLink>
            </li>
          </Nav>
           <Nav>
            <li className="nav-item">
              <NavLink to="/pop" className="nav-link">
                About Us
              </NavLink>
            </li>
          </Nav>
          <Nav>
            <li className="nav-item">
              <NavLink to="/signin" className="nav-link">
                Contact Us
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
