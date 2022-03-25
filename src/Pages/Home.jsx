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
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { swal } from "sweetalert";

import AppButton from "./../Components/Common/button";
import ButtonAdmin from "./../Components/Common/buttonDelete";

class LandingPage extends Component {
  state = {
    post: [],
  };

  getPostAPI = () => {
    axios
      .get("http://192.168.80.136:5000/api/transaction/pending")
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
      .delete(`http://192.168.80.136:5000/api/transaction/${data}`)
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
      .put(`http://192.168.80.136:5000/api/transaction/approval/${data}`, obj)
      .then((res) => {
        console.log(res);
        this.getPostAPI();
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  // Review = (post) => {
  //   const { isOpen, onOpen, onClose } = this.Review()

  //   return (
  //     <>
  //       <Button onClick={onOpen}>Trigger modal</Button>

  //       <Modal onClose={onClose} isOpen={isOpen} isCentered>
  //         <ModalOverlay />
  //         <ModalContent>
  //           <ModalHeader>Modal Title</ModalHeader>
  //           <ModalCloseButton />
  //           <ModalBody>
  //           <img src={`http://` + post.image} alt="preview" width="30%" />
  //           </ModalBody>
  //           <ModalFooter>
  //             <Button onClick={onClose}>Close</Button>
  //           </ModalFooter>
  //         </ModalContent>
  //       </Modal>
  //     </>
  //   )
  // }

  render() {
    const { length: data } = this.state.post;

    if (data === 0) return <Text>There are no data in the database</Text>;

    return (
      <VStack align="center">
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
                      <a href={`http://` + post.image}>
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
