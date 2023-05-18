import { Icon, IconProps } from "@chakra-ui/react";
import { RiInstagramFill } from "react-icons/ri";

const InstaIcon = (props: IconProps) => {
  return <Icon w="6" h="6" {...props} as={RiInstagramFill}></Icon>;
};

export default InstaIcon;
