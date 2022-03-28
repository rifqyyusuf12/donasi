import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logout = () => {
    return ( 
        <Link to="/login">
         <Button onClick={() => window.localStorage.clear()} colorScheme="red" my="15">Logout</Button>
        </Link>
     );
}
 
export default Logout;