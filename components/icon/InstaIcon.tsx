import { Icon } from "@chakra-ui/react";
import { RiInstagramFill } from "react-icons/ri";

const InstaIcon = ({ color }: { color: string }) => {
  return <Icon w="6" h="6" color={color} as={RiInstagramFill}></Icon>;
};

export default InstaIcon;
