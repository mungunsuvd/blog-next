import { Container, Col, Row, Card } from "react-bootstrap";
import Grids from "../../components/grid-item";
import List from "../../components/list-item";

import Paginationn from "../../components/pagination";
import Navloo from "../../components/navv";

export default () => {
  return (
    <div>
      <Navloo />
      <div>
        <Container>
          <Row className="text-center">
            <Col></Col>
          </Row>
          <br />
          {/* list item */}
          <Row>
            <Col sm={8}>
              <Row>
                <h5>Шинэ нийтлэлүүд </h5>
              </Row>
              <Row>
                <Col>
                  <List />
                  <div className="text-center">
                    <a href="userpage/newsdetail">Цааш унших ... </a>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <List />
                  <div className="text-center">
                    <a href="userpage/newsdetail">Цааш унших ... </a>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <List />
                  <div className="text-center">
                    <a href="userpage/newsdetail">Цааш унших ... </a>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <List />
                  <div className="text-center">
                    <a href="userpage/newsdetail">Цааш унших ... </a>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* grid item */}

            <Col sm={4}>
              <h5>Шилдэг зохиолчид </h5>

              <Row>
                <Col>
                  <Grids />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Grids />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Grids />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Grids />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Grids />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Grids />
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          <Card.Text className="text-muted" className="text-center">
            <Paginationn />
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
  );
};
