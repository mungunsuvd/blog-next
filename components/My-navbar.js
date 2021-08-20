import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default () => {
  return (
    <Navbar className="color-nav" fixed="top" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img src="logo0.png" width="75" height="45" alt="" />
        </Navbar.Brand>
        <Nav variant="dark" className="justify-content-end">
          <Nav.Link href="login">Нэвтрэх </Nav.Link>
          <Nav.Link href="signup">Бүртгүүлэх </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
