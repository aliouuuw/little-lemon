import { useState } from "react";
import moment from "moment-timezone";

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

import { fetchAPI } from "../api/api";

  
export default function BookingForm({values, formik}) {
    
    const {
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
        } = values;

    const [timeSlots, setTimeSlots] = useState([]);

    
    return (
        <Stack spacing={4} w={{base: '70vw', md: '45vw', lg: '30vw'}}>
            <Heading fontSize={'2xl'} w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Booking Information
            </Heading>
          <FormControl isInvalid={formik.touched.date && formik.errors.date}>
            <FormLabel>Choose a date</FormLabel>
            <InputGroup borderColor='brand.secondary_B'>
              <Input 
                type="date"
                name="date"
                placeholder="Select Date"
                value={state.date}
                onChange={(e) => {
                    formik.handleChange(e);
                    dispatch({type: "SET_DATE" , payload: e.target.value});
                    const formatdt = moment.tz(e.target.value,'America/New_York').toDate();
                    setTimeSlots(fetchAPI(formatdt));
                  }}
                onBlur={formik.handleBlur}/>
            </InputGroup>
            {formik.touched.date && formik.errors.date && (
                  <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                )}
          </FormControl>
          <FormControl isInvalid={formik.touched.time && formik.errors.time}>
            <FormLabel>Available time slots</FormLabel>
            <Select 
              borderColor='brand.secondary_B' 
              placeholder="Select a time" 
              name="time" 
              value={time}
              onChange={(e) => {
                formik.handleChange(e);
                setTime(e.target.value);
              }}
              onBlur={formik.handleBlur}>
            {timeSlots?.map((timeslot, index) => (
                        <option key={index} value={timeslot}>{timeslot}</option>
            ))}
              
            </Select>
            {formik.touched.time && formik.errors.time && (
                  <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                )}
          </FormControl>
          <FormControl>
            <FormLabel>Number of Guests</FormLabel>
            <Slider 
              min={1} 
              max={10}
              value={guests} 
              onChange={(e) => setGuests(e)} >
              <SliderTrack bgColor={'gray.300'}>
                <SliderFilledTrack bgColor={'brand.primary_G'} />
              </SliderTrack>
              <SliderThumb bgColor={'brand.secondary_B'}/>
            </Slider>
            <Text mt={2} textAlign="center">{guests}</Text>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Occasion</FormLabel>
            <RadioGroup 
              name="occasion" 
              value={occasion}
              onChange={(e) => setOccasion(e)}>
              <Stack direction="row">
                <Radio borderColor='brand.secondary_B' value="birthday">Birthday</Radio>
                <Radio borderColor='brand.secondary_B' value="anniversary">Anniversary</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Seating</FormLabel>
            <RadioGroup 
              name="seating" 
              value={seating}
              onChange={(e) => setSeating(e)}>
              <Stack direction="row">
                <Radio borderColor='brand.secondary_B' value="standard">Standard</Radio>
                <Radio borderColor='brand.secondary_B' value="outside">Outside</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        </Stack>
    );
  }
  