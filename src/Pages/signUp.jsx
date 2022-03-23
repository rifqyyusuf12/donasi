import React, { Component } from 'react';
import { Box, VStack, Center, FormControl, Text } from '@chakra-ui/react';
import Joi from 'joi-browser';
import Form from './../Components/Common/form';


class Signup extends Form {
    state = { 
        data: {username:"", password:"", name:""},
        errors:{}
     } 

     schema={
         username: Joi.string()
         .required()
         .email()
         .label('username'),
         password: Joi.string()
         .required()
         .min(5)
         .label('Password'),
         name:Joi.string()
         .required()
         .label('Name')
     }

     doSubmit = () => {
         console.log('registrasion')
     }

    render() { 
        const { data, errors } = this.state;
        console.log(data)

        return (
            <VStack>
        <Center boxSize="3xl">
          <Box mx="12">
            <Text fontSize="4xl">Registrasi</Text>
          </Box>
          <FormControl onSubmit={this.handleSubmit}>
            {this.renderInput('username', 'Username')}
            {this.renderInput('password', 'Password', 'password')}
            {this.renderInput('name', 'Name')}
            {this.renderButton('Register')}
          </FormControl>
        </Center>
      </VStack>
        );
    }
}
 
export default Signup;