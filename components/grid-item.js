import { Card } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

export default () => (
  <Card>
    <div className="card-body-wrapper">
      <Card.Header className="d-flex flex-row">
        {/* <img
          src={"https://source.unsplash.com/user/erondu/150x150"}
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar"
        /> */}
        <div>
          <Card.Title className="font-weight-bold mb-2">
            Амар Билгүүн <Badge bg="light"></Badge>
          </Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle> */}

          <Card.Text></Card.Text>
        </div>
      </Card.Header>
    </div>
  </Card>
);
