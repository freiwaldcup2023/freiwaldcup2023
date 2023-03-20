import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const Login = () => {
  const { signIn, currentUser, sendResetEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/matches");
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
    } catch (error) {
      setLoginError("Incorrect email or password.");
    }
  };

  const handleForgotPassword = async () => {
    if (email === "") {
      setErrorMessage("Please enter your email.");
    } else {
      setErrorMessage("");
      await sendResetEmail(email);
      setShowAlert(true);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          {showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
              Password reset email sent.
            </Alert>
          )}
          <h1 className="text-center mb-4">Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
          {loginError && <p className="text-danger">{loginError}</p>}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <div className="d-grid gap-2 mt-3">
            <Button variant="link" onClick={handleForgotPassword}>
              Forgot Password?
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
