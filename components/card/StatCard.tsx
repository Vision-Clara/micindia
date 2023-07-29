import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const StatCard = ({
  count,
  countSpeed,
  heading,
  countColor,
  isExact,
}: {
  count: number;
  countSpeed: number;
  heading: string;
  countColor: string;
  isExact?: boolean;
}) => {
  const couterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const countDiv = couterRef.current;
    if (countDiv != null) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) {
          startTimestamp = timestamp;
        }

        const progress = Math.min(
          Math.sin(
            Math.min((timestamp - startTimestamp) / 5000, 1) * (Math.PI / 2)
          ),
          1
        );

        // const progress = Math.min((timestamp - startTimestamp) / 5000, 1);

        console.log(progress);

        countDiv.innerText = `${Math.floor(progress * count)}`;

        if (progress < 1) {
          window.requestAnimationFrame(step);
          console.log("end");
        }
      };
      window.requestAnimationFrame(step);
    }
  });

  return (
    <Flex h="full" justify="centesr" align="center">
      <Box textAlign="center">
        <Box>
          <Box
            as="span"
            ref={couterRef}
            fontSize="xl"
            color={countColor}
            data-to={count}
            data-speed={countSpeed}
          >
            0
          </Box>
          {!isExact && (
            <Box as="span" fontSize={"xl"} color={countColor}>
              +
            </Box>
          )}
        </Box>

        <Heading as="h4" size={["sm", "md", "md"]}>
          {heading}
        </Heading>
      </Box>
    </Flex>
  );
};

export default StatCard;
