import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
  StyleProps,
} from "@chakra-ui/react";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import QRImage from "@/assets/images/qr.jpg";
import Image from "next/image";

function CustomModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        sx={{
          transition: "all 100ms ease-in-out",
          ":hover": {
            paddingBottom: "10px",
            bgColor: "white",
            color: "blue.500",
          },
        }}
        border="1px"
        borderColor="blue.500"
        bgColor="blue.500"
        color="white"
        p="10px"
        cursor="pointer"
        fontWeight="bold"
        onClick={onOpen}
      >
        Donate
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size={["xs", "md", "md"]}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Scan QR To Donate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text position="relative" textAlign="center" color="blue.500">
              <Box position="absolute" top="-5px" left="-5px">
                <RiDoubleQuotesL />
              </Box>
              <i>
                Every act of kindness, no matter how small, has the power to
                make a significant impact.
              </i>
              <Box position="absolute" bottom="5px" right="5px">
                <RiDoubleQuotesR />
              </Box>
            </Text>
            <Box pt="10px" borderRadius="5px" overflow="hidden" w="full">
              <Image src={QRImage} alt="QR Code To Donate"></Image>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal;
