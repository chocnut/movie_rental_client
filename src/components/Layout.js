import React from "react";
import { Container, Header, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => (
  <>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Link to="/">Movie Rental</Link>
        </Menu.Item>
        <Menu.Item as="a">
          <Link to="/rentals">My Rentals</Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="logout">
            <Link to="/logout">Logout</Link>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>

    <Container text style={{ marginTop: "7em" }}>
      <Header as="h1">Semantic UI React Fixed Template</Header>
      {children}
    </Container>
  </>
);

export default Layout;
