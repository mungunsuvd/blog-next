import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Button from "../components/button";

export default () => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image
            src="https://source.unsplash.com/user/erondu//171x180"
            rounded
          />
        </Col>
        <Col>
          <Card.Title>
            <h6>SIMPLE 2.0: ЗЭЭЛИЙН АППЛИКЭЙШНЭЭ ЦӨӨЛ</h6>
          </Card.Title>
          <Card.Text>
            Дижитал зээлийн энгийн, хурдан үйлчилгээг санал болгодог
            "Simple"-ийнхэн нь илүү олон боломжийг шингээсэн Simple 2.0 апп
            гаргажээ.
          </Card.Text>
        </Col>
      </Row>
    </Container>
  );
};
