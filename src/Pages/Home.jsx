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
  Input
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { swal } from 'sweetalert';

import AppButton from './../Components/Common/button';
import ButtonDelete from './../Components/Common/buttonDelete';



class LandingPage extends Component {
  state = {
      post:[],
  };

  getPostAPI = () => {
    axios.get("http://localhost:5000/api/transaction/pending")
    .then((result)=>{
      console.log(result.data)
      this.setState({
        post: result.data
      })
    })
  }

  componentDidMount() {
    this.getPostAPI()
  }

  handleRemove = (data) => {
    console.log(data)
    let obj= { 
              "isshow" : "no"
            }
    console.log(obj)
    axios.delete(`http://localhost:5000/api/transaction/${data}`).then((res)=>{
    console.log(res)
    this.getPostAPI()
    })
  }

  handleUpdate = (data) => {
    console.log(data)
    let obj= { 
              "approved": "yes"
            }   
    alert('Anda sudah mengsubmit data!')
    axios.put(`http://localhost:5000/api/transaction/approval/${data}`, obj)
    .then((res)=>{
    console.log(res)
    this.getPostAPI()
    })
    .catch(err => {
        console.log('err: ', err)
    })
  }

  

  render() {
    const { length : data } = this.state.post

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
              {this.state.post.map(post => 
                <Tr key={post._id} >
                    <Td>{post.name}</Td>
                    <Td>{post.email}</Td>
                    <Td>{post.phonenumber}</Td>
                    <Td>{post.price}</Td>
                    <Td><img src='https://placeimg.com/100/100/any' alt="preview"/>
                    <Text>{post.image}</Text>
                    </Td>
                    <Td><ButtonDelete remove={this.handleRemove} data={post} update={this.handleUpdate} /></Td>
                </Tr>   
                )}
          </Tbody>
        </Table>

        </Center>
        <Box>
        <Link 
            to="/"
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