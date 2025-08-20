import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-light py-4 mt-4">
      <Container className="text-center">
        <p>© 2025 MakeupStore. Tüm hakları saklıdır.</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="/">Instagram</a>
          <a href="/">Facebook</a>
          <a href="/">Twitter</a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
