import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Container, Header } from "semantic-ui-react";
import { doLogin } from "../../api/auth";

const Login = ({ history }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitForm = async () => {
    try {
      const response = await doLogin({ user: { email, password } });
      if (response) {
        localStorage.setItem("authToken", response.token);
        history.push("/");
      } else {
        history.push("/login");
      }
    } catch (e) {
      console.log(e);
      history.push("/login");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitForm();
  };

  return (
    <Container text style={{ marginTop: "7em" }}>
      <Header as="h1" textAlign="center">
        Login
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
