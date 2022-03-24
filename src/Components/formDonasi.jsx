import React, { Component } from "react";
import { Text, Box, VStack, Button, FormControl } from "@chakra-ui/react";
import Joi from "joi-browser";
import Form from "./Common/form";
import axios from "axios";

// var imgtmp 
class FormDonasi extends Form {
  state = {
    data: {name:"", email:"", phonenumber:"", price:"", image:"" },
    errors: {},
  };

  schema = {
    id: Joi.string(),
    name: Joi.string().required().label("Name"),
    email: Joi.string().required().email().label("Email"),
    phonenumber: Joi.number().required().min(0).label("Nomor Hp"),
    price: Joi.number().required().min(0).label("Jumlah Donasi"),
    image: Joi.string().required().label("Bukti Transfer"),
  };



  // doSubmit = (e) => {
  //   e.preventDefault()
  //   alert('ererere')
  // saveDonation(this.state.data);
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
  //     }
  // // await axios.post("http://192.168.80.136:5000/api/donation", header );
  // };

  // handleadd = async () => {
  //  const result = await axios.get("http://localhost:5000/api/transaction/")
  //  console.log(result)
  // }

  // onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     let img = event.target.files[0];
  //     imgtmp = URL.createObjectURL(img)
  //     this.setState( {data:[imgtmp]} );
  //   }
  //   const data = this.state.data
  //   console.log(data, imgtmp);
  // };

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = this.state.data
    console.log(data.image)
    

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  render() {
    const { data } = this.state;
    console.log(data);

    return (
      <VStack>
        <Box mt="20">
          <Text fontSize="3xl" fontWeight="bold">
            Donasi Sekarang
          </Text>
        </Box>
        <Box boxSize="xl" margin="20">
          <FormControl>
            {this.renderInput("name", "Nama")}
            {this.renderInput("email", "Email")}
            {this.renderInput("phonenumber", "No. Hp", "number")}
            {this.renderInput("price", "JumlahDonasi")}
            {this.renderInput("image", "Bukti Transfer", "file")}
            <Button onClick={this.handleSubmit}>Donasi</Button>
          </FormControl>
        </Box>
      </VStack>
    );
  }
}

export default FormDonasi;


