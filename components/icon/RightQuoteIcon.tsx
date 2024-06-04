"use client";
import { Icon, IconProps } from "@chakra-ui/react";
import { FaQuoteRight } from "react-icons/fa";

const RightQuoteIcon = (props: IconProps) => {
  return <Icon w="6" h="6" {...props} as={FaQuoteRight}></Icon>;
};

export default RightQuoteIcon;
