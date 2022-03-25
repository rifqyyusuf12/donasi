import React, { Component } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  VStack,
  Text,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

import AppButton from "./../Components/Common/button";
import ButtonAdmin from "./../Components/Common/buttonDelete";
import Header from './../Components/Header';

class LandingPage extends Component {
  state = {
    post: [],
  };

  getPostAPI = () => {
    axios
      .get("http://localhost:5000/api/transaction/pending")
      .then((result) => {
        console.log(result.data);
        this.setState({
          post: result.data,
        });
      });
  };

  componentDidMount() {
    this.getPostAPI();
  }

  handleRemove = (data) => {
    console.log(data);
    let obj = {
      isshow: "no",
    };
    console.log(obj);
    axios
      .delete(`http://localhost:5000/api/transaction/${data}`)
      .then((res) => {
        console.log(res);
        this.getPostAPI();
      });
  };

  handleUpdate = (data) => {
    console.log(data);
    let obj = {
      approved: "yes",
    };
    alert("Anda sudah mengsubmit data!");
    axios
      .put(`http://localhost:5000/api/transaction/approval/${data}`, obj)
      .then((res) => {
        console.log(res);
        this.getPostAPI();
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };


  render() {
    const { length: data } = this.state.post;

      // if (!authorized) {
      //   return <Navigate to="/login" replace />
      // }

    if (data === 0) return <Text>There are no data in the database</Text>;


    return (
      <VStack align="center">
        <Header />
        <Box py="30">
          <Text> Showing {data} data in the database</Text>
        </Box>
        <Box w="70%" >
          <Table size="lg" boxShadow="xl">
            <Thead backgroundColor="yellow.300">
              <Tr>
                <Th>Nama</Th>
                <Th>Email</Th>
                <Th>no. Hp</Th>
                <Th>Jumlah Donasi</Th>
                <Th>Upload Bukti</Th>
                <th></th>
              </Tr>
            </Thead>
            <Tbody>
              {this.state.post.map((post) => (
                <Tr key={post._id}>
                  <Td>{post.name}</Td>
                  <Td>{post.email}</Td>
                  <Td>{post.phonenumber}</Td>
                  <Td>{post.price}</Td>
                  <Td>
                    <Box w="30%">
                      <a href={`http://` + post.image} target="blank">
                        <img src={`http://` + post.image} alt="preview" />
                      </a>
                    </Box>
                  </Td>
                  <Td>
                    <ButtonAdmin
                      remove={this.handleRemove}
                      data={post}
                      update={this.handleUpdate}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
          <Box py="30">
            <Link to="/" style={{ marginBottom: 20 }}>
              <AppButton title="New Data" color="yellow" />
            </Link>
          </Box>
      </VStack>
    );
  }
}

export default LandingPage;
