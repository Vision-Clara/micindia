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
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import SuccessToast from "../toast/SuccessToast";
import ErrorToast from "../toast/ErrorToast";
import { getUserById, updateUserById } from "@/api/user";
import { cities, roles, status } from "@/sampleData";
import useSWR from "swr";

const ViewUserDrawer = ({ userId }: { userId: string }) => {
  const toast = useToast();
  const { data: allUsers, mutate: allUsersMutate } = useSWR<IUser[]>("/user");
  const {
    data: user,
    error,
    isLoading,
    isValidating,
    mutate: currentUserMutate,
  } = useSWR<IUser>(["/user", userId], getUserById);

  const [formData, isSubmitting, onChangeHandler, handleSubmit] =
    useForm<IUpdateUserFormData>({
      initialFormData: {
        values: {
          name: "",
          email: "",
          branch: "",
          status: "",
          isActive: "",
          role: "",
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
        email: formData.values.email || undefined,
        name: formData.values.name || undefined,
        branch: formData.values.branch || undefined,
        status: formData.values.status || undefined,
        isActive:
          formData.values.isActive != ""
            ? formData.values.isActive === "enabled"
              ? true
              : false
            : undefined,
        role: formData.values.role || undefined,
      };

      const updatedUser = await updateUserById(userId, payload);
      currentUserMutate(updatedUser);
      allUsersMutate(
        allUsers?.map((item) => (item._id === userId ? updatedUser : item))
      );
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
    return {
      success: true,
      field: "",
      message: "",
    };
  }

  return isLoading || isValidating ? (
    <Box>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
      />
    </Box>
  ) : (
    <Box>
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
                  value={(formData.values.name || user?.name) ?? ""}
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
                  value={(formData.values.email || user?.email) ?? ""}
                />
                <FormErrorMessage>{formData.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl my="20px" isInvalid={formData.errors.branch !== ""}>
                <FormLabel>City</FormLabel>
                <Select
                  name="branch"
                  onChange={onChangeHandler}
                  placeholder="Choose One"
                  value={(formData.values.branch || user?.branch) ?? ""}
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
                  value={(formData.values.status || user?.status) ?? ""}
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
                  isChecked={
                    formData.values.isActive != ""
                      ? formData.values.isActive === "enabled"
                        ? true
                        : false
                      : user?.isActive ?? false
                  }
                  value={
                    formData.values.isActive != ""
                      ? formData.values.isActive === "enabled"
                        ? "disabled"
                        : "enabled"
                      : user?.isActive
                      ? "enabled"
                      : "disabled"
                  }
                />
                <FormErrorMessage>{formData.errors.isActive}</FormErrorMessage>
              </FormControl>

              <FormControl my="20px" isInvalid={formData.errors.role !== ""}>
                <FormLabel>Role</FormLabel>
                <Select
                  name="role"
                  onChange={onChangeHandler}
                  placeholder="Choose One"
                  value={(formData.values.role || user?.role) ?? ""}
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
    </Box>
  );
};

export default ViewUserDrawer;
