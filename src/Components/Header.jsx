import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
} from "@chakra-ui/react";


const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation

    useEffect(() => {
        if (location.pathname === "/") {
            setActiveTab("Home")
        }else if (location.pathname === "/formdonasi") {
            setActiveTab("DonasiForm");
        }else if (location.pathname === "/about") {
            setActiveTab("About")
        }
    }, [location])

  return (
    <>
      <Box className="Header" backgroundColor="yellow.300" h="100px">
        <Flex columnGap="10">
          <Box mt="30" ms="30">
            <Heading size="md">Donasi</Heading>
          </Box>
          <Spacer />
          <Box mt="30" me="30">
            <Link to="/admin">
              <Button
                className={`${activeTab === "admin"} ? "active" : ""}`}
                onClick={() => setActiveTab("admin")}
                colorScheme="teal"
                mr="4"
              >
                {" "}
                Home
              </Button>
            </Link>
            <Link to="/admin/login">
              <Button
                className={`${activeTab === "login"} ? "active" : ""}`}
                onClick={() => setActiveTab("login")}
                colorScheme="teal"
                mr="4"
              >
                Login
              </Button>
            </Link>
            <Link to="/admin/singup">
              <Button
                className={`${activeTab === "singup"} ? "active" : ""}`}
                onClick={() => setActiveTab("singup")}
                colorScheme="teal"
                mr="4"
              >
                Signup
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Header;