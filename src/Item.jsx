import React from "react";
import {Button, Card} from "react-bootstrap"
import {useNavigate} from 'react-router-dom'

function Item(props){
    const {product, itemNavigate, handleAddToCart}=props
    const navigate=useNavigate()

    const  handleNavigate=(id)=>{ 
        itemNavigate(id)
        navigate(`/item/:${id}`)
    }

    return( 

        <Card id={product.id}  bg="light" style={{height:'35rem', width:'10rem', textAlign:"center"}}>
        <Card.Img className='responsiveList'variant="top"  src={product.image} />
        <Card.Body className="mb-3">
            <Card.Title>
                {product.title}
            </Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <Card.Text>
                {product.price}    
            </Card.Text>
        </Card.Body>
        <Button className="mb-2" onClick={()=>handleNavigate(product.id)} variant="secondary">View Details</Button>
        <Button onClick={()=>handleAddToCart(product.id)} variant="secondary">Add to Card</Button>
        <Card.Footer style={{fontSize:'small'}} className="text-muted">Last {product.stok} products</Card.Footer>

        </Card>
    )
}

export default Item;