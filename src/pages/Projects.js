import React from "react";
import "./Projects.css";
import { Container, Col, Row, Image, Jumbotron } from "react-bootstrap";
import { useAuth0 } from "../contexts/auth0-context";
import PopulateEntries from "../components/PopulateEntries/PopulateEntries.js";

function Dashboard() {
  const { user } = useAuth0();
  const picture = user ? user.picture : null;

  return (
    <div>
      <Container>
        <Row className="justify-center-content fluid" id="row-1">
          <Col className="content dash1" sm={12}>
            <h1> {user ? `${user.name}'s` : null} Projects</h1>
            <Image src={picture} />
            <h6>{user ? `${user.name}` : null}</h6>
          </Col>
        </Row>
        <Row className="fluid" id="row-2">
          <Col className="content dash3" sm={12}>
            <PopulateEntries />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
