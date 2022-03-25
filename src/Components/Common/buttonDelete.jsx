import React from 'react';
import {
    Button,

  } from "@chakra-ui/react";

const ButtonAdmin = (props) => {
    return ( 
      <>
      <Button onClick={() => props.update(props.data._id)} colorScheme="green" my="15">Submit</Button>
      <Button onClick={() => props.remove(props.data._id)} colorScheme="red">Delete</Button>
      </>
     );
}
 
export default ButtonAdmin;