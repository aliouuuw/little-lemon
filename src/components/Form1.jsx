import {useState} from "react";
import {
    Heading,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    Radio,
    RadioGroup,
    Stack,
    Button,
    Text,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    useToast,
  } from "@chakra-ui/react";
  
export default function Form1() {
    const toast = useToast();
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState(null);
    const [seating, setSeating] = useState(null);
  
     /* const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      toast({
        title: "Table booked!",
        description: "Your reservation has been confirmed.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      console.log({date,time,guests, occasion, seating});
    }; */

  
    return (
        <Stack spacing={4} w={{base: '70vw', md: '45vw', lg: '30vw'}}>
            <Heading fontSize={'2xl'} w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Booking Information
            </Heading>
          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <InputGroup borderColor='brand.secondary_B'>
              <Input type="date" onChange={(e) => setDate(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Time</FormLabel>
            <Select borderColor='brand.secondary_B' placeholder="Select a time" onChange={(e) => setTime(e.target.value)}>
              <option value="5pm">5pm</option>
              <option value="6pm">6pm</option>
              <option value="7pm">7pm</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Number of Guests</FormLabel>
            <Slider value={guests} min={1} max={10} onChange={(value) => setGuests(value)}>
              <SliderTrack bgColor={'gray.300'}>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb bgColor={'brand.secondary_B'}/>
            </Slider>
            <Text mt={2} textAlign="center">{guests}</Text>
          </FormControl>
          <FormControl>
            <FormLabel>Occasion</FormLabel>
            <RadioGroup onChange={setOccasion} value={occasion}>
              <Stack direction="row">
                <Radio borderColor='brand.secondary_B' value="birthday">Birthday</Radio>
                <Radio borderColor='brand.secondary_B' value="anniversary">Anniversary</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Seating</FormLabel>
            <RadioGroup onChange={setSeating} value={seating}>
              <Stack direction="row">
                <Radio borderColor='brand.secondary_B' value="standard">Standard</Radio>
                <Radio borderColor='brand.secondary_B' value="outside">Outside</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        </Stack>
    );
  }
  