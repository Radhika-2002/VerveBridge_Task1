
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useDisclosure
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../../Redux/users/user.types';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { auth, token, loading, error} = useSelector((state)=>state.userReducer)
  const nav = useNavigate()
  const dispatch = useDispatch()
  return (
    <>
      <Box zIndex={1000} position={"fixed"} top={0} w={"100%"} boxShadow={"box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"} bg={"cyan"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={"bold"} fontSize={"160%"} cursor={"pointer"} onClick={()=>{
                nav("/")
              }}color={"blue"}>NOTE APP</Box>

          <Flex alignItems={'center'}>
            <Stack alignItems={'center'} direction={'row'} spacing={7}>
              <Button display={auth==true?"block":"none"} bg={"blue"}m color={"white"} onClick={()=>{
                nav("/notes")
              }}>All notes</Button>
              <Button display={auth==true?"none":"block"} bg={"blue"}m color={"white"} onClick={()=>{
                nav("/register")                
              }}>Sign in</Button>
              <Button display={auth==true?"none":"block"} bg={"blue"}m color={"white"} onClick={()=>{
                nav("/login")
              }}>Login</Button>
              <Button bg={"blue"} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  border={"2px solid blue"}
                  padding={2}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://api.dicebear.com/9.x/bottts/svg?backgroundRotation=0,360'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://api.dicebear.com/9.x/bottts/svg?backgroundRotation=0,360'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Hello, User ! <br></br>
                      Welcome to Note App!</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={()=>{
                    dispatch({type:LOGOUT})
                  }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}