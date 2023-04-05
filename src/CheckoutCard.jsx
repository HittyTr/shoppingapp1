import React from "react";

import { CardGroup, Row, Stack, Card, Col, Button } from "react-bootstrap";
import CheckoutItem from "./CheckoutItem";
import { calculateTotal } from "./function";

function CheckoutCard(props){
    const{list, handleDelete, handleDecrement, handleIncrement}=props
   
    return(
        list.length===0? <h1 className="text-center" style={{margin:'15% 15% 0 15%' }}>Cart is empty</h1>:
        <Row className="mt-5">
        <Col xs={7}>
        <CardGroup>
            <Stack gap={3}>
        {list.map((product,index)=>{
            return(
                    <CheckoutItem
                    product={product[0]}
                    quantity={product[1]}
                    key={index}
                    handleDelete={handleDelete}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement} 
                    />
            )

        })}
         </Stack>

         </CardGroup>
        </Col>
        <Col  xs={5}>
        <Card style={{marginRight:'8%'}}>
            <Card.Body>
                <Card.Title className="mb-4">Order summary</Card.Title>
                <Card.Text className='mb-4' as={Row}> 
                    <Col>
                    Subtotal ({list.length} items)
                    </Col>
                    <Col className="text-end">
                  {calculateTotal(list)} TL
                    </Col>
                </Card.Text>
                <Card.Text className='mb-4' as={Row}>
                    <Col>
                    Shipping
                    </Col>
                    <Col className="text-end">
                  15.45 TL 
                    </Col>
                </Card.Text >
                <Card.Text className='mb-4' as={Row}>
                    <Col>
                    Total
                    </Col>
                    <Col className="text-end">
                    {calculateTotal(list)+Number(15.45)} TL
                    </Col>
                </Card.Text >
                <Button variant="success">Proceed to checkout</Button>
            </Card.Body>

        </Card>
        </Col>
       </Row>
    
       
      
        
    )
}
export default CheckoutCard;