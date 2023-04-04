import React from "react";

import { Card, Container, Col, Row, Button } from "react-bootstrap";

function CheckoutItem(props){
    const {product, quantity , handleDelete , handleIncrement, handleDecrement}=props
    return(
        
        <Card style={{marginLeft:'8%', maxHeight:'10rem', maxWidth:'50rem', textAlign:'center', justifyContent:'center'}}>
        <Container >
           <Row >
            <Col xs='3'>
            <Card.Img className="responsive" src={product.thumbnail}/></Col>
            <Col xs='4'>    
            <Card.Body>
                <Card.Title>{product.title} </Card.Title>
                <Card.Text> {product.description}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
            </Card.Body>
            </Col>
            <Col xs='1' >
            <Row ><Button onClick={()=>handleIncrement(product.id)} className="mt-1"  variant="outline-success">+</Button></Row>
            <Row><div className="mt-2">
                    <p>{quantity}</p>
                </div>
            </Row>
            <Row ><Button onClick={()=>handleDecrement(product.id)} variant="outline-success">-</Button></Row>
            </Col>
            <Col xs='4' style={{padding:'3rem'}}>
            <Button onClick={()=>{handleDelete(product.id)}} variant="link">
                Remove
            </Button>
            </Col>
            </Row>
            </Container>
            </Card>
    
    )
}

export default CheckoutItem;