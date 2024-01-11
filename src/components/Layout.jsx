import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box bgColor={"gray"} p={8}>
        <Flex justifyContent={"flex-end"} gap={20}>
          <Text
            fontSize={"22px"}
            cursor={"pointer"}
            onClick={() => navigate("/")}
            sx={{
              "&:hover": {
                color: "white"
              }
            }}
          >
            Home
          </Text>
          <Text
            fontSize={"22px"}
            cursor={"pointer"}
            onClick={() => navigate("/blogs")}
            sx={{
              "&:hover": {
                color: "white"
              }
            }}
          >
            Blogs
          </Text>
          <Text
            fontSize={"22px"}
            cursor={"pointer"}
            onClick={() => navigate("/about")}
            sx={{
              "&:hover": {
                color: "white"
              }
            }}
          >
            About Us
          </Text>
        </Flex>
      </Box>
      <Outlet />
    </>
  );
};

export default Layout;
