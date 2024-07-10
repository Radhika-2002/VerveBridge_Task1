import {
    Box, Button, Checkbox, Flex, FormControl,
    FormLabel, Heading, Image, Input, Stack, Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import login from "../assets/login.jpg";
import { getUser } from "../Redux/users/user.actions";

export default function LoginPage() {
    const nav = useNavigate()
    const { auth, token, loading, error} = useSelector((state)=>state.userReducer)
    console.log(auth,token)
    if(auth){
        nav("/notes")
    }

    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    const dispatch = useDispatch()

    const handleLogin=()=>{
        dispatch(getUser({email,password}))
    }
    // if(loading) return <h1 style={{marginTop:"80px"}}>Loading...</h1>
    // if(error) return <h1 style={{marginTop:"80px"}}>error</h1>

    return <Flex padding={4} w={"100%"}>
        <Image width={"50%"} src={login} />
        <VStack w={"60%"}>
        <Flex
            minH={'50vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'3xl'}>Login to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Text color={'blue.400'}>features</Text>
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Text color={'blue.400'}>Forgot password?</Text>
                            </Stack>
                            <Button onClick={handleLogin}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Login
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
        </VStack>
    </Flex>
}