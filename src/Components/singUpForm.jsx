import React, { useState } from "react";
import { Button, Box, Center, Text } from "@chakra-ui/react";
import Axios from "axios";
import swal from "sweetalert";

import InputForm from "./Common/inputForm";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    let navigate = useNavigate()


  const onNavigate = () => {
      navigate("/login")
    }
  
  const onSubmit = () => {
    console.log("name: ", name);
    console.log("email: ", email);

 
    let data=({"email" : email, "password" : password, "name" : name})
    Axios.post("http://localhost:5000/api/users", data, {
      headers: {
        "Content-Type": "application/json",
        "accept" : "*/*"
      },
    })
        .then((res) => {
          console.log("post success", res );
          swal("berhasil Signup!", "silahkan login!", "success");
          navigate("/login")
        })
        .catch((err) => {
          console.log("err: ", err);
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
        SignUp
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
      <InputForm
        label="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        mb="15"
      />
      <Center>
        <Button onClick={onSubmit} backgroundColor="yellow.400" mx="3">
          Submit
        </Button>
        <Button onClick={onNavigate} backgroundColor="yellow.400" my="10">
          Back to Login
        </Button>
      </Center>
    </Box>
  );
};

export default SignUpForm;
