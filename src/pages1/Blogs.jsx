// pages>blogs
// creating blogs component

import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Image,
  Text,
  Box,
  Button,
  Grid,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

// component name should always be capital letter
// component must always have a return statement
export const Blogs = () => {
  // 1. create state
  // const data = []
  const [data, setData] = useState([]);
  // const userId = 0
  const [userId, setUserId] = useState(0);
  // const title = ""
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // function to fetch data
  const fetchData = async () => {
    const jsonResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const response = await jsonResponse.json();
    // 2. set Data
    // data = response
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // a. create function
  function handleSubmit() {
    // b. copy this
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        // c. update this
        // title:title, is equal to below code
        title: title,
        body,
        userId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    //
  }

  // 3. show data
  return (
    <>
      {/*  */}
      <Box m={10} width={"50%"}>
        <FormControl>
          {/* ctrl + space --> auto import */}
          <FormLabel> UserId</FormLabel>
          {/* 1 */}
          <Input onChange={(e) => setUserId(e.target.value)} />

          <FormLabel>Title</FormLabel>
          {/* 2 */}
          <Input onChange={(e) => setTitle(e.target.value)} />

          <FormLabel>Body</FormLabel>
          {/* 3 */}
          <Input onChange={(e) => setBody(e.target.value)} />
        </FormControl>

        {/* d. add onclick on the button */}
        <Button colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      {/*  */}
      <Grid
        templateColumns={"repeat(4, minmax(min-content, 1fr))"}
        gap={3}
        m={10}
      >
        {data.map(({ title }) => {
          return (
            <Card maxW="xs" key={title}>
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{title}</Heading>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Edit
                  </Button>
                  <Button variant="solid" colorScheme="red">
                    Delete
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        })}
      </Grid>
    </>
  );
};
