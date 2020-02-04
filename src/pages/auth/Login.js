import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Container, Header } from "semantic-ui-react";
import { doLogin } from "../../api/auth";

const Login = ({ history }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitForm = async () => {
    const response = await doLogin({ user: { email, password } });
    localStorage.setItem("authToken", response.token);
    history.push("/movies");
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
