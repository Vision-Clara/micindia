import {
  Box,
  Flex,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Navbar from "@/components/layout/admin/Navbar";
import axiosInstance from "@/utils/axiosInstance";
import { User } from "@/types";

// fetch all users
export const getStaticProps: GetStaticProps<{
  users: User[];
}> = async () => {
  try {
    const res = await axiosInstance.get("/user");
    const users = res.data.users;

    return { props: { users } };
  } catch (error: any) {
    return { props: { users: [] } };
  }
};

const ManageUsers = ({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Box paddingX="20px" paddingY="10px">
      <Heading>Users</Heading>
      <Flex justify="center" paddingTop="50px">
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Users Data</TableCaption>
            <Thead bgColor="blue.500">
              <Tr>
                <Th color="white">Sr. No.</Th>
                <Th color="white">Name</Th>
                <Th color="white">Email</Th>
                <Th color="white">Contact</Th>
                <Th color="white">City</Th>
                <Th color="white">Status</Th>
                <Th color="white">isActive</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr>
                  <Td>{user._id}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.branch}</Td>
                  <Td>{user.status}</Td>
                  <Td>{user.isActive}</Td>
                  <Td>{user.role}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  );
};

ManageUsers.getLayout = function getLayout(page: ReactElement) {
  return <Navbar>{page}</Navbar>;
};

export default ManageUsers;
