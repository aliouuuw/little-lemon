import { useState, useReducer} from "react";

import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Flex,
  VStack,
} from '@chakra-ui/react';


import { useFormik } from "formik";
import * as Yup from 'yup';

import BookingForm from "./BookingForm";
import CustomerDetails from "./CustomerDetails";
import PaymentForm from './PaymentForm';

import { useAlertContext } from "../context/alertContext";

import { Link } from 'react-router-dom';


export default function MultiSteps(props) {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  /*const [date, setDate] = useState('yyyy-MM-dd');*/
  const [time, setTime] = useState();
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState();
  const [seating, setSeating] = useState();

  const { setBookInfo, setToastOn } = useAlertContext();

  const initializeTimes = {
    date: "yyyy-MM-dd",
  };

  const availableDates = (state, action) => {
    switch (action.type) {
      case "SET_DATE":
        return { date: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(availableDates, initializeTimes);


  const formStates = {
    state,
    dispatch,
    time,
    setTime,
    guests,
    setGuests,
    occasion,
    setOccasion,
    seating,
    setSeating
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
    },
    onSubmit: () => {
      const formValues = {
        date: state.date,
        time: time,
        guests: guests,
        occasion: occasion,
        seating: seating,
      };
      console.log("Form values:", formValues);
      setBookInfo(formValues);
      setToastOn(false);
      props.navigate("/little-lemon/confirmation");
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Required"),
      time: Yup.string().required('Required'),
    })
  });


  return (
    <VStack w={'full'} bgColor={'brand.primary_G'} minHeight={'100vh'}>

      <Box
        borderWidth="1px"
        rounded="lg"
        maxWidth={800}
        p={15}
        mx="auto"
        mt={8}
        as="form"
        onSubmit={formik.handleSubmit}
        bgColor={'brand.secondary_W'}
      >
        <Progress
          colorScheme={'teal'}
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <BookingForm values={formStates} formik={formik} /> : step === 2 ? <CustomerDetails /> : <PaymentForm />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                bgColor="brand.primary_G"
                color="brand.secondary_W"
                variant="solid"
                w="7rem"
                mr="5%"
                _hover={{
                  backgroundColor: "green.100",
                  color: "brand.secondary_B"
                }}>
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3 || (Object.keys(formik.errors).length > 0)}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                color="brand.primary_G"
                borderColor="brand.primary_G"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                type='submit'
                colorScheme="red"
                variant="solid"
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
      <Link to="/little-lemon">
        <Button
          mb={'5'}
          rounded={'xl'}
          bg={'brand.primary_Y'}
          color={'brand.secondary_B'}
          _hover={{
            bg: 'brand.secondary_W',
          }}>
          Go To Home
        </Button>
      </Link>
    </VStack>
  );
}