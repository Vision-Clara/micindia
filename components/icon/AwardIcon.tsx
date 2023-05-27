import { Icon, IconProps } from "@chakra-ui/react";
import { FaAward } from "react-icons/fa";

const AwardIcon = (props: IconProps) => {
  return <Icon w="6" h="6" {...props} color="red.500" as={FaAward}></Icon>;
};

export default AwardIcon;
