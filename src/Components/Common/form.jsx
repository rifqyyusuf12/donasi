import React, { Component } from 'react';
import Joi from 'joi-browser';
import InPut from './input';
import { Button } from '@chakra-ui/react';
import { axios } from 'axios';


class Form extends Component {
    state = { 
        data: [],
        errors: {}
     };

     validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;
    
        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
      };
    
      validateProperty = ({ name, value, }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
      //   console.log(this.state.data, 'sucssessadadas')
        // var BodyFormData = new FormData()
        // BodyFormData.append('name', this.state.data.name)
        // BodyFormData.append('email', this.state.data.email)
        // BodyFormData.append('phonenumber', this.state.data.phonenumber)
        // BodyFormData.append('price', this.state.data.price)
        // BodyFormData.append('image', this.state.data.image)
        // console.log(BodyFormData)

        // const header= { 'method': 'POST',
        //     headers:{
        //       'Content-Type': 'multipart/form-data',
        //       'Accept': '/',
        //       'data' : BodyFormData,
        //       }
      // }
        //  let result =  await axios.post("http://192.168.80.136:5000/api/donation");
        //  console.log(result)
        


        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

  
      };

      handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
    
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    
      };

      renderButton(label){
          return (
            <Button 
            onClick={this.handleSubmit}
            disabled={this.validate()}
            
            >{label}</Button>
          )
      }


    renderInput(name, label, type ='text') {
        const { data, errors } = this.state;

        return (
        <InPut 
            type={type}
            name={name}
            value={data[name]} 
            label={label} 
            onChange={this.handleChange} 
            error={errors[name]}
        />

        );
    };
}
 
export default Form;