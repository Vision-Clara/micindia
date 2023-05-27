import { Icon, IconProps } from "@chakra-ui/react";
import { FaAward } from "react-icons/fa";

const InstaIcon = (props: IconProps) => {
  return <Icon w="6" h="6" {...props} as={FaAward}></Icon>;
};

export default InstaIcon;
