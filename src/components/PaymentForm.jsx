import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
} from "@chakra-ui/react";

import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PaymentForm() {
  return (
    <Box w={{ base: '70vw', md: '45vw', lg: '30vw' }} mx="auto">
      <Heading fontSize={'2xl'} w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Payment Information (Optional)
      </Heading>
      <Box bg="white" py={8} px={6} boxShadow="2xl" rounded="md">
        <Box mb={8}>
          <FontAwesomeIcon icon={faCreditCard} fontSize={24} />
        </Box>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="cardNumber">Card number</FormLabel>
            <Input
              id="cardNumber"
              name="cardNumber"
              type="number"
              borderColor='brand.secondary_B'
              placeholder="0000 0000 0000 0000"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="expiryDate">Expiry date</FormLabel>
            <Input
              id="expiryDate"
              name="expiryDate"
              type="text"
              borderColor='brand.secondary_B'
              placeholder="MM/YY"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="cvv">CVV</FormLabel>
            <Input
              id="cvv"
              name="cvv"
              type="number"
              placeholder="000"
              borderColor='brand.secondary_B'
            />
          </FormControl>
        </Stack>
      </Box>
    </Box>

  )
}


