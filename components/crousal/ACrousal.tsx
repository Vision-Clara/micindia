import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";

const slideVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const dotsVariants = {
  initial: {},
  animate: {
    scale: 1.5,
    transition: { type: "spring", stiffness: 1000, damping: "10" },
  },
  hover: {
    scale: 1.5,
    transition: { duration: 0.2 },
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ACrousal = ({
  children,
  isPagination,
  isNavigation,
  height,
}: {
  children: ReactNode[];
  isPagination?: boolean;
  isNavigation?: boolean;
  height: string | string[];
}) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const currentIndex = wrap(0, children.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Box overflow="hidden" position="relative" height="fit-content">
      {/* slides */}
      <Box position="relative" height={height}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            style={{
              zIndex: 1,
              position: "absolute",
              width: "100%",
            }}
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* navigation */}
      {isNavigation && (
        <>
          <Button
            onClick={() => paginate(-1)}
            position="absolute"
            top="48%"
            left="1em"
            zIndex={2}
            variant="unstyled"
            opacity=".4"
            border="none"
            borderRadius="1rem"
            width="2rem"
            height="2rem"
            minWidth="2rem"
            bgColor="gray.200"
            sx={{
              transition: "all 100ms ease-in-out",
              ":hover": {
                opacity: ".8",
                transform: "scale(1.2)",
              },
            }}
            cursor="pointer"
          >
            <ChevronLeftIcon boxSize="1.5em" color="black" />
          </Button>
          <Button
            onClick={() => paginate(1)}
            position="absolute"
            top="48%"
            right="1em"
            zIndex={2}
            variant="unstyled"
            opacity=".4"
            border="none"
            borderRadius="1rem"
            width="2rem"
            height="2rem"
            minWidth="2rem"
            bgColor="gray.200"
            sx={{
              transition: "all 100ms ease-in-out",

              ":hover": {
                opacity: ".8",
                transform: "scale(1.2)",
              },
            }}
            cursor="pointer"
          >
            <ChevronRightIcon boxSize="1.5em" color="black" />
          </Button>
        </>
      )}

      {/* pagination */}
      {isPagination && (
        <Box position="absolute" bottom="1.5em" width="100%" zIndex={2}>
          <HStack justifyContent="center" width="100%">
            {children.map((_, index) => (
              <motion.div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "gray",
                }}
                key={index}
                initial="initial"
                animate={currentIndex === index ? "animate" : ""}
                whileHover="hover"
                variants={dotsVariants}
              ></motion.div>
            ))}
          </HStack>
        </Box>
      )}
    </Box>
  );
};
export default ACrousal;
