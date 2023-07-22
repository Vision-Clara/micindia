import {
  Box,
  Flex,
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
import { User } from "@/types";
import { getAllUsers } from "@/api/user";

// get static props
export const getStaticProps: GetStaticProps<{
  users: User[];
}> = async () => {
  try {
    const users = await getAllUsers();

    return { props: { users } };
  } catch (error: any) {
    return { props: { users: [] } };
  }
};

// manage users page
const ManageUsers = ({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Box paddingX="20px" paddingTop="50px">
      {/* users data table */}
      <Flex justify="center">
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Users Data</TableCaption>
            <Thead bgColor="blue.500">
              <Tr>
                <Th color="white">Sr. No.</Th>
                <Th color="white">Name</Th>
                <Th color="white">Email</Th>
                <Th color="white">City</Th>
                <Th color="white">Status</Th>
                <Th color="white">isActive</Th>
                <Th color="white">Role</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user, index) => (
                <Tr>
                  <Td>{index + 1}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.branch}</Td>
                  <Td>{user.status}</Td>
                  <Td>{user.isActive ? "Active" : "In Active"}</Td>
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
