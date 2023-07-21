import Layout from "@/components/layout/admin/Layout";
import { Heading } from "@chakra-ui/react";
import { ReactElement } from "react";

const ManageUsers = () => {
  return <Heading>Admin</Heading>;
};

ManageUsers.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ManageUsers;
