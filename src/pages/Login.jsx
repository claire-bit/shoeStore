import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.shutterstock.com/image-illustration/podiumstandwith-terrazzo-stoneon-bright-background-260nw-1435576727.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: transparent;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const history = useNavigate(); // Get the history object from react-router-dom
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Here, you would typically make an API call to validate the username and password.
    // For demonstration purposes, let's assume the login is successful.
    const isLoggedIn = true; // Replace with your actual authentication logic

    if (isLoggedIn) {
      // Navigate to the "product" page
      navigate('/product');
      //history.push('/product');
    } else {
      // Handle login failure
      alert('Login failed. Please try again.');
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleLogin}>
          <Input 
            placeholder="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input 
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
