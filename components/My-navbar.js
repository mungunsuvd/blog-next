import { Navbar } from "react-bootstrap";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
export default () => {
  return (
    <Navbar className="color-nav" fixed="top" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img src="logo0.png" width="75" height="45" alt="" />
        </Navbar.Brand>
        <Nav variant="dark" className="justify-content-end">
          <Nav.Link href="/login">Нэвтрэх </Nav.Link>
          <Nav.Link href="/signup">Бүртгүүлэх </Nav.Link>
          <Nav.Link href="/summary">
            <EqualizerOutlinedIcon style={{ color: "black" }} />
          </Nav.Link>
          <Dropdown className="color-nav">
            <Dropdown.Toggle variant="light">
              <AccountCircleOutlinedIcon style={{ color: "black" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu className="color-nav">
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/editor">New Post</Dropdown.Item>
              <Dropdown.Item href="/">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
