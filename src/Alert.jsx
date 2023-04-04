import{Alert} from 'react-bootstrap';
import React from 'react';

function AlertBox(props){
    const{variant, title, text}=props
    return(
        <Alert variant={variant} dismissible>
        <Alert.Heading>{title}</Alert.Heading>
        <p>
          {text}
        </p>
      </Alert>
    )
}
export default AlertBox;