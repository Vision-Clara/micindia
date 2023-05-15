import { Icon, IconProps } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";

const LeftQuoteIcon = (props: IconProps) => {
  return <Icon w="6" h="6" {...props} as={FaQuoteLeft}></Icon>;
};

export default LeftQuoteIcon;
