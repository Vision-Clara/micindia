"use client";
import { Icon, IconProps } from "@chakra-ui/react";
import { GrMapLocation } from "react-icons/gr";

const MapIcon = (props: IconProps) => {
  return (
    <Icon w="5" h="5" {...props} as={GrMapLocation}>
      <GrMapLocation />
    </Icon>
  );
};

export default MapIcon;
