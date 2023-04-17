import React from 'react'
import { Box, VStack, Text, Heading, Stack, StackDivider, Card, CardBody, CardHeader, Button, Divider } from '@chakra-ui/react';
import { useAlertContext } from '../context/alertContext';
import { Link } from 'react-router-dom';

function InfoCard() {

    const { bookInfo } = useAlertContext()
    return (
        <VStack w={'full'} bgColor={'brand.primary_G'} minHeight={'100vh'} py={'10'}>
            <Box
                bgColor={'brand.secondary_W'}
                borderWidth="1px"
                rounded="lg"
                mx="auto"
                mt={8}
                w={{base: '70vw', md: '45vw', lg: '30vw'}}
                maxWidth={800}
                p={15}>
                <Heading fontSize={'2xl'} align={'center'} my={'2'} fontWeight={'normal'}>Your reservation was received. Thank you!</Heading>
                <Card bgColor={'#d9d9d9'} w={'auto'} >
                    <CardHeader>
                        <Text size='lg' textAlign={'center'} fontWeight={'bold'}>Reservation Information</Text>
                    </CardHeader>
                    <Divider color={'gray.600'}/>
                    <CardBody>
                        <Stack divider={<StackDivider borderColor={'gray.500'} />} spacing='4'>
                            <Box>
                                <Text size='xs' fontWeight={'bold'} textTransform='uppercase'>Date</Text>
                                <Text pt='2' fontSize='sm'>{bookInfo.date}</Text>
                            </Box>
                            <Box>
                                <Text size='xs' fontWeight={'bold'} textTransform='uppercase'>Time</Text>
                                <Text pt='2' fontSize='sm'>{bookInfo.time}</Text>
                            </Box>
                            <Box>
                                <Text size='xs' fontWeight={'bold'} textTransform='uppercase'>Number of guests</Text>
                                <Text pt='2' fontSize='sm'>{bookInfo.guests}</Text>
                            </Box>
                            <Box>
                                <Text size='xs' fontWeight={'bold'} textTransform='uppercase'>Occasion</Text>
                                <Text pt='2' fontSize='sm'>{bookInfo.occasion}</Text>
                            </Box>
                            <Box>
                                <Text size='xs' fontWeight={'bold'} textTransform='uppercase'>Seating</Text>
                                <Text pt='2' fontSize='sm'>{bookInfo.seating}</Text>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
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
    )
}

export default InfoCard
