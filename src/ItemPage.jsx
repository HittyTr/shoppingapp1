import React from "react";
import {Button, Card, Col,Row} from 'react-bootstrap'
import products from './data/products';

function ItemPage(props){
    const{findquantity, handleQuantity, selectId, handleAddToCart, handleIncrement, handleDecrement}=props
    const inputChange=(e)=>{
        handleQuantity(selectId, e.target.value)
    }
    
    return(
        <Card style={{marginLeft:'20%' , marginTop:'10%' ,maxWidth:'50%', height:'400px'}}>
        <Row>
            <Col  >
            <Card.Img style ={{marginTop:'5px',maxHeight:'330px', maxWidth:'80%'}}src={products[selectId].image}/>
            </Col>
            <Col className="mt-5" >
            <Row >
                <Card.Title>{products[selectId].title}</Card.Title>
            </Row>
            <Row>
                <Card.Body>
                    <Card.Text>{products[selectId].description}</Card.Text>
                    <Card.Text>{products[selectId].price}</Card.Text>
                </Card.Body>
            </Row>
            <Row className=" mt-5 text-center">
                <Col xs={4}>
               <Row >
                    <Col className="p-0" xs={3}>
                    <Button disabled={findquantity(selectId)?false:true} onClick={()=>handleDecrement(selectId)}  variant="light">-</Button>
                    </Col>
                    <Col className="p-0" xs={4}>
                    <input type='number'  value={findquantity(selectId)} onChange={inputChange} className="inputQuant"/>
                    </Col>
                    <Col className="p-0" xs={3}>
                    <Button  onClick={()=>handleIncrement(selectId)} variant="light">+</Button>
                    </Col>
               </Row>
                
                
                </Col>
                <Col  xs={5}>
                <Button onClick={()=>handleAddToCart(selectId)} variant="success">Add to Card </Button>
                </Col>
                
            </Row>
            </Col>
        </Row>
        </Card>
    )
}

export default ItemPage;
