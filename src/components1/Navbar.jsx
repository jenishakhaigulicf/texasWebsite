import { Box, Flex, Text } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { NAVIGATION_ROUTES } from "../App";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        height="50px"
        bgColor="gray"
        //   text lai right shift
        justifyContent={"right"}
        //   text lai vertically shift
        alignItems={"center"}
        //   text ko bich ma gap generate
        // 8 * 4 px
        gap="8"
        //   padding right
        //    2* 4px = 8px
        pr="2"
      >
        <Text
          color="white"
          cursor={"pointer"}
          onClick={() => navigate(NAVIGATION_ROUTES.HOME)}
        >
          Home
        </Text>
        <Text
          color="white"
          cursor={"pointer"}
          onClick={() => navigate(NAVIGATION_ROUTES.ABOUT_US)}
        >
          About Us
        </Text>
        <Text
          color="white"
          cursor={"pointer"}
          onClick={() => navigate(NAVIGATION_ROUTES.BLOGS)}
        >
          Blogs
        </Text>
      </Flex>
      {/* <Outlet></Outlet> */}
      <Outlet />
    </>
  );
};

export default Navbar;
