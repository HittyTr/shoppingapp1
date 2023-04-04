import React from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


function Login(props) {
  const { handleChange, validateUser } = props;


return (
  
  <Container style={{justifyContent:'center', display:'flex' , marginTop:'10%'}}>
    <Col xs={5}>
      <Form onSubmit={validateUser}>
        <Form.Group>
          <Row>
            <Form.Label>Username</Form.Label>
            <Form.Control 
              onChange={handleChange} 
              name='username' 
              type="text" 
              placeholder="Username" />
          </Row>
          <Row>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              onChange={handleChange} 
              name="password" 
              type="password" 
              placeholder="Password" />
          </Row>
          <Row>
            <Col>
              <Form.Text>
                Don't have an account? <Link to="/signup">Register</Link>
              </Form.Text>
            </Col>
            <Col className="mt-2 text-end">
              <Button 
                variant="outline-success" 
                type="submit"> 
                Login 
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Col>
  </Container>
);
}

export default Login;