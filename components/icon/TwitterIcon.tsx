import { Icon, IconProps } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";

const TwitterIcon = (props: IconProps) => {
  return <Icon w="6" h="6" {...props} as={BsTwitter}></Icon>;
};

export default TwitterIcon;
