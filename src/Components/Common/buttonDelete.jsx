import React from 'react';
import {
    Button,

  } from "@chakra-ui/react";

const ButtonDelete = (props) => {
    return ( 
      <>
      <Button onClick={() => props.update(props.data._id)} colorScheme="green">Submit</Button>
      <Button onClick={() => props.remove(props.data._id)} colorScheme="red">Delete</Button>
      </>
     );
}
 
export default ButtonDelete;