import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Giriş yapıldı: ${email}`);
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={8} lg={5}>
            <Card className="login-card p-3 p-md-4">
              <Card.Body>
                <h2 className="text-center mb-3">Login</h2>
                <p className="text-center text-muted mb-4">Hesabınıza giriş yapın</p>
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="loginEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="mail@ornek.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="loginPassword">
                    <Form.Label>Şifre</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button type="submit" className="w-100 pink-btn">
                    Giriş Yap
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
