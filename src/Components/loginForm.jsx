import React, { useState } from "react";
import { Button, Box, Center, Text } from "@chakra-ui/react";
import Axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import {reactLocalStorage} from 'reactjs-localstorage';


import InputForm from "./Common/inputForm";



const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    let navigate = useNavigate()

  const onNavigate = () => {
    navigate("/signup")
  }

  const onSubmit = () => {
    // console.log("email: ", email);


    let datalogin=({"email" : email, "password" : password})
    // console.log(datalogin)
    Axios.post("http://localhost:5000/api/users/login", datalogin, {
      headers: {
        "Content-Type": "application/json",
        "accept" : "*/*"
      },
    })

        .then((res) => {
          swal("Login berhasil!", "halooo", "success");
          // console.log(res)
          reactLocalStorage.set('email', res.data.email);
          reactLocalStorage.set('token', res.data.token);
          // console.log(reactLocalStorage.get('email', res.data.token))
          // reactLocalStorage.get('email', res.data.email);
          navigate("/admin")
        })
        .catch((err) => {
          // console.log("err: ", err);
          swal({
            title: "Tidak Berhasil",
            text: "periksa kembali data anda!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          });
        });
  };

  return (
    <Box w="30%">
      <Text fontSize="30" my="30" align="center" fontWeight="bold">
        Login
      </Text>
      <InputForm
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb="15"
      />
      <InputForm
        label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        mb="15"
        type="password"
      />
      <Center>
        <Button onClick={onSubmit} backgroundColor="yellow.400" mx="3">
          Submit
        </Button>
        <Button onClick={onNavigate} backgroundColor="yellow.400" my="10">
          Register
        </Button>
      </Center>
    </Box>
  );
};

export default LoginForm;
