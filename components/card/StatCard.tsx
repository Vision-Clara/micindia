import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const StatCard = ({
  count,
  countSpeed,
  heading,
  countColor,
}: {
  count: number;
  countSpeed: number;
  heading: string;
  countColor: string;
}) => {
  const couterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (couterRef.current != null) {
      const countTo = Number(couterRef.current.getAttribute("data-to"));
      const countSpeed = Number(couterRef.current.getAttribute("data-speed"));

      const interval = setInterval(() => {
        if (couterRef.current != null) {
          const currentCount = Number(couterRef.current?.innerText);
          if (currentCount >= countTo - 1) {
            clearInterval(interval);
          }

          couterRef.current.innerText = String(currentCount + 1);
        }
      }, countSpeed);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <Flex h="full" justify="center" align="center">
      <Box textAlign="center">
        <Box>
          <Box
            as="span"
            ref={couterRef}
            fontSize="2xl"
            color={countColor}
            data-to={count}
            data-speed={countSpeed}
          >
            0
          </Box>
          <Box as="span" fontSize={"2xl"}>
            +
          </Box>
        </Box>

        <Heading as="h4" size={["sm", "md", "md"]}>
          {heading}
        </Heading>
      </Box>
    </Flex>
  );
};

export default StatCard;
