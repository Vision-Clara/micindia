import { Button } from "@chakra-ui/button";
import { ViewIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { ChangeEvent } from "react";

interface PasswordInputProps {
  onChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  value: string;
}

function PasswordInput({ onChange, value }: PasswordInputProps) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        name="password"
        placeholder="Enter password"
        onChange={onChange}
        value={value}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="md" onClick={handleClick} variant="unstyled">
          <ViewIcon color={show ? "black" : "gray"} />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
