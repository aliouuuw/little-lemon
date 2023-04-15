import {
    Heading,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    Select,
    Radio,
    RadioGroup,
    Stack,
    Text,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
  } from "@chakra-ui/react";

  
export default function Form1({props, formik}) {
    
    const {
        state,
        time,
        guests,
        occasion,
        seating,
        dispatch,
        setTime,
        setGuests,
        setOccasion,
        setSeating} = props;

  
    return (
        <Stack spacing={4} w={{base: '70vw', md: '45vw', lg: '30vw'}}>
            <Heading fontSize={'2xl'} w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Booking Information
            </Heading>
          <FormControl isInvalid={formik.touched.date && formik.errors.date}>
            <FormLabel>Date</FormLabel>
            <InputGroup borderColor='brand.secondary_B'>
              <Input 
                type="date"
                name="date"
                value={state}
                onChange={(e) => dispatch({ type: "SET_DATE", payload: e.target.value })} {...formik.getFieldProps("date")}/>
            </InputGroup>
            {formik.touched.date && formik.errors.date && (
                  <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                )}
          </FormControl>
          <FormControl isInvalid={formik.touched.time && formik.errors.time}>
            <FormLabel>Time</FormLabel>
            <Select borderColor='brand.secondary_B' placeholder="Select a time" name="time" value={time} onChange={(e) => setTime(e.target.value)} {...formik.getFieldProps("time")} >
              <option value="5pm">5pm</option>
              <option value="6pm">6pm</option>
              <option value="7pm">7pm</option>
            </Select>
            {formik.touched.time && formik.errors.time && (
                  <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                )}
          </FormControl>
          <FormControl>
            <FormLabel>Number of Guests</FormLabel>
            <Slider value={guests} min={1} max={10} onChange={setGuests} >
              <SliderTrack bgColor={'gray.300'}>
                <SliderFilledTrack bgColor={'brand.primary_G'} />
              </SliderTrack>
              <SliderThumb bgColor={'brand.secondary_B'}/>
            </Slider>
            <Text mt={2} textAlign="center">{guests}</Text>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Occasion</FormLabel>
            <RadioGroup name="occasion" onChange={setOccasion} value={occasion}>
              <Stack direction="row">
                <Radio borderColor='brand.secondary_B' value="birthday">Birthday</Radio>
                <Radio borderColor='brand.secondary_B' value="anniversary">Anniversary</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Seating</FormLabel>
            <RadioGroup name="seating" onChange={setSeating} value={seating}>
              <Stack direction="row">
                <Radio borderColor='brand.secondary_B' value="standard">Standard</Radio>
                <Radio borderColor='brand.secondary_B' value="outside">Outside</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        </Stack>
    );
  }
  