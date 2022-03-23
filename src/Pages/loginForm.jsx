import {
    FormControl,
    Center,
    VStack,
    Text,
    Box,
    Button,
  } from "@chakra-ui/react";
  import React from "react";
  import Joi from "joi-browser";
  
import Form from "../Components/Common/form";
  
  class LoginForm extends Form { 
    state = {
      data: { username: "", password: "" },
      errors: {},
    };
  
    schema = {
      username: Joi.string().required().label("Username"),
      password: Joi.string().required().label("Password"),
    };
    
    doSubmit = () => {
        console.log('submitted')
      }
    
      render() {
        const { data } = this.state;
        console.log(data)
    
        return (
          <VStack>
            <Center boxSize="3xl">
              <Box mx="12">
                <Text fontSize="4xl">Login</Text>
              </Box>
              <FormControl onSubmit={this.handleSubmit}>
                {this.renderInput('username', 'Username')}
                {this.renderInput('password', 'Password', 'password')}
                {this.renderButton('Login')}
              </FormControl>
            </Center>
          </VStack>
        );
      }
    }
    
    export default LoginForm;
    