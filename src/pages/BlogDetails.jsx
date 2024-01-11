import {
  Flex,
  Card,
  CardBody,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  Button,
  CardFooter,
  useDisclosure
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModalComponent from "../components/Modal";

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id: blogId } = useParams();
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${blogId}`
      );
      const json = await response.json();
      setBlogDetails(json);
      setIsLoading(false);
    } catch (e) {
      console.log(e, "error");
    }
  };

  const deleteData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
      method: "DELETE"
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Flex justifyContent={"center"} alignItems={"center"} height={"30vh"}>
        <Spinner />
      </Flex>
    );
  }

  //   return <div>{blogDetails?.body}</div>;

  return (
    <>
      <ModalComponent onClose={onClose} isOpen={isOpen} />;
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        m={10}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://media.istockphoto.com/id/496848472/vector/blog-blogging-and-blogglers-theme.jpg?s=612x612&w=0&k=20&c=mSpcEVoA-YeViMFD--ozz_CyP1UXnEgw89MpU8bwd9s="
          alt="blog"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{blogDetails?.title}</Heading>

            <Text py="2">{blogDetails?.body}</Text>
          </CardBody>
          <CardFooter gap={3}>
            <Button
              onClick={() => {
                // alert("Edit was clicked");
                onOpen();
              }}
            >
              Edit
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                deleteData();
                navigate("/blogs");
              }}
            >
              Delete
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};

export default BlogDetails;
