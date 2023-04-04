import React from "react";
import { CardGroup, Col} from "react-bootstrap"
import Item from "./Item";
import products from "./data/products"
import CarouselProduct from "./CarouselProduct"

function ItemList (props){
    const {itemNavigate, handleAddToCart}=props

    return(
        <>
        <CarouselProduct />
        <CardGroup style={{ paddingLeft:'15%', paddingTop:'5%',paddingRight:'10%'}} >
            
                {products.map((item,index)=>{
                return(
                    <Col className='mb-4'lg={2} key={index}>
                    <Item
                    product={item}
                    itemNavigate={itemNavigate}
                    handleAddToCart={handleAddToCart}
                    />
                    </Col>
                )
            })}
          
        </CardGroup>
        </>
            
    )
    

}

export default ItemList;