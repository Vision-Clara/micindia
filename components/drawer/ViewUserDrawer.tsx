import useForm from "@/hooks/useForm";
import { IUpdateUserFormData, IUser } from "@/types";
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
  Select,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import SuccessToast from "../toast/SuccessToast";
import ErrorToast from "../toast/ErrorToast";
import { updateUserById } from "@/api/user";
import { isFilled } from "@/utils/validators";
import { cities, roles, status } from "@/sampleData";
import { MutatorOptions, mutate, useSWRConfig } from "swr";
import useSWR from "swr";

const ViewUserDrawer = ({ user }: { user: IUser }) => {
  const toast = useToast();
  const { data } = useSWR<IUser[]>("/user");
  const { mutate } = useSWRConfig();

  const [formData, isSubmitting, onChangeHandler, handleSubmit] =
    useForm<IUpdateUserFormData>({
      initialFormData: {
        values: {
          name: user.name,
          email: user.email,
          branch: user.branch,
          status: user.status,
          isActive: user.isActive,
          role: user.role,
        },
        errors: {
          name: "",
          email: "",
          branch: "",
          status: "",
          isActive: "",
          role: "",
        },
      },
      validator,
    });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const onSubmit = async () => {
    try {
      //update user
      const payload = {
        email: formData.values.email,
        name: formData.values.name,
        branch: formData.values.branch,
        status: formData.values.status,
        isActive: formData.values.isActive,
        role: formData.values.role,
      };

      const optimisticData = {
        _id: user._id,
        email: formData.values.email,
        name: formData.values.name,
        branch: formData.values.branch,
        status: formData.values.status,
        isActive: formData.values.isActive,
        role: formData.values.role,
      };

      const options: MutatorOptions<IUser[]> = {
        optimisticData: (currentData: IUser[] | undefined) =>
          currentData?.map((item) =>
            item._id === user._id ? optimisticData : item
          ) ?? [],
        rollbackOnError: true,
      };

      const updateUsers = async () => {
        const updatedUser = await updateUserById(user._id, payload);
        return (
          data?.map((item) => (item._id === user._id ? updatedUser : item)) ??
          []
        );
      };

      mutate("/user", updateUsers, options);
      onClose();

      //show success toast
      toast({
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
        render: () => <SuccessToast message="User Updated Successfully" />,
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

  function validator(formValues: IUpdateUserFormData) {
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

  return (
    <>
      <Button ref={btnRef} colorScheme="blue" variant="solid" onClick={onOpen}>
        Open
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
            <DrawerHeader>Edit User</DrawerHeader>

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

              <FormControl my="20px" isInvalid={formData.errors.branch !== ""}>
                <FormLabel>City</FormLabel>
                <Select
                  name="branch"
                  onChange={onChangeHandler}
                  placeholder="Choose One"
                  value={formData.values.branch}
                >
                  {cities.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{formData.errors.branch}</FormErrorMessage>
              </FormControl>

              <FormControl my="20px" isInvalid={formData.errors.status !== ""}>
                <FormLabel>Status</FormLabel>
                <Select
                  name="status"
                  onChange={onChangeHandler}
                  placeholder="Choose One"
                  value={formData.values.status}
                >
                  {status.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{formData.errors.status}</FormErrorMessage>
              </FormControl>

              <FormControl
                my="20px"
                isInvalid={formData.errors.isActive !== ""}
              >
                <FormLabel htmlFor="email-alerts" mb="0">
                  isActive?
                </FormLabel>
                <Switch
                  name="isActive"
                  onChange={onChangeHandler}
                  value={formData.values.isActive}
                />
                <FormErrorMessage>{formData.errors.isActive}</FormErrorMessage>
              </FormControl>

              <FormControl my="20px" isInvalid={formData.errors.role !== ""}>
                <FormLabel>Role</FormLabel>
                <Select
                  name="role"
                  onChange={onChangeHandler}
                  placeholder="Choose One"
                  value={formData.values.role}
                >
                  {roles.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{formData.errors.role}</FormErrorMessage>
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
                Update
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Box>
      </Drawer>
    </>
  );
};

export default ViewUserDrawer;
