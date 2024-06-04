"use client";

import { ReactNode, useEffect, useRef } from "react";
import { Stack } from "@chakra-ui/react";

const Crousal = ({
  children,
  itemWidth,
  totalItems,
  gap,
}: {
  children: ReactNode[] | ReactNode;
  totalItems: number;
  itemWidth: number;
  gap: number;
}) => {
  const coursalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const effectiveItemWidth = itemWidth + 60;
      const totalWidth = effectiveItemWidth * totalItems;

      if (coursalRef.current) {
        const totalWidthToScroll = totalWidth - coursalRef.current.offsetWidth;

        coursalRef.current.scrollLeft <= totalWidthToScroll
          ? (coursalRef.current.scrollLeft += effectiveItemWidth)
          : (coursalRef.current.scrollLeft = 0);
      }
    }, 1500);

    return () => clearInterval(interval);
  });

  return (
    <Stack
      overflow="hidden"
      scrollBehavior="smooth"
      ref={coursalRef}
      direction="row"
      gap={`${gap}px`}
    >
      {children}
    </Stack>
  );
};

export default Crousal;
