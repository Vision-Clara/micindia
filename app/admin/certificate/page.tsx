"use client";

import ErrorToast from "@/components/toast/ErrorToast";
import SuccessToast from "@/components/toast/SuccessToast";
import useForm from "@/hooks/useForm";
import type { ICertificateData } from "@/types";
import certificateHelpers from "@/utils/certificateHelpers";
import commonHelpers from "@/utils/commonHelpers";
import { LOCATIONS, POSITIONS } from "@/utils/constants";
import { isFilled } from "@/utils/validators";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Button,
  useToast,
  FormErrorMessage,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { jsPDF } from "jspdf";
import CertificateView from "@/components/certificate";
import fonts from "@/public/fonts";

const initialFormData = {
  values: {
    name: "",
    position: "",
    location: "",
    fromDate: "",
    toDate: "",
    months: "",
  },
  errors: {
    name: "",
    position: "",
    location: "",
    fromDate: "",
    toDate: "",
    months: "",
  },
};

const Certificate = () => {
  const toast = useToast();
  const pdfRef = useRef<HTMLDivElement | null>(null);
  const [formData, isSubmitting, onChangeHandler, handleSubmit] =
    useForm<ICertificateData>({
      initialFormData,
      validator,
    });

  function validator(formValues: ICertificateData) {
    if (!isFilled(formValues.name)) {
      return {
        success: false,
        field: "name",
        message: "Name is required",
      };
    }

    if (!isFilled(formValues.position)) {
      return {
        success: false,
        field: "position",
        message: "Position is required",
      };
    }

    if (!isFilled(formValues.location)) {
      return {
        success: false,
        field: "location",
        message: "Location is required",
      };
    }

    if (!isFilled(formValues.fromDate)) {
      return {
        success: false,
        field: "fromDate",
        message: "Start date is required",
      };
    }

    if (!isFilled(formValues.months) && !isFilled(formValues.toDate)) {
      return {
        success: false,
        field: "months",
        message: "Either No. of Months or End Date is required",
      };
    }

    return {
      success: true,
      field: "",
      message: "",
    };
  }

  //handles form submit
  const onSubmit = async () => {
    try {
      //send message
      const payload = {
        name: formData.values.name,
        position: formData.values.position,
        location: formData.values.location,
        fromDate: formData.values.fromDate,
        months: formData.values.months
          ? Number.parseFloat(formData.values.months)
          : "",
        toDate: formData.values.toDate,
      };

      // const certificateHtml = certificateHelpers.getSocialInterCertificate({
      //   name: commonHelpers.capitalizeFirstLetter(payload.name),
      //   position: commonHelpers.capitalizeFirstLetter(payload.position),
      //   location: commonHelpers.capitalizeFirstLetter(payload.location),
      //   fromDate: startDate,
      //   toDate: endDate,
      // });

      // html2pdf()
      //   .from(certificateHtml, "string")
      //   .outputPdf("pdf", {
      //     format: [1440, 1018],
      //     unit: "px",
      //   })
      //   .save();

      const certificateHtml = pdfRef.current;

      const doc = new jsPDF({
        format: [1440, 1018],
        unit: "px",
        orientation: "landscape",
      });

      for (const font of fonts) {
        doc.addFileToVFS(`${font.name}${font.ext}`, font.base64String);
        doc.addFont(
          `${font.name}${font.ext}`,
          font.name,
          font.style,
          font.weight
        );
      }

      if (certificateHtml) {
        doc.html(certificateHtml, {
          callback: (doc) => {
            doc.save();
          },
        });
      }

      toast({
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
        render: () => <SuccessToast message="Generated" />,
      });
    } catch (error) {
      console.log(error);
      //show error
      toast({
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
        render: () => <ErrorToast message={"Something went wrong"} />,
      });
    }
  };

  const startDate = certificateHelpers.formatDateForCertificate(
    new Date(formData.values.fromDate)
  );
  const endDate = formData.values.toDate
    ? certificateHelpers.formatDateForCertificate(
        new Date(formData.values.toDate)
      )
    : certificateHelpers.formatDateForCertificate(
        commonHelpers.addMonths(
          new Date(formData.values.fromDate),
          formData.values.months
        )
      );

  return (
    <Stack
      my={["20px", "30px", "40px"]}
      mx={["20px", "30px", "100px"]}
      spacing={"100px"}
    >
      <Box>
        <Heading as="h2" size={["lg", "lg", "xl"]} textAlign={"center"}>
          Generate Certificate
        </Heading>

        <Stack
          maxWidth={["100%", "500px"]}
          marginTop={"20px"}
          marginX={"auto"}
          border="1px"
          w="100%"
          borderRadius="5px"
          p="20px"
          borderColor="gray.200"
        >
          <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl my="20px" isInvalid={formData.errors.name !== ""}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Volunteer name"
                name="name"
                onChange={onChangeHandler}
                value={formData.values.name}
              />
              <FormErrorMessage>{formData.errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl my="20px" isInvalid={formData.errors.position !== ""}>
              <FormLabel>Position</FormLabel>
              <Select
                placeholder="Select Position"
                name="position"
                onChange={onChangeHandler}
                value={formData.values.position}
              >
                {Object.values(POSITIONS).map((position, index) => {
                  return (
                    <option key={index} value={position}>
                      {position}
                    </option>
                  );
                })}
              </Select>
              <FormErrorMessage>{formData.errors.position}</FormErrorMessage>
            </FormControl>

            <FormControl my="20px" isInvalid={formData.errors.location !== ""}>
              <FormLabel>Location</FormLabel>
              <Select
                placeholder="Select Location"
                name="location"
                onChange={onChangeHandler}
                value={formData.values.location}
              >
                {Object.values(LOCATIONS).map((location, index) => {
                  return (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  );
                })}
              </Select>
              <FormErrorMessage>{formData.errors.location}</FormErrorMessage>
            </FormControl>

            <FormControl my="20px" isInvalid={formData.errors.fromDate !== ""}>
              <FormLabel>Start Date</FormLabel>
              <Input
                type="date"
                placeholder="Start Date"
                name="fromDate"
                onChange={onChangeHandler}
                value={formData.values.fromDate}
              />
              <FormErrorMessage>{formData.errors.fromDate}</FormErrorMessage>
            </FormControl>

            <FormControl my="20px" isInvalid={formData.errors.months !== ""}>
              <FormLabel>No. of months</FormLabel>
              <Input
                type="number"
                placeholder="Months"
                name="months"
                onChange={onChangeHandler}
                value={formData.values.months}
              />
              <FormErrorMessage>{formData.errors.months}</FormErrorMessage>
            </FormControl>

            <FormControl my="20px" isInvalid={formData.errors.toDate !== ""}>
              <FormLabel>End Date</FormLabel>
              <Input
                type="date"
                placeholder="End Date (Optional)"
                name="toDate"
                onChange={onChangeHandler}
                value={formData.values.toDate}
              />
              <FormErrorMessage>{formData.errors.toDate}</FormErrorMessage>
            </FormControl>

            <Button
              my="20px"
              type="submit"
              isLoading={isSubmitting}
              loadingText="Submitting"
              bg="blue.500"
              color="white"
              variant="outline"
              _hover={{
                color: "blue.500",
                bg: "white",
                border: "1px",
                borderColor: "blue.500",
              }}
              spinnerPlacement="start"
            >
              Submit
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box
        ref={pdfRef}
        overflowX={"scroll"}
        overflowY={"scroll"}
        backgroundColor={"white"}
      >
        <CertificateView
          data={{
            name: commonHelpers.capitalizeFirstLetter(formData.values.name),
            position: commonHelpers.capitalizeFirstLetter(
              formData.values.position
            ),
            location: commonHelpers.capitalizeFirstLetter(
              formData.values.location
            ),
            fromDate: startDate,
            toDate: endDate,
          }}
        />
      </Box>
    </Stack>
  );
};

export default Certificate;
