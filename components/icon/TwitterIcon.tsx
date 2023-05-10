import { Icon } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";

const TwitterIcon = ({ color }: { color: string }) => {
  return <Icon w="6" h="6" as={BsTwitter} color={color}></Icon>;
};

export default TwitterIcon;
