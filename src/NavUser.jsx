import React from "react";
import { Image, Col,Row, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function NavUser(props){
  const {list,username, logininfo, handleLogout}=props
  const navigate= useNavigate()
    return(
        <Navbar style={{height:'80px'}} key={'xs'} bg="light" expand={'xs'} className="p-0">
          <Container fluid className="p-0 text-center">
            <Row style ={{marginLeft:'5px'}}className="w-100">
              <Col className='mt-3' xs={3}>
                <Navbar.Brand > KorayApp</Navbar.Brand>
              </Col>
              <Col xs={7}>
                <Navbar.Brand onClick={()=>navigate('/')} className='m-0 p-0' style={{maxHeight:'65px',width:'auto'}} as={Image} src={'../images/logo.jpg'} ></Navbar.Brand>
              </Col>
              <Col  style={{padding:'10px 45px 0px 0px', height:'60%', textAlign:'end'}} xs={2}>
                <Button onClick={()=>navigate('/checkout')} 
                        style={{ padding:'0', marginRight:'20px'}} 
                        variant="light">
                  <div style={{backgroundColor:'#e34d64', borderRadius:'8px', height:'16px', width:'16px', fontSize:'12px', color:'white', margin:'0px 0px 16px 10px', zIndex:'1', position:'absolute'}}>
                    {list.length}
                  </div>
                  <ShoppingCartIcon style={{position:'relative',marginTop:'6px'}}/>
                </Button>
                <Navbar.Toggle style={{fontSize:'medium', height:'40px', width:'85px'}} 
                               variant="light" 
                               className="p-0"  
                               aria-controls={`offcanvasNavbar-expand-${'xs'}`} >
                  {logininfo? username : 'Sign-in'}
                </Navbar.Toggle>
          
            
              </Col>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'xs'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'xs'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'xs'}`}>
                {logininfo? `Hello ${username}` : 'Hello User'}
                </Offcanvas.Title>
              </Offcanvas.Header>
              {!logininfo? 
              <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link onClick={()=>navigate('/signin')}>Sign-in</Nav.Link>
                <Nav.Link onClick={()=>navigate('/signup')}>Create a Account</Nav.Link>
                <Nav.Link onClick={()=>navigate('/checkout')}>Checkout</Nav.Link>
              </Nav>
            </Offcanvas.Body>
            :
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={()=>navigate('/')}>Products</Nav.Link>
                  <Nav.Link onClick={()=>navigate('/checkout')}>Checkout</Nav.Link>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </Nav>
              </Offcanvas.Body>
              
            }
              
            </Navbar.Offcanvas>
        
          
          </Row>
          </Container>
        </Navbar>
    )
}

export default NavUser;