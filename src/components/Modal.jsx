import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea
} from "@chakra-ui/react";
import React, { useState } from "react";

const ModalComponent = ({ isOpen, onClose }) => {
  const [input, setInput] = useState({
    title: "",
    body: "",
    userId: ""
  });

  const postData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          method: "POST",
          body: JSON.stringify(data)
        }
      );
      const json = await response.json();
      setInput({
        title: "",
        body: "",
        userId: ""
      });
      onClose();
    } catch (e) {
      console.log(e, "error");
    }
  };

  const handleInputChange = (e, key) => {
    setInput((prevValue) => {
      return { ...prevValue, [key]: e.target.value };
    });
  };

  const onSubmitHandler = async () => {
    await postData(input);
  };

  // if(input.title === " ")
  //  return true
  // else return false
  // isTitleError is true (a boolean value)
  // when input ko title is empty string ie. ""
  // else it is false
  const isTitleError = input.title === "";
  const isBodyError = input.body === "";
  const isUserIdError = input.userId === "" || input.userId === "0";
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={isTitleError}>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              value={input.title}
              onChange={(e) => handleInputChange(e, "title")}
            />
            {!isTitleError ? (
              <FormHelperText>Enter the title of your blog</FormHelperText>
            ) : (
              <FormErrorMessage>
                Please enter the title of your blog.
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isBodyError}>
            <FormLabel>Body</FormLabel>
            <Textarea
              value={input.body}
              onChange={(e) => handleInputChange(e, "body")}
            />
            {!isBodyError ? (
              <FormHelperText>Enter the body of your blog</FormHelperText>
            ) : (
              <FormErrorMessage>
                Please enter the body of your blog.
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isUserIdError}>
            <FormLabel>UserId</FormLabel>
            <Input
              type="text"
              value={input.userId}
              onChange={(e) => handleInputChange(e, "userId")}
            />
            {!isUserIdError ? (
              <FormHelperText>Enter the user id of your blog</FormHelperText>
            ) : (
              <FormErrorMessage>
                Please enter the user id of your blog, 0 is invalid
              </FormErrorMessage>
            )}
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="outline" onClick={onSubmitHandler}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
