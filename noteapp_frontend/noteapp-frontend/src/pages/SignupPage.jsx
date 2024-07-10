import {
    Box, Button,
    Flex, FormControl,
    FormLabel, Heading, Image, Input, Stack, Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/config";

export default function SignupPage() {
    const nav = useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")

    const handleSignup=async()=>{
        let data = await axios.post(BASE_URL+"/user/register",{
            name, email, password
        })
        let {message, status} = data.data
        if(status==1){
            alert(message)
            nav("/login")
        }else{
            alert(message)
        }
    }
    
    return <Flex padding={4} w={"100%"}>
        <Image width={"50%"} src={"https://img.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg?t=st=1720272456~exp=1720276056~hmac=ae99eced2a978825d76f8622e48ac6ac641723b33536e4a30f31dc021398b6ef&w=740"} />
        <VStack w={"60%"}>
        <Flex
            minH={'50vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'3xl'}>Sign in to your Notes App</Heading>
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
                    <FormControl id="name">
                            <FormLabel>Name</FormLabel>
                            <Input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
                        </FormControl>
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
                            </Stack>
                            <Button onClick={handleSignup}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
        </VStack>
    </Flex>
}