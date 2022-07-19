import React from "react";
import {
    Box,
    Center,
    Text,
    Image,
    VStack,
    HStack,
    Heading,
    Link,
    Button,
    useDisclose,
    Actionsheet,
    FormControl,
    Input,
    KeyboardAvoidingView,
    ScrollView,
    View,
    WarningOutlineIcon,
    AlertDialog

} from "native-base";

import axios from "axios";

import iconPNG from '../assets/icon.png'
import { TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DialogInput from 'react-native-dialog-input';


export default function SignIN({ navigation }) {

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    const [ActionsheetForm, setActionsheetForm] = React.useState('')
    function setActionSheetTypeForm(value) {
        setActionsheetForm(value)
        onOpen()
    }

    const ActionSheetTypeForm = () => {
        const [formData, setData] = React.useState({});
        const [inputPassword, setinputPassword] = React.useState(false);
        const [inputEmail, setinputEmail] = React.useState(false);
        const [Erros, setErrors] = React.useState({});


        const storeData = async (token, name, email, arduino_id) => {
            try {
                await AsyncStorage.setItem('@token', token)
                await AsyncStorage.setItem('@name', name)
                await AsyncStorage.setItem('@email', email)
                await AsyncStorage.setItem('@arduino_id', arduino_id)
            } catch (e) {
                // saving error
            }
        }


        function singIn() {
            axios.get("https://birdra1n.x10.bz/WebLightcontrolArduino/signin/", {
                params: {
                    method: "normal",
                    email: formData.email,
                    password: formData.password,
                },
            }).then(function (response) {
                console.log(response.data)
                var req = response.data

                if(req.success != undefined){
                    onClose()

                    setinputEmail(false)
                    setinputPassword(false)


                    storeData(req.token, req.name, req.email, req.arduino_id)

                    navigation.navigate('SpinnerScreen', {
                        direction: 'Dashboard'
                    })

                }

                if (req.error == undefined) {
                } else {
                    if (req.error == "The account is not activated. Check your email") {

                        setAlertState(true)

                    } else {
                        setAlertState(false)
                    }
                    if (req.error == "User does not exist.") {
                        setinputEmail(true)
                        alert(req.error)
                    } else {
                        setinputEmail(false)
                    }
                    if (req.error == "Incorrect password") {
                        setinputPassword(true)
                        alert(req.error)
                    } else {
                        setinputPassword(false)
                    }
                }
            });


        }




        function singUp() {

            if (formData.password != formData.password_confirm) {
                setinputPassword(true)
                alert("Passwords do not match")
            } else {
                setinputPassword(false)


                axios
                    .get("https://birdra1n.x10.bz/WebLightcontrolArduino/signup/", {
                        params: {
                            method: "normal",
                            name: formData.name,
                            email: formData.email,
                            password: formData.password,

                        },
                    }).then(function (response) {
                        console.log(response.data)
                        var req = response.data

                        if (req.error != undefined) {

                            if (req.error == "Email already exists") {
                                setinputEmail(true)
                                alert(req.email)
                            } else {
                                setinputEmail(false)
                            }
                        } else {
                            if (req.success != undefined) {
                                alert(req.success)
                                onClose()
                            }
                        }

                    });

            }
        }

        const [alertState, setAlertState] = React.useState(false)

        function activeAcct(){
            const activecode = formData.codeActive

            axios.get("https://birdra1n.x10.bz/WebLightcontrolArduino/activate_account/", {
                params: {
                    email: formData.email,
                    code: activecode
                },
            }).then(function (response) {
                console.log(response.data)
                var req = response.data

                if(req.success != undefined){
                    alert(req.success)
                    setAlertState(false)
                    singIn()
                }else{
                    alert(req.error)
                }
            });


        }




        if (ActionsheetForm == 'signin') {
            return (
                <Center w="100%">

                    <AlertDialog isOpen={alertState} onClose={alertState}>
                        <AlertDialog.Content>
                            <AlertDialog.Header>Activate your account</AlertDialog.Header>
                            <AlertDialog.Body>
                                <Text bold>Sent to: {formData.email}</Text>
                                <Input onChangeText={value => setData({
                                        ...formData,
                                        codeActive: value
                                    })}
                                    _focus={{
                                        borderColor: 'warning.500',
                                    }
                                    } variant="underlined" w={'90%'} placeholder="enter activation code"></Input>

                            </AlertDialog.Body>
                            <AlertDialog.Footer>

                                <Button.Group space={2}>
                                <Button variant="unstyled" colorScheme="coolGray" onPress={()=>setAlertState(false)} >
                Cancel
              </Button>
                                    <Button colorScheme="warning" onPress={()=>activeAcct()}>
                                        Confirma
                                    </Button>
                                </Button.Group>
                            </AlertDialog.Footer>
                        </AlertDialog.Content>
                    </AlertDialog>


                    <Box w="100%" maxW="290">
                        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            Welcome
                        </Heading>
                        <Heading mt="1" _dark={{
                            color: "warmGray.200"
                        }} color="coolGray.600" fontWeight="medium" size="xs">
                            Sign in to continue!
                        </Heading>

                        <VStack space={0.5} mt="5">
                            <FormControl>
                                <FormControl.Label>Email </FormControl.Label>
                                <Input isInvalid={inputEmail} w={290} onChangeText={value => setData({
                                    ...formData,
                                    email: value
                                })} selectionColor={'warning.500'}
                                    focusOutlineColor={'warning.500'}
                                    _focus={{
                                        borderColor: 'warning.500',
                                        backgroundColor: '#fff'
                                    }
                                    }
                                    autoComplete={"email"}
                                />
                            </FormControl>

                            <FormControl>
                                <FormControl.Label>Password</FormControl.Label>

                                <Input
                                    autoComplete={'password'}
                                    isInvalid={inputPassword} selectionColor={'warning.500'}
                                    focusOutlineColor={'warning.500'}
                                    _focus={{
                                        borderColor: 'warning.500',
                                        backgroundColor: '#fff'
                                    }
                                    }
                                    onChangeText={value => setData({
                                        ...formData,
                                        password: value
                                    })} type="password" placeholder="***********" />

                            </FormControl>
                            <Button mt="2" colorScheme="warning"
                                onPress={() => singIn()}

                            >
                                Sign up
                            </Button>
                            <HStack mt="6" justifyContent="center">
                                <Text fontSize="sm" color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }}>
                                    I'm a new user.{" "}
                                </Text>
                                <TouchableOpacity onPress={() => setActionSheetTypeForm('signup')}>
                                    <Text color={'warning.500'}>Sing up</Text>
                                </TouchableOpacity>
                            </HStack>
                        </VStack>
                    </Box>
                </Center>
            );
        } else {
            return (
                <Center w="100%">

                    <Box w="100%" maxW="290">
                        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            Welcome
                        </Heading>
                        <Heading mt="1" _dark={{
                            color: "warmGray.200"
                        }} color="coolGray.600" fontWeight="medium" size="xs">
                            Sign up to continue!
                        </Heading>

                        <VStack space={1} mt="5">
                            <FormControl>

                                <FormControl.Label>Name </FormControl.Label>
                                <Input
                                    selectionColor={'warning.500'}
                                    focusOutlineColor={'warning.500'}
                                    _focus={{
                                        borderColor: 'warning.500',
                                        backgroundColor: '#fff'
                                    }
                                    }
                                    onChangeText={value => setData({
                                        ...formData,
                                        name: value
                                    })}
                                />

                            </FormControl>
                            <FormControl>

                                <FormControl.Label>Email </FormControl.Label>
                                <Input
                                    isInvalid={inputEmail}
                                    selectionColor={'warning.500'}
                                    focusOutlineColor={'warning.500'}
                                    _focus={{
                                        borderColor: 'warning.500',
                                        backgroundColor: '#fff'
                                    }
                                    }

                                    onChangeText={value => setData({
                                        ...formData,
                                        email: value
                                    })} />

                            </FormControl>
                            <FormControl>
                                <FormControl.Label>Password</FormControl.Label>


                                <HStack w={'100%'} space={1}>
                                    <Input
                                        isInvalid={inputPassword}

                                        selectionColor={'warning.500'}
                                        focusOutlineColor={'warning.500'}
                                        _focus={{
                                            borderColor: 'warning.500',
                                            backgroundColor: '#fff'
                                        }
                                        }
                                        onChangeText={value => setData({
                                            ...formData,
                                            password: value
                                        })}
                                        w={'50%'} type="password" placeholder="***********" />
                                    <Input
                                        isInvalid={inputPassword}
                                        selectionColor={'warning.500'}
                                        focusOutlineColor={'warning.500'}
                                        _focus={{
                                            borderColor: 'warning.500',
                                            backgroundColor: '#fff'
                                        }
                                        }
                                        onChangeText={value => setData({
                                            ...formData,
                                            password_confirm: value
                                        })}
                                        w={'50%'} type="password" placeholder="Confirm password" />
                                </HStack>

                            </FormControl>
                            <Button mt="2" colorScheme="warning"
                                onPress={() => singUp()}
                            >
                                Sign up
                            </Button>
                            <HStack mt="6" justifyContent="center">
                                <Text fontSize="sm" color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }}>
                                    I'm a user.{" "}
                                </Text>
                                <TouchableOpacity onPress={() => setActionSheetTypeForm('signin')}>
                                    <Text color={'warning.500'}>Sing in</Text>
                                </TouchableOpacity>
                            </HStack>
                        </VStack>
                    </Box>
                </Center>
            )
        }


    };


    return (
        <Box w={'100%'} h={'100%'} safeArea bg={'#fff'} flex={1} justifyContent={'space-between'}>

            <Center>
                <Image source={require = iconPNG} alt="Alternate Text" size="xl" />
                <Heading size={'2xl'}>Light Arduino Control</Heading>
                <Text bold fontSize={'xl'}> WEB</Text>
            </Center>




            <Actionsheet isOpen={isOpen} onClose={onClose} >

                <Actionsheet.Content >

                    <Box h={500} px={0} >
                        <ActionSheetTypeForm />
                    </Box>
                </Actionsheet.Content>

            </Actionsheet>




            <Center>


                <HStack space={5} bottom={35}>
                    <Button
                        w={171}
                        h={49}
                        colorScheme="warning"
                        _text={{
                            fontWeight: "medium",
                            fontSize: "xl",

                        }}
                        onPress={() => setActionSheetTypeForm('signin')}

                    > Sing In</Button>
                    <Button
                        variant={'Ghost'}
                        bg={'light.50'}

                        colorScheme="warning"
                        _text={{
                            fontWeight: "medium",
                            fontSize: "xl",

                        }}
                        onPress={() => setActionSheetTypeForm('signup')}
                    > Sing Up</Button>
                </HStack>

                <HStack space={1}>
                    <Text bold>Developed by</Text><Link href="https://birdra1n.github.io" _text={{
                        color: "warning.500",
                        fontWeight: "medium",
                        fontSize: "sm",

                    }}>BirdRa1n</Link>
                </HStack>
            </Center>

        </Box>
    )
}