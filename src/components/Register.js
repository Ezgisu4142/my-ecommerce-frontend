import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Şifreler eşleşmiyor");
      return;
    }
    alert(`Kayıt oluşturuldu: ${name}`);
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={8} lg={5}>
            <Card className="login-card p-3 p-md-4">
              <Card.Body>
                <h2 className="text-center mb-3">Üye Ol</h2>
                <p className="text-center text-muted mb-4">Hızla hesap oluşturun</p>
                <Form onSubmit={handleRegister}>
                  <Form.Group className="mb-3" controlId="registerName">
                    <Form.Label>Ad Soyad</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Adınız Soyadınız"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="registerEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="mail@ornek.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="registerPassword">
                    <Form.Label>Şifre</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="registerConfirm">
                    <Form.Label>Şifre (Tekrar)</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="••••••••"
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button type="submit" className="w-100 pink-btn">Üye Ol</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;


