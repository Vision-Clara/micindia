import {
  Box,
  Button,
  Flex,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import Navbar from "@/components/layout/admin/Navbar";
import { delUserById, getAllUsers } from "@/api/user";
import AddUserDrawer from "@/components/drawer/AddUserDrawer";
import ViewUserDrawer from "@/components/drawer/ViewUserDrawer";
import useSWR from "swr";
import Error from "@/components/error/Error";
import { DeleteIcon } from "@chakra-ui/icons";
import SuccessToast from "@/components/toast/SuccessToast";
import ErrorToast from "@/components/toast/ErrorToast";

// manage users page
const ManageUsers = () => {
  const toast = useToast();
  const { data, error, isLoading, mutate } = useSWR("/user", getAllUsers);

  const handleDeleteUser = async (userId: string) => {
    try {
      await delUserById(userId);
      mutate();

      //show success toast
      toast({
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
        render: () => <SuccessToast message="User Deleted" />,
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

  return (
    <Box paddingX="20px" paddingTop="50px">
      {/* users data table */}
      <Flex justifyContent="flex-start">
        <Box paddingY="5px">
          <AddUserDrawer />
        </Box>
      </Flex>

      <TableContainer>
        <Table variant="simple" size="md">
          <TableCaption>Users Data</TableCaption>
          <Thead bgColor="blue.500">
            <Tr>
              <Th color="white">Sr. No.</Th>
              <Th color="white">Name</Th>
              <Th color="white">City</Th>
              <Th color="white">Status</Th>
              <Th color="white">isActive</Th>
              <Th color="white">Role</Th>
              <Th color="white">View</Th>
              <Th color="white">Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isLoading ? (
              <Tr>
                <Td colSpan={7} textAlign="center">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </Td>
              </Tr>
            ) : error ? (
              <Tr>
                <Td colSpan={7} textAlign="center">
                  <Error />
                </Td>
              </Tr>
            ) : (
              data?.map((user, index) => (
                <Tr key={user._id}>
                  <Td>{index + 1}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.branch}</Td>
                  <Td>{user.status}</Td>
                  <Td>{user.isActive ? "Active" : "In Active"}</Td>
                  <Td>{user.role}</Td>
                  <Td>
                    <ViewUserDrawer user={user} />
                  </Td>
                  <Td textAlign="center">
                    <Button
                      colorScheme="red"
                      variant="solid"
                      w="fit-content"
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

ManageUsers.getLayout = function getLayout(page: ReactElement) {
  return <Navbar>{page}</Navbar>;
};

export default ManageUsers;
