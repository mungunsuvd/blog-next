import React, { useEffect } from "react";
import MyNavbar from "../components/My-navbar";
import Grids from "../components/grid-item";
import List from "../components/list-item";
import Intro from "../components/intro";
import Paginationn from "../components/pagination";
import Chip from "@material-ui/core/Chip";
import { Card, Row, Col, Container } from "react-bootstrap";

export default function Home() {
  return (
    <div blog-detail-page>
      <div>
        <MyNavbar />
      </div>
      <div></div>
      <div>
        <br />
        <br />

        <Intro />
      </div>
      <br />

      <div>
        <Container className="text-center">
          <>
            <h4>Шилдэг зохиолчид</h4>
            <Card.Body>
              <Row>
                <Col>
                  <Grids />
                </Col>
                <Col>
                  <Grids />
                </Col>
                <Col>
                  <Grids />
                </Col>
              </Row>
            </Card.Body>
            {/* 2nd row */}
            <Card.Body>
              <Row>
                <Col>
                  <Grids />
                </Col>
                <Col>
                  <Grids />
                </Col>
                <Col>
                  <Grids />
                </Col>
              </Row>
            </Card.Body>
          </>
        </Container>
      </div>

      {/* shine niitlel */}
      <div>
        <Container>
          <Row className="text-center">
            <h5>Шинэ нийтлэлүүд </h5>{" "}
          </Row>{" "}
          <Row>
            <Col sm={8}>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <List />

                      <div className="text-center">
                        <a href="newsdetail">Цааш унших ... </a>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <List />
                      <div className="text-center">
                        <a href="newsdetail">Цааш унших ... </a>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <List />
                      <div className="text-center">
                        <a href="newsdetail">Цааш унших ... </a>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <List />
                      <div className="text-center">
                        <a href="newsdetail">Цааш унших ... </a>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col sm={4}>
              <h5>Category & Topics</h5>{" "}
              <Row>
                <Col xs={3}>
                  <Chip size="small" label="Health" />
                </Col>
                <Col xs={3}>
                  <Chip size="small" label="Politics" />
                </Col>
                <Col xs={3}>
                  <Chip size="small" label="Society" />
                </Col>
                <Col xs={3}>
                  <Chip size="small" label="Business" />
                </Col>
                <Col xs={4}>
                  <Chip size="small" label="Technology" />
                </Col>
                <Col xs={3}>
                  <Chip size="small" label="Life style" />
                </Col>
                <Col xs={3}>
                  <Chip size="small" label="Art and Culture" />
                </Col>
                <Col xs={5}>
                  <Chip size="small" label="Personal development" />
                </Col>{" "}
              </Row>{" "}
            </Col>
          </Row>
          <br />
          <Card.Text className="text-muted" className="text-center">
            <Paginationn style={{ color: "black" }} />
          </Card.Text>
          <br />
          <Row>
            <Col>
              <Card.Text className="text-muted" className="text-center">
                <a href="help">Help </a>
                <a href="about">About </a>
                <a href="career">Career </a>
                <a href="connection">Connection </a>
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    /* </UserStore> */
  );
}
