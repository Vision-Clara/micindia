"use client";
import { Icon, IconProps } from "@chakra-ui/react";
import { MdOutlineLocationOn } from "react-icons/md";

const LocationIcon = (props: IconProps) => {
  return (
    <Icon w="5" h="5" {...props} as={MdOutlineLocationOn}>
      <MdOutlineLocationOn />
    </Icon>
  );
};

export default LocationIcon;
