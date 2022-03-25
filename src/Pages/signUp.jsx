import { Center } from '@chakra-ui/react';
import React, { Component } from 'react';
import SignUpForm from '../Components/singUpForm';

class Signup extends Component {
  state = {  } 
  render() { 
    return (
      <Center>
        <SignUpForm />
      </Center>
    );
  }
}
 
export default Signup;































// import React, { Component } from 'react';
// import { Box, Input, Text, Button, Center } from '@chakra-ui/react';
// import Axios from "axios";
// import swal from "sweetalert";

// class Signup extends Component {
//   state = { 
//     email: '',
//     password: '',
//     name: ''
//    } 

//    handleChange = (e) => {
//     console.log(e.target.id)
//     this.setState({
//       [e.target.id]: e.target.value,
//     })
//    } 

//    handleSubmit = () => {
//     //  console.log('email: ', this.state.email)
//     //  console.log('password: ',this.state.password)
//     //  console.log('name: ',this.state.name)

//      const data = new FormData()
//      data.append = ("email", this.state.email)
//      data.append = ("password", this.state.password)
//      data.append = ("name", this.state.name)


//   //    let header= { 'method': 'POST',
//   //    headers:{
//   //      'Content-Type': 'multipart/form-data',
//   //      'Accept': '/'
//   //      }
//   //    }
//   //    Axios.post("http://192.168.80.136:5000/api/users", data, header)
//   //     .then((res) => {
//   //       console.log("post success", res );
//   //       swal("singup berhasil", "admin baru ciee!", "success");
//   //     })
//   //     .catch((err) => {
//   //       console.log("err: ", err);
//   //       swal({
//   //         title: "Tidak Berhasil mendaftar",
//   //         text: "periksa kembali data anda!",
//   //         icon: "warning",
//   //         buttons: true,
//   //         dangerMode: true,
//   //       });
//   //     });
//   };

//   render() { 
//     return (
//       <Center>
//         <Box>
//           <Box my="30" align="center">
//             <Text>Register Form</Text>
//           </Box>
//           <Box  align="center" >
//             <Input placeholder='email' id='email' type="text" my="3" w="70%" onChange={this.handleChange}/>
//             <Input placeholder='password' id='password' type="password" my="3" w="70%" onChange={this.handleChange}/>
//             <Input placeholder='name' id='name' type="text" my="3" w="70%" onChange={this.handleChange}/>
//           </Box>
//           <Box  my="30" align="center">
//             <Button onClick={this.handleSubmit}>Register</Button>
//           </Box>
//         </Box>
//       </Center>
//       );
//   }
// }
 
// export default Signup;



// import React, { Component } from 'react';
// import { Box, VStack, Center, FormControl, Text } from '@chakra-ui/react';
// import Joi from 'joi-browser';
// import Form from './../Components/Common/form';
// import SignUpForm from './../Components/singUpForm';


// class Signup extends Form {
//     state = { 
//         data: {username:"", password:"", name:""},
//         errors:{}
//      } 

//      schema={
//          username: Joi.string()
//          .required()
//          .email()
//          .label('username'),
//          password: Joi.string()
//          .required()
//          .min(5)
//          .label('Password'),
//          name:Joi.string()
//          .required()
//          .label('Name')
//      }

//      doSubmit = () => {
//          console.log('registrasion')
//      }

//     render() { 
//         const { data, errors } = this.state;
//         console.log(data)

//         return (
//             <VStack>
//         <Center boxSize="3xl">
//           <Box mx="12">
//             <Text fontSize="4xl">Registrasi</Text>
//           </Box>
//           <FormControl onSubmit={this.handleSubmit}>
//             {this.renderInput('username', 'Username')}
//             {this.renderInput('password', 'Password', 'password')}
//             {this.renderInput('name', 'Name')}
//             {this.renderButton('Register')}
//           </FormControl>
//         </Center>
//       </VStack>
//         );
//     }
// }
 
// export default Signup;