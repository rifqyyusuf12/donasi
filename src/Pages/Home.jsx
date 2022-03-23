import React, { Component } from "react";
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  VStack,
  Center, 
  Text,
  HStack,
  Checkbox
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import AppButton from './../Components/Common/button';
import axios from "axios";


const dataAdmin = "http://localhost:5000/api/transaction/pending"

class LandingPage extends Component {
  state = {
      data:[]
    // donations: getDonations(),
  };


  async componentDidMount() {
    const data = await axios.get(dataAdmin)
    this.setState(data)
  }

  async handleTrue () {
    const data = await axios.get(dataAdmin)
    console.log(data)
  }
//   handleAdd = async () => {
//       const obj = { name:"a", email:"a", numberPhone:"087887147471", price: "100000000" }
//       const { data: post } = await axios.post(apiEndPoint, obj)
//     //   console.log(post) cek kepanggil ato engga
//     const posts = [post, ...this.state.posts]
//     this.setState.({ posts })
//   }

//   handleUpdate = async post => {
//       post.name = "UPDATE";
//       await axios.put(apiEndpoint + "/" + post.id, post);

//       const posts = [...this.state.posts]
//       const index = posts.indexOf(post);
//       posts[index] = {...post};
//       this.setState({ posts })
//   }


  handleDelete = () => {
    // const data = this.state.data
    // console.log(data)
    // // const [data] = this.state.data._id;
    // // console.log([data])
    // // const data = this.setState.data
    // console.log(data)

    
        // const posts = this.state.data.filter(data => data.id !== data.id)
        // console.log(posts)
    // try {
    //     await axios.delete(dataAdmin + '/' + data);
    //     throw new Error ("")
    // }catch (ex) {
    //     alert ("Something failed while deleting a posts !")
    //     this.setState({ posts: originalData })
    // }

//       console.log("delete", posts)
//     const donations = this.state.donations.filter( m => m._id !== donation._id )
//     this.setState ({ donations })
  }

  

  render() {
    const { length : data } = this.state.data

    if (data === 0 )
    return <Text>There are no data in the database</Text>

    return (
      <VStack>
        <Box>
          <Text> Showing {data} data in the database</Text>

        </Box>
        <Center>
        <Table >
          <Thead>
            <Tr>
              <Th>Nama</Th>
              <Th>Email</Th>
              <Th>no. Hp</Th>
              <Th>Jumlah Donasi</Th>
              <Th>Upload Bukti</Th>
              <th></th>
              <th></th>
              <th></th>
            </Tr>
          </Thead>
          <Tbody>
              {this.state.data.map(data => 
                <Tr key={data._id} >
                    <Td>{data.name}</Td>
                    <Td>{data.email}</Td>
                    <Td>{data.phonenumber}</Td>
                    <Td>{data.price}</Td>
                    <Td>{data.image}</Td>
                    <Td><Checkbox ></Checkbox></Td>
                    <td><Button onClick={() => this.handleUpdate()} colorScheme='green'>Submit</Button></td>
                    <td><Button onClick={() => this.handleDelete()} colorScheme='red'>Delete</Button></td>
                </Tr>   
                )}
          </Tbody>
        </Table>

        </Center>
        <Box>
        <Link 
            to="/landingpage"
            style= {{ marginBottom: 20 }}
            >
                <AppButton title="New Data" color="yellow"/>
            </Link>
        </Box>
      </VStack>
    );
  }
}

export default LandingPage;