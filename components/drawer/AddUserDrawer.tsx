"use client";

import useForm from "@/hooks/useForm";
import { ICreateUserFormData, IUser } from "@/types";
import { AddIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  useToast,
  FormControl,
  FormLabel,
  Box,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import SuccessToast from "../toast/SuccessToast";
import ErrorToast from "../toast/ErrorToast";
import { createUser } from "@/api/user";
import { isFilled } from "@/utils/validators";
import { useSWRConfig } from "swr";
import useSWR from "swr";

const initialFormData = {
  values: {
    name: "",
    email: "",
  },
  errors: {
    name: "",
    email: "",
  },
};

const AddUserDrawer = () => {
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const { data } = useSWR<IUser[]>("/user");
  const [formData, isSubmitting, onChangeHandler, handleSubmit] =
    useForm<ICreateUserFormData>({
      initialFormData,
      validator,
    });

  const onSubmit = async () => {
    try {
      //add user
      const newUser = {
        email: formData.values.email,
        name: formData.values.name,
        branch: "OTHER",
        status: "NEW_REGISTRATION",
        isActive: false,
        role: "USER",
      };

      const options = {
        optimisticData: (users: IUser[]) => [...users, newUser],
        rollbackOnError: true,
      };

      const payload = {
        email: formData.values.email,
        name: formData.values.name,
      };

      const updateUsers = async () => {
        const newUser = await createUser(payload);
        return data ? [...data, newUser] : [];
      };

      mutate("/user", updateUsers, options);
      onClose();

      //show success toast
      toast({
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
        render: () => <SuccessToast message="User Created Successfully" />,
      });
    } catch (error: any) {
      //show error toast
      toast({
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
        render: () => <ErrorToast message={error.response.data.message} />,
      });
    }
  };

  function validator(formValues: ICreateUserFormData) {
    if (!isFilled(formValues.name)) {
      return {
        success: false,
        field: "name",
        message: "Name is required",
      };
    }

    if (!isFilled(formValues.email)) {
      return {
        success: false,
        field: "email",
        message: "Email is required",
      };
    }

    return {
      success: true,
      field: "",
      message: "",
    };
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        ref={btnRef}
        colorScheme="blue"
        variant="solid"
        onClick={onOpen}
      >
        Add User
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create New User</DrawerHeader>

            <DrawerBody>
              <FormControl my="20px" isInvalid={formData.errors.name !== ""}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  onChange={onChangeHandler}
                  value={formData.values.name}
                />
                <FormErrorMessage>{formData.errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl my="20px" isInvalid={formData.errors.email !== ""}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  onChange={onChangeHandler}
                  value={formData.values.email}
                />
                <FormErrorMessage>{formData.errors.email}</FormErrorMessage>
              </FormControl>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                isLoading={isSubmitting}
                loadingText="Submitting"
                bg="blue.500"
                color="white"
                variant="outline"
                _hover={{
                  color: "blue.500",
                  bg: "white",
                  border: "1px",
                  borderColor: "blue.500",
                }}
                spinnerPlacement="start"
              >
                Create
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Box>
      </Drawer>
    </>
  );
};

export default AddUserDrawer;
