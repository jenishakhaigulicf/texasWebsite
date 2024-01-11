// ----------synchronous and asynchronous code-------
//  async function nameOfFunction() {

//   }

//   const nameOfFunction = async() => {
// await
//   }

// 2. useEffect is another hook in React
// just like useState
// anything in react that starts with use is a hook
// useEffect is one of the inbuilt hook in react
// useEffect has two parameters, on is callback function
// another is dependency array

// const [isLoading, setIsLoading] = useState(true);

// const { isOpen, onClose, onOpen } = useDisclosure();
// setIsLoading(false);

// if (isLoading) {
//   return (
//     <Flex justifyContent={"center"} alignItems={"center"} height={"30vh"}>
//       <Spinner />
//     </Flex>
//   );
// }

// <ModalComponent onClose={onClose} isOpen={isOpen} />;
//       <Flex alignItems={"center"} gap={3} m={3}>
//         <Text fontSize={"32px"} fontWeight={700}>
//           Create a Blog
//         </Text>
//         <Button variant={"outline"} size={"lg"} onClick={onOpen}>
//           Get Started
//         </Button>
//       </Flex>
//       <Grid
//         templateColumns={"repeat(auto-fit, minmax(400px, 1fr))"}
//         gap={10}
//         p={5}
//       >
//         {blogs?.map((blog) => {
//           return <Cards key={blog.id} blog={blog} />;
//         })}
//       </Grid>

import React from "react";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import {
  Button,
  Flex,
  Grid,
  Spinner,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import ModalComponent from "../components/Modal";

const Blogs = () => {
  // 1. CREATE useState
  // 2. initial value of blogs is empty array ie.[]
  const [blogs, setBlogs] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const fetchData = async () => {
    try {
      // Hitting 3rd party Api.
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      // console.log(json);
      // 3. put the value from the api to the state
      setBlogs(json);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   return <div>{JSON.stringify(blogs)}</div>;
  return (
    <>
      <ModalComponent onClose={onClose} isOpen={isOpen} />;
      <Flex alignItems={"center"} gap="3" m="3">
        {/* keeping a text */}
        <Text fontSize={"32px"} fontWeight={700}>
          Create a Blog
        </Text>
        {/* button from chakra */}
        <Button variant={"outline"} size={"lg"} onClick={onOpen}>
          Get Started
        </Button>
      </Flex>
      {/* 4. map the blogs */}
      {/* 
        blogs---->
        [
          {title: "something", id: 1},
          {title: "something", id: 2},
          {title: "something", id: 3},
          {title: "something", id: 4},
        ]
        a/blog---->
        {title: "something", id: 1}
       */}
      {/* import  {Grid} from "@chakra-ui/react" */}
      <Grid templateColumns={"repeat(auto-fit,minmax(400px, 1fr))"}>
        {blogs?.map((blog) => (
          // 1. passing blog as prop to component Card
          <Cards key={blog.id} blog={blog} />
        ))}
      </Grid>
    </>
  );
};

export default Blogs;
