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
  Center,
  Button
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import AppButton from './../Components/Common/button';
import FormDonasi from './../Components/formDonasi';
import axios from "axios";

class LandingPage extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const data = await axios.get("http://localhost:5000/api/transaction/")
    this.setState(data)
  }

  // handleFile(e){
    
  //   let data = e.target.files[0]
  //   this.setState({file: data})
  // }

  // handleUpload(e){
  //   console.log( this.state, "upload")

  //   let file = this.state.data 
    
  //   let formdata = new formdata()
    
  //   formdata.append('image', file)
    
  //   formdata.append('name', 'rifqy yusuf')

  //   axios({
  //     url:'http://localhost:5000/api/donation',
  //     method:"POST",
  //     headers:{
  //       authorization:'your token'
  //     }
  //   })
  // }

  render() {
    const { length : data } = this.state.data

    if (data === 0 )
    return <Text>There are no data in the database</Text>


    return (
        
      <VStack>
        <Box>
          <Text> Showing {data} data in the database</Text>

        </Box>

        <Center w="100%">
    <Box w="50%" shadow="12">
            <Table>
            <Thead backgroundColor="yellow.300" >
                <Tr>
                <Th>Nama</Th>
                <Th>Jumlah Donasi</Th>
                <th></th>
                <th></th>
                </Tr>
            </Thead>
            <Tbody>
                {this.state.data.map(data => 
                <Tr key={data._id}>
                    <Td>{data.name}</Td>
                    <Td>{data.price}</Td>
                </Tr>
                )}
            </Tbody>
            </Table>
            </Box>
        </Center>

            {/* <Center>
              {/* <form>

                <input type="file" name="image" onChange={(e) => this.handleFile(e)} />
                <br/>
                <Button onClick={(e)=>this.handleUpload(e)}>donasi</Button>
              </form> */}
            {/* </Center> */}
        <FormDonasi/>
      </VStack>
    );
  }
}

export default LandingPage;