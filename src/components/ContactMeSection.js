import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";



const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const [loadText, setLoadText] = useState('Submit');

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: ""
    },
    onSubmit: (values) => {
      submit("/", values);
      /*isLoading(false);*/
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email('Invalid email').required('Required'),
      type: Yup.string().required("Please select an option"),
      comment: Yup.string().required("Required").min(20, 'Please enter at least 25 characters').test('not-only-spaces', 'Name cannot be empty', value => {
        return /\S/.test(value);
      }),
    }),
  });

  useEffect(() => { 
    if (response) { 
      onOpen(response.type, response.message); 
      if (response.type === 'success') { 
        formik.resetForm(); 
      };
      setLoadText('Submit');
    } 
  }, [response]); 

  useEffect(() => {
    if (isLoading){
      setLoadText('Loading');
    }
  }, [isLoading]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="100vw" p={16} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                )}
              </FormControl>
              
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                )}
      
              </FormControl>

              <FormControl isInvalid={formik.touched.type && formik.errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                id="type" 
                name="type" 
                placeholder="Select an option" 
                style={{color:'#dcdcdc'}}
                {...formik.getFieldProps("type")}
                > 
                  <option value="hireMe" style={{color:'black'}}>Freelance project proposal</option>
                  <option value="openSource" style={{color:'black'}}>Open source consultancy session</option>
                  <option value="other" style={{color:'black'}}>Other</option>
                </Select>
              {formik.touched.type && formik.errors.type && (
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              )}
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                {formik.touched.comment && formik.errors.comment && (
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                )}

              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isDisabled={isLoading || (Object.keys(formik.errors).length > 0)} >
                {loadText}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
