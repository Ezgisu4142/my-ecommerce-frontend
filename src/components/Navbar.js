import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function MyNavbar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/?q=${encodeURIComponent(q)}` : "/");
  };

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

            <Form className="d-flex ms-lg-3 my-2 my-lg-0" onSubmit={onSearchSubmit} role="search">
              <input
                type="search"
                className="form-control"
                placeholder="Ürün ara..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" className="ms-2 pink-btn">Ara</Button>
            </Form>

            <div className="d-flex align-items-center ms-lg-3 my-2 my-lg-0" style={{ gap: 16 }}>
              <Button as={Link} to="/favorites" variant="link" className="p-0" title="Favoriler">
                <AiOutlineHeart size={26} color="#111" />
              </Button>
              <Button as={Link} to="/cart" variant="link" className="p-0" title="Sepet">
                <HiOutlineShoppingBag size={26} color="#111" />
              </Button>
            </div>

            <Button as={Link} to="/login" className="ms-3 pink-btn">Giriş Yap</Button>
            <Button as={Link} to="/register" className="ms-2 pink-btn">Üye Ol</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
