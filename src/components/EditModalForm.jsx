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
import React from "react";

const EditModalForm = ({ formMethods, isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = formMethods;

  const isTitleError = watch("title") === "";
  const isBodyError = watch("body") === "";
  const isUserIdError = watch("userId") === "";

  const postData = async (data) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          method: "POST",
          body: JSON.stringify(data)
        }
      );
      const json = await response.json();
      reset({
        title: "",
        body: "",
        userId: ""
      });
      onClose();
    } catch (e) {
      console.log(e, "error");
    }
  };

  const onSubmitHandler = (data) => {
    postData(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={isTitleError}>
            <FormLabel>Title</FormLabel>
            <Input type="text" {...register("title")} />
            {/* {!isTitleError ? (
              <FormHelperText>Enter the title of your blog</FormHelperText>
            ) : (
              <FormErrorMessage>
                Please enter the title of your blog.
              </FormErrorMessage>
            )} */}
          </FormControl>
          <FormControl isInvalid={isBodyError}>
            <FormLabel>Body</FormLabel>
            <Textarea {...register("body")} />
            {/* {!isBodyError ? (
              <FormHelperText>Enter the body of your blog</FormHelperText>
            ) : (
              <FormErrorMessage>
                Please enter the body of your blog.
              </FormErrorMessage>
            )} */}
          </FormControl>
          <FormControl isInvalid={isUserIdError}>
            <FormLabel>UserId</FormLabel>
            <Input type="text" {...register("userId")} />
            {/* {!isUserIdError ? (
              <FormHelperText>Enter the user id of your blog</FormHelperText>
            ) : (
              <FormErrorMessage>
                Please enter the user id of your blog, 0 is invalid
              </FormErrorMessage>
            )} */}
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="outline" onClick={handleSubmit(onSubmitHandler)}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditModalForm;
