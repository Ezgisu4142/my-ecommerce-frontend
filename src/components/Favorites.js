import React from "react";
import { Container } from "react-bootstrap";

function Favorites() {
  return (
    <Container className="my-4">
      <h2 className="mb-3 hero-title">Favoriler</h2>
      <div className="text-muted">Henüz favori ürün eklenmedi.</div>
    </Container>
  );
}

export default Favorites;


