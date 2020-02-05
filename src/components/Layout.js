import React from "react";
import { Container, Header, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => (
  <>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={Link} to="/" header>
          Movie Rental
        </Menu.Item>
        <Menu.Item as={Link} to="/rentals">
          My Rentals
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as={Link} to="/logout" name="logout">
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>

    <Container style={{ marginTop: "7em" }}>{children}</Container>
  </>
);

export default Layout;
