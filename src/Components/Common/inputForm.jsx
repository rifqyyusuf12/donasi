import React from 'react';
import { Input } from '@chakra-ui/react';


const InputForm = ({label, ...rest}) => {
    return ( 
        <div>
            <p className='label'>{label}</p>
            <Input className='input' {...rest}/>
        </div>
     );
}
 
export default InputForm;