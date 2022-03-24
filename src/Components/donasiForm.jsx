import React, { useState } from "react";
import { Button, Box, Center, Text } from "@chakra-ui/react";
import Axios from "axios";
import swal from "sweetalert";

import InputForm from "./Common/inputForm";
import Upload from "./Common/upload";

const DonasiForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = () => {
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("image: ", image);

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("phonenumber", phonenumber);
    data.append("price", price);
    data.append("image", image);

    Axios.post("http://localhost:5000/api/donation", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("post success", res);
        swal("Terimakasih Orang Baik!", "semoga berkah!", "success");
      })
      .catch((err) => {
        console.log("err: ", err);
        swal({
          title: "Tidak Berhasil",
          text: "periksa kembali form donasi anda!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        });
      });
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <Box w="30%">
      <Text fontSize="30" my="30" align="center" fontWeight="bold">
        Form Donasi
      </Text>
      <InputForm
        label="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        mb="15"
      />
      <InputForm
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb="15"
      />
      <InputForm
        label="No. Hp"
        value={phonenumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        mb="15"
      />
      <InputForm
        label="Jumlah Donasi"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        mb="15"
      />
      <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} mb="15" />
      <Center>
        <Button onClick={onSubmit} backgroundColor="yellow.400" my="10">
          SUBMIT
        </Button>
      </Center>
    </Box>
  );
};

export default DonasiForm;

// import React from 'react';
// import { Box, Button } from '@chakra-ui/react';
// import { useState } from 'react';

// import Inputform from './Common/inputForm';
// import { useState } from 'react';

// function PostForm() {
//     const url = "http://localhost:5000/api/donation"
//     const [data, setData] = useState({
//         name:"",
//         email:"",
//         phonenumber:"",
//         price:"",
//         image:"",
//     })

//     function submit(e) {
//         e.preventDefault();
//         axios.post(url,{
//             name: data.name,
//             email: data.email,
//             phonenumber: data.phonenumber,
//             price: data.price,
//             image: data.image
//         }).then(res=>{
//             console.log(res.data)
//         })
//     }

//     function handle(e) {
//         const newdata = {...data}
//         newdata[e.target.id] = e.target.value
//         setData(newdata)
//         console.log(newdata)
//     }

//     const [selectedFile, setSelectedFile] = React.useState(null)
//     function handleFileSelect(e) {
//         setSelectedFile(e.target.files[0])
//     }

//     return (
//         <>
//             <form onSubmit={(e) => submit(e)}>
//                 <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='nama' type="text"/>
//                 <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder='email' type="text"/>
//                 <input onChange={(e)=>handle(e)} id="phonenumber" value={data.phonenumber} placeholder='no Hp' type="numeric"/>
//                 <input onChange={(e)=>handle(e)} id="price" value={data.price} placeholder='jumlah Donasi' type="numeric"/>
//                 <input onChange={handleFileSelect()} id="image" value={data.image} placeholder='Bukti Transfer' type="file"/>
//                 <button>submit</button>
//             </form>
//         </>
//     )

// }

// export default PostForm;
