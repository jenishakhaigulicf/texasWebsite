import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
  Stack
} from "@chakra-ui/react";

import React from "react";
import { useNavigate } from "react-router-dom";

// 2. taking the prop, properties
const Cards = (props) => {
  // 3: taking out blog from prop
  // destructuring blogs from props
  // similar to props.blog
  const { blog } = props;
  console.log(blog);
  const navigate = useNavigate();

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://media.istockphoto.com/id/496848472/vector/blog-blogging-and-blogglers-theme.jpg?s=612x612&w=0&k=20&c=mSpcEVoA-YeViMFD--ozz_CyP1UXnEgw89MpU8bwd9s="
          alt="blogs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{blog?.title.slice(0, 10)}</Heading>
          <Text>{blog?.body.slice(0, 100)}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => navigate(`/blogs/${blog.id}`)}
          >
            Show more
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Cards;
