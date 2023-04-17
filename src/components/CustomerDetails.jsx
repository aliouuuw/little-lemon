import {useState} from "react";
import {
    Button,
    Heading,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
    Stack
} from '@chakra-ui/react';

export default function CustomerDetails() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    return (
        <Stack w={{base: '70vw', md: '45vw', lg: '30vw'}}>
            <Heading fontSize={'2xl'}  w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Sign in to collect points (Optional)
            </Heading>
            <Flex>
                <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                        First name
                    </FormLabel>
                    <Input id="first-name" placeholder="First name"  borderColor='brand.secondary_B'/>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                        Last name
                    </FormLabel>
                    <Input id="last-name" placeholder="Last name" borderColor='brand.secondary_B'/>
                </FormControl>
            </Flex>
            <FormControl mt="2%">
                <FormLabel htmlFor="email" fontWeight={'normal'}>
                    Email address
                </FormLabel>
                <Input id="email" type="email" placeholder="youremail@example.com" borderColor='brand.secondary_B'/>
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl mt={"2%"}>
                <FormLabel
                    htmlFor="request">
                    Any requests for us?
                </FormLabel>
                <Textarea
                    id="request"
                    placeholder="Add a special request(optional)"
                    rows={3}
                    shadow="sm"
                    focusBorderColor="brand.400"
                    fontSize={{
                        sm: 'sm',
                    }}
                    borderColor='brand.secondary_B'
                />
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
                    Password
                </FormLabel>
                <InputGroup borderColor='brand.secondary_B' size="md">
                    <Input
                        pr="4.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
        </Stack>
    )
}


