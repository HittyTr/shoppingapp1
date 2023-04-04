import React,{useState} from "react";
import { Button, Form, Container, Col ,Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  
  const [userReg,setUserReg]=useState(
    {
        email:'',
        username:'',
        password:'',
        list:[]
    }
  )

  const handleChangeReg=(e)=>{
    e.preventDefault()
    const {name,value}=e.target
    setUserReg((preV)=>{
        return {...preV,[name]:value}
    })
}
    const register=async () => {
        let response = await fetch('https://642af77400dfa3b54753ac12.mockapi.io/userinfo', {
           method: 'POST',
           body: JSON.stringify({
              username: userReg.username,
              password: userReg.password,
              email: userReg.email,
              list:[]
           }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
        });
      };
    const validateuser=async()=>{
        let response = await fetch('https://642af77400dfa3b54753ac12.mockapi.io/userinfo', {
              method: 'GET',
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
            });
            let data = await response.json();
            console.log(data)
            let user=data.find((user)=>user.username===userReg.username)
            let email=data.find((email)=>email.email===userReg.email)
            if(user){
                alert('Username already exists')
                return
            }
            else if(email){
                alert('Email already exists')
                return
            }
            alert('Registration successful')
            register()
           
    }

    const handleSubmitReg=(e)=>{
        e.preventDefault()
        if(userReg.password===''||userReg.username===''||userReg.email===''){
            alert('Please fill all the fields')
            return
        }
        validateuser()
       
        }
  return (
    <Container style={{justifyContent:'center', display:'flex' , marginTop:'10%'}}>
        <Col xs={5}>
        <Form onSubmit={handleSubmitReg}>
        <Form.Group>
           <Row>
           <Form.Label>Email</Form.Label>
            <Form.Control onChange={handleChangeReg} name='email' type="email" placeholder="Email" />
           </Row>
           <Row>
           <Form.Label>Username</Form.Label>
            <Form.Control onChange={handleChangeReg} name='username' type="text" placeholder="Username" />
           </Row>
            <Row>
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={handleChangeReg} name="password" type="password" placeholder="Password" />
            </Row>
           <Row>
          <Col>
          <Form.Text>
                Already have an account? <Link to="/signin">Login</Link>
            </Form.Text>
          </Col>
            <Col className="mt-2 text-end">
            <Button variant="outline-success" type="submit"> Submit </Button>
            </Col>
           </Row>
        </Form.Group>

</Form>
        </Col>
    </Container>

  );
}

export default Register;