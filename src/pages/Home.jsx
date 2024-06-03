import React from "react";
import { useForm } from "react-hook-form";
import EditModalForm from "../components/EditModalForm";
import { Button, useDisclosure } from "@chakra-ui/react";

const Home = () => {
  const formMethods = useForm();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = formMethods;
  const { onClose, isOpen, onOpen } = useDisclosure();

  return (
    <>
      Home
      <EditModalForm
        onClose={onClose}
        isOpen={isOpen}
        formMethods={formMethods}
      />
      <Button onClick={onOpen}>Edit</Button>
    </>
  );
};

export default Home;
