import { Card, ListGroup, Form } from "react-bootstrap";
import Profile from "../../components/grid-item";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Button from "../../components/button";
import Nav from "../../components/navv";
export default () => {
  return (
    <div>
      <Nav />
      <br />
      <br />
      <br />

      <div>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Profile" title="Profile">
            <Card style={{ width: "18rem" }}>
              <Profile />
              <Card.Body>
                <ListGroup size="sm" className="list-group-flush">
                  <Form.Group className="mb-2" controlId="username">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="f">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="" />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone" placeholder="" />
                  </Form.Group>
                </ListGroup>
                <div className="text-center">
                  <Button value="Save" className="btn-dark" />
                </div>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="Security" title="Security">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <ListGroup>
                  <Form.Group className="mb-2" controlId="">
                    <Form.Label> Change Password</Form.Label>
                    <Form.Control
                      className="mb-2"
                      type=""
                      placeholder="хуучин нууц үг "
                    />
                    <Form.Control type="" placeholder="шинэ нууц үг" />
                  </Form.Group>
                </ListGroup>
                <div className="text-center">
                  <Button value="Save" className="btn-dark" />
                </div>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
