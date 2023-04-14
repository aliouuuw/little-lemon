import {useState} from "react";

import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Flex,
    VStack,
  } from '@chakra-ui/react';
  
import { useToast } from '@chakra-ui/react';

import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

export default function MultiSteps() {
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
    return (
      <VStack w={'full'} bgColor={'brand.primary_G'} h={'90vh'}>
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          p={15}
          m="auto"
          as="form"
          bgColor={'brand.secondary_W'}
          >
          <Progress
            colorScheme={'teal'}
            value={progress}
            mb="5%"
            mx="5%"
            isAnimated></Progress>
          {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
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
                  isDisabled={step === 3}
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
                  colorScheme="red"
                  variant="solid"
                  onClick={() => {
                    toast({
                      title: 'Account created.',
                      description: "We've created your account for you.",
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    });
                  }}>
                  Submit
                </Button>
              ) : null}
            </Flex>
          </ButtonGroup>
        </Box>
      </VStack>
    );
  }