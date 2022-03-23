import React from 'react'
import { Button, Box } from '@chakra-ui/react'

function AppButton(props) {
  return (

  <Box>

    <Button bg={props.color} >
    {props.title}
  </Button>

  </Box>
  )
}

export default AppButton;