import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">MakeupStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center flex-column flex-lg-row">
            <Nav.Link as={Link} to="/">Ana Sayfa</Nav.Link>
            <Nav.Link as={Link} to="/">Ürünler</Nav.Link>
            <Nav.Link href="#">Sepet</Nav.Link>
            <Nav.Link href="#">İletişim</Nav.Link>

            {/* Sağ tarafa giriş ve üye ol butonları */}
            <Button as={Link} to="/login" className="ms-3 pink-btn">Giriş Yap</Button>
            <Button as={Link} to="/register" className="ms-2 pink-btn">Üye Ol</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
