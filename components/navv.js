import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import PostAddIcon from "@material-ui/icons/PostAdd";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import Example from "./notif";

export default () => {
  return (
    <>
      <Navbar className="color-nav" fixed="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/userpage">
            {" "}
            <img src="/logo0.png" width="75" height="45" alt="logo" />
          </Navbar.Brand>

          <Nav className="justify-content-end">
            <Nav>
              <Nav.Link href="/userpage/summary">
                <EqualizerOutlinedIcon style={{ color: "black" }} />
              </Nav.Link>

              <>
                {" "}
                <Dropdown>
                  <Dropdown.Toggle className="color-nav" variant="light">
                    <NotificationsActiveOutlinedIcon
                      style={{ color: "black" }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="light">
                    <Dropdown.Item>
                      <Example />
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Example />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Example />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Example />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Example />
                    </Dropdown.Item>
                    <Dropdown.Divider />
                  </Dropdown.Menu>
                </Dropdown>
              </>
              <>
                <Dropdown>
                  <Dropdown.Toggle className="color-nav" variant="light">
                    <AccountCircleOutlinedIcon style={{ color: "black" }} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/userpage/profile">
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="/userpage/editor">
                      New Post
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
