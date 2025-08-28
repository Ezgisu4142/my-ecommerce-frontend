import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Rating from "./Rating";

const products = [
  { id: 1, name: "Fondöten", price: 2500, rating: 4, reviews: 7, img: "https://media.sephora.eu/content/dam/digital/pim/published/A/ARMANI/82876/433-media_swatch.jpg?scaleWidth=585&scaleHeight=585&scaleMode=fit" },
  { id: 2, name: "Kapatıcı", price: 100, rating: 3, reviews: 12, img: "https://media.sephora.eu/content/dam/digital/pim/published/D/DIOR/652818/308142-media_swatch.jpg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined" },
  { id: 3, name: "Toz Pudra", price: 80, rating: 5, reviews: 25, img: "https://media.sephora.eu/content/dam/digital/pim/published/G/GIVENCHY/730865/349620-media_swatch.jpg?scaleWidth=585&scaleHeight=585&scaleMode=fit" },
  { id: 4, name: "Sıkıştırılmış Pudra", price: 90, rating: 4, reviews: 9, img: "https://media.sephora.eu/content/dam/digital/pim/published/C/CHARLOTTE_TILBURY/540785/229621-media_swatch.jpeg?scaleWidth=585&scaleHeight=585&scaleMode=fit" },
  { id: 5, name: "Likit Allık", price: 1539, rating: 4, reviews: 30, img: "https://media.sephora.eu/content/dam/digital/pim/published/R/RARE_BEAUTY/527974/236077-media_swatch.jpg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined" },
  { id: 6, name: "Toz Allık", price: 2500, rating: 3, reviews: 14, img: "https://media.sephora.eu/content/dam/digital/pim/published/Y/YVES_SAINT_LAURENT/759834/363747-media_swatch.jpg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined" },
  { id: 7, name: "Kontür Stick", price: 1400, rating: 5, reviews: 5, img: "https://media.sephora.eu/content/dam/digital/pim/published/F/FENTY_BEAUTY/398388/44607-media_swatch.jpg?scaleWidth=585&scaleHeight=585&scaleMode=fit" },
  { id: 8, name: "Bronzer", price: 2000, rating: 2, reviews: 3, img: "https://media.sephora.eu/content/dam/digital/pim/published/B/BENEFIT_COSMETICS/584690/273202-media_swatch.jpg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined" },
  { id: 9, name: "Rimel", price: 1800, rating: 4, reviews: 60, img: "https://media.sephora.eu/content/dam/digital/pim/published/B/BENEFIT_COSMETICS/769798/371396-media_swatch.jpeg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined" },
  { id: 10, name: "Kaş Kalemi", price: 1200, rating: 3, reviews: 7, img: "https://media.sephora.eu/content/dam/digital/pim/published/B/BENEFIT_COSMETICS/716331/343053-media_swatch.jpg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined" },
  { id: 11, name: "Kaş Sabitleyici", price: 1500, rating: 4, reviews: 18, img: "https://media.sephora.eu/content/dam/digital/pim/published/K/KOSAS/664586/316418-media_swatch.jpg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined" },
  { id: 12, name: "Ruj", price: 1800, rating: 5, reviews: 100, img: "https://media.sephora.eu/content/dam/digital/pim/published/C/CHARLOTTE_TILBURY/442177/45413-media_swatch.jpg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined" },
];

function Home() {
  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">🛍️ Makeup Store</h1>
      <Row>
        {products.map((p) => (
          <Col key={p.id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={p.img} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>Fiyat: {p.price}₺</Card.Text>
                <Rating value={p.rating} count={p.reviews} />
                <div className="mt-auto d-flex gap-2">
                  <Button className="pink-btn">Sepete Ekle</Button>
                </div>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
