import React from 'react';
import { Center, Box } from '@chakra-ui/react';


const Upload = ({img, ...rest}) => {
    return ( 
        <Center>
        <Box className='upload'>
            {img && <img className='preview' src={img} alt="preview" width="40%" />}
            <input type="file"  {...rest} />
        </Box>

        </Center>
     );
}
 
export default Upload;