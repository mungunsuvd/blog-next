import { Card, Container, Row, Col } from "react-bootstrap";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Card>
        <Card.Title className="text-center">Stats</Card.Title>
        <Card.Body>
          <Card.Text>
            <Container>
              <Row>
                <Col>13 posts created </Col>
                <Col>Waiting 5 Posts </Col>
                <Col>Returned 3 Posts</Col>
                <Col>
                  13 <FavoriteIcon style={{ color: "red" }} /> given
                </Col>
              </Row>
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
