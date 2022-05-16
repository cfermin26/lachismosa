import React from "react";
import { Link } from "gatsby";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { StaticImage } from "gatsby-plugin-image";

const Menu = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <StaticImage
            src="../images/assets/lachismosa-logo.svg"
            alt="Lachisamosa fm"
            className="main-banner logo-light"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" activeClassName="active">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/carrera" activeClassName="active">
              Carrera
            </Nav.Link>
            <Nav.Link as={Link} to="/programacion" activeClassName="active">
              Programación
            </Nav.Link>
            <Nav.Link as={Link} to="/quienes-somos" activeClassName="active">
              Quienes Somos
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto" activeClassName="active">
              Cobertura y Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
