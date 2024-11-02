"use client";

import React from "react";
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
import axios from "axios";

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
      const template = certificateHelpers.getSocialInterCertificate();

      const name = commonHelpers.capitalizeFirstLetter(formData.values.name);
      const position = commonHelpers.capitalizeFirstLetter(
        formData.values.position
      );
      const location = commonHelpers.capitalizeFirstLetter(
        formData.values.location
      );
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
              Number(formData.values.months)
            )
          );

      const html = ejs.render(template, {
        name: name,
        position: position,
        location: location,
        from: startDate,
        to: endDate,
      });

      if (!process.env.NEXT_PUBLIC_AWS_PDF2HTML_API) {
        throw new Error("NEXT_PUBLIC_AWS_PDF2HTML_API is not defined");
      }

      const response = await axios.post(
        process.env.NEXT_PUBLIC_AWS_PDF2HTML_API,
        {
          html,
          pdfOptions: {
            landscape: true,
            format: "A4",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const encodedUri = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.setAttribute("href", encodedUri);
      link.setAttribute("target", "_blank");
      link.setAttribute("download", `${formData.values.name}.pdf`);
      link.click();

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
              loadingText="Generating"
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
    </Stack>
  );
};

export default Certificate;
