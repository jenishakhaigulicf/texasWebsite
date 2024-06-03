import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input
} from "@chakra-ui/react";
import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  return (
    <FormControl isInvalid={isError}>
      <FormLabel>Email</FormLabel>
      <Input value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default Form;
