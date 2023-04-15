import {useState, useReducer, useEffect} from "react";

import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Flex,
    VStack,
  } from '@chakra-ui/react';
  
import { useToast } from '@chakra-ui/react';

import { useFormik } from "formik";
import * as Yup from 'yup';

import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';


export default function MultiSteps() {
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);

    //const [date, setDate] = useState('yyyy-MM-dd');
    const [time, setTime] = useState();
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState();
    const [seating, setSeating] = useState();
    
    //const [availableDates, setAvailableDates] = useState();
    
    const initializeTimes = {
        userdate: "yyyy-MM-dd"
    };
    
    const availableDates = (state, action) => {
        switch (action.type) {
            case "SET_DATE":
              return { userdate: action.payload };
            default:
              return state;
          }
    };

    const [state, dispatch] = useReducer(availableDates, initializeTimes);
    
    
    const props={
        state,
        time,
        guests,
        occasion,
        seating,
        dispatch,
        setTime,
        setGuests,
        setOccasion,
        setSeating
    };

    const formik = useFormik({
        initialValues: {
          date: "",
          time: "",
        },
        onSubmit: (props) => {
            console.log("Form values:", props.date, props.time, props.occasion, props.seating);
            toast({
                title: 'Booking successful!',
                description: `${props.seating} Reservation: The ${props.date} at ${props.time} for ${props.occasion}.`,
                status: 'success',
                duration: 5000,
                isClosable: true,
              });

        },
        validationSchema: Yup.object({
          date: Yup.string().required("Required"),
          time: Yup.string().required('Required'),
          })
        });

    /*const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form values:", props);
    };*/


    return (
      <VStack w={'full'} bgColor={'brand.primary_G'} h={'90vh'}>
        <Box
          borderWidth="1px"
          rounded="lg"
          maxWidth={800}
          p={15}
          m="auto"
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
          {step === 1 ? <Form1 props={props} formik={formik} /> : step === 2 ? <Form2 /> : <Form3 />}
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
                    backgroundColor:"green.100",
                    color:"brand.secondary_B"
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
      </VStack>
    );
  }