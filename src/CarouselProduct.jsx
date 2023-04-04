import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import products from "./data/products";
function CarouselProduct(){
  const [index] = React.useState(['0', '1', '2']);
  const selectedProducts = products.filter((product) => index.includes(product.id));
return(
  <Container style={{backgroundColor:'#e34d64', margin:'0 0 0 0', maxWidth:'100%' }}>
    <Carousel style={{ backgroundColor:'white',margin:'0% 18% 0 18% '}} variant="dark">
      {

      selectedProducts.map((product) => {
        return (
          <Carousel.Item>
            <Row>
              <Col>
                <img
                  className="d-block h-30 w-30"
                  src={product.image}
                  alt="First slide"
                />
              </Col>
              <Col className="m-5 p-5">
                <div className="pt-5 ">
                  <h3>{product.title }</h3>
                  <p>
                    {product.description}
                  </p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        );
      }
      )
      }
   
  </Carousel>
    </Container>
    
)

}

export default CarouselProduct;
