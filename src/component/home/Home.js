import "./Home.css";
import React from "react";
import { ListGroup, Button, Navbar, Container, Nav } from "react-bootstrap";
import api from "../../api/axios-config";

const stopMessages = async () => {
  try {
    const response = await api.post("/datainput/messages/stop");
  } catch (err) {
    console.error(err);
  }
};

const startMessages = async () => {
  try {
    const response = await api.post("/datainput/messages/start");
  } catch (err) {
    console.error(err);
  }
};

const clearMessages = async () => {
  try {
    const response = await api.post("/datainput/messages/clear");
  } catch (err) {
    console.error(err);
  }
};

const Home = ({ messages }) => {
  return (
    <div className="main-component">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Data Input System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="button-container">
        <Button variant="success" size="lg" onClick={startMessages}>
          Start
        </Button>{" "}
        <Button variant="danger" size="lg" onClick={stopMessages}>
          Stop
        </Button>{" "}
        <Button variant="primary" size="lg" onClick={clearMessages}>
          Clear
        </Button>{" "}
      </div>
      <ListGroup className="message-container">
        {messages?.map((message) => {
          return (
            <ListGroup.Item action variant="info">
              {message}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Home;
