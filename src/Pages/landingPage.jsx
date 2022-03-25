import React, { Component } from "react";
import {
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  VStack,
  Center
} from "@chakra-ui/react";
import axios from "axios";

import DonasiForm from './../Components/donasiForm';

class LandingPage extends Component {
  state = {
    post: []
  };
  getPostAPI = () => {
    axios.get("http://localhost:5000/api/transaction/")
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


  render() {
    const { length : data } = this.state.post

    if (data === 0 )
    return <Text>There are no data in the database</Text>


    return (
        
      <VStack>
        <Box>
          <Text> Showing {data} data in the database</Text>

        </Box>

        <Center w="100%">
    <Box w="50%">
            <Table size="lg" boxShadow="xl" >
            <Thead backgroundColor="yellow.300">
                <Tr>
                <Th>Nama</Th>
                <Th>Jumlah Donasi</Th>
                <th></th>
                <th></th>
                </Tr>
            </Thead>
            <Tbody>
                {this.state.post.map(post => 
                <Tr key={post._id}>
                    <Td>{post.name}</Td>
                    <Td>{post.price}</Td>
                </Tr>
                )}
            </Tbody>
            </Table>
            </Box>
        </Center>
        <DonasiForm />
      </VStack>
    );
  }
}

export default LandingPage;