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
    FlatList,
    Avatar,
    Spacer,
    Switch,
    TextArea,
    useClipboard

} from "native-base";

import iconPNG from '../assets/icon.png'
import { TouchableOpacity } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";
import { WebView } from 'react-native-webview';
import axios from "axios";




export default function Dashboard({ navigation }) {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    const {
        value,
        onCopy
    } = useClipboard();

    const [Data, setData] = React.useState({});
    const [Raw, setRaw] = React.useState('');
    const [api_arduino, setapi_arduino] = React.useState('https://birdra1n.x10.bz/WebLightcontrolArduino/signin/set_lights');

    function getRaw() {
        axios.get("https://raw.githubusercontent.com/BirdRa1n/Arduino_WebControl_Ethernet/main/WebControl/WebControl.ino")
            .then(function (response) {

                setRaw(response.data)
            });
    }




    const Profile = () => {
        return (
            <Box w={'100%'} h={65} shadow={1} justifyContent={'space-between'}>
                <HStack justifyContent={'space-between'}>
                    <HStack space={0} >
                        <Image source={require = iconPNG} alt="Alternate Text" size="sm" />
                        <VStack space={0} top={3}>
                            <HStack>
                                <Text bold fontSize={'sm'}>Username: </Text>
                                <Text fontSize={'sm'}>{Data.name}</Text>
                            </HStack>
                            <TouchableOpacity  onPress={() => onCopy(Data.arduino_id)}>
                            <HStack space={1}>
                                <Text bold fontSize={'sm'}>Arduino ID:</Text>
                                <Text fontSize={'sm'}>{Data.arduino_id}</Text>
                                <Center><Ionicons name="copy-outline" size={12} color="black" /></Center>
                            </HStack>
                            </TouchableOpacity>
                        </VStack>
                    </HStack>
                    <Box right={2} top={4}>
                        <SimpleLineIcons name="options-vertical" size={22} color="black" />
                    </Box>
                </HStack>


            </Box>
        );
    }

    const ActionsheetLights = () => {
        const [Data, setData] = React.useState({ Switch_1: false, Switch_2: false, Switch_3: false, Switch_4: false, Switch_5: false, Switch_6: false, Switch_7: false, Switch_8: false, Switch_9: false, Switch_10: false, Switch_11: false, Switch_12: false, Switch_13: false, Switch_14: false, Switch_15: false });
        console.log(Data)
        return (
            <Actionsheet isOpen={isOpen} onClose={onClose} >
                <Actionsheet.Content >
                    <HStack space={7}>
                        <VStack space={2}>
                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_1: value,
                                        })
                                    }
                                    value={Data.Switch_1}
                                />
                                <Text>Light 1</Text>
                            </Center>

                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_2: value,
                                        })
                                    }
                                    value={Data.Switch_2}
                                />
                                <Text>Light 2</Text>
                            </Center>
                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_3: value,
                                        })
                                    }
                                    value={Data.Switch_3}
                                />
                                <Text>Light 3</Text>
                            </Center>
                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_4: value,
                                        })
                                    }
                                    value={Data.Switch_4}
                                />
                                <Text>Light 4</Text>
                            </Center>
                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_5: value,
                                        })
                                    }
                                    value={Data.Switch_5}
                                />
                                <Text>Light 5</Text>
                            </Center>
                        </VStack>
                        <VStack space={2}>
                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_6: value,
                                        })
                                    }
                                    value={Data.Switch_6}
                                />
                                <Text>Light 6</Text>
                            </Center>

                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_7: value,
                                        })
                                    }
                                    value={Data.Switch_7}
                                />
                                <Text>Light 7</Text>
                            </Center>
                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_8: value,
                                        })
                                    }
                                    value={Data.Switch_8}
                                />
                                <Text>Light 8</Text>
                            </Center>
                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_9: value,
                                        })
                                    }
                                    value={Data.Switch_9}
                                />
                                <Text>Light 9</Text>
                            </Center>
                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_10: value,
                                        })
                                    }
                                    value={Data.Switch_10}
                                />
                                <Text>Light 10</Text>
                            </Center>
                        </VStack>
                        <VStack space={2}>
                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_11: value,
                                        })
                                    }
                                    value={Data.Switch_11}
                                />
                                <Text>Light 11</Text>
                            </Center>

                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_12: value,
                                        })
                                    }
                                    value={Data.Switch_12}
                                />
                                <Text>Light 12</Text>
                            </Center>
                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_13: value,
                                        })
                                    }
                                    value={Data.Switch_13}
                                />
                                <Text>Light 13</Text>
                            </Center>
                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_14: value,
                                        })
                                    }
                                    value={Data.Switch_14}
                                />
                                <Text>Light 14</Text>
                            </Center>
                            <Center>
                                <Switch size="lg"
                                    colorScheme={'warning'}

                                    onValueChange={(value) =>
                                        setData({
                                            ...Data,
                                            Switch_15: value,
                                        })
                                    }
                                    value={Data.Switch_15}
                                />
                                <Text>Light 15</Text>
                            </Center>
                        </VStack>
                    </HStack>
                    <HStack>

                    </HStack>


                </Actionsheet.Content>
            </Actionsheet>
        );
    }
    const getData = async () => {
        try {
            const token = await AsyncStorage.getItem('@token')
            const name = await AsyncStorage.getItem('@name')
            const email = await AsyncStorage.getItem('@email')
            const arduino_id = await AsyncStorage.getItem('@arduino_id')
            if (token !== null) {
                setData({
                    ...Data,
                    token: token,
                    name: name,
                    email: email,
                    arduino_id: arduino_id
                })
            }
        } catch (e) {
            // error reading value
        }
    }

    useEffect(() => {
        getData()
        getRaw()
    }, []);






    return (
        <Box safeArea w={'100%'} h={'100%'} bg={'#fff'}>
            <Profile />
            <ActionsheetLights></ActionsheetLights>
            <Center top={5}>
                <VStack space={2} maxW={'90%'} >
                    <Button colorScheme={'warning'} onPress={onOpen} _text={{ fontSize: 20 }}>Luzes</Button>

                    <Heading marginTop={10}>API</Heading>
                    <Input selectionColor={'warning.500'}
                        focusOutlineColor={'warning.500'}
                        _focus={{
                            borderColor: 'warning.500',
                            backgroundColor: '#fff'
                        }
                        } value={api_arduino} w="100%" h={36} py="0" InputRightElement={<Button onPress={() => onCopy(api_arduino)}
                            colorScheme={'warning'} size="xs" rounded="none" w="1/6" h="full" startIcon={<Ionicons name="copy-outline" size={14} color="white" />}>
                        </Button>} />
                    <Heading marginTop={10}>Arduino Exemple code</Heading>
                    <TextArea selectionColor={'warning.500'}
                        editable={false}
                        value={Raw}
                        focusOutlineColor={'warning.500'}
                        _focus={{
                            borderColor: 'warning.500',
                            backgroundColor: '#fff'
                        }
                        } h={242} placeholder="code" InputRightElement={<Button onPress={() => onCopy(Raw)}
                            colorScheme={'warning'} size="xs" rounded="none" w="1/6" h="full" startIcon={<Ionicons name="copy-outline" size={14} color="white" />}>
                        </Button>} />


                </VStack>

            </Center>
        </Box>
    )
}

/*
<Heading marginTop={10}>Arduino Exemple code</Heading>
                    <TextArea selectionColor={'warning.500'}
                        focusOutlineColor={'warning.500'}
                        _focus={{
                            borderColor: 'warning.500',
                            backgroundColor: '#fff'
                        }
                        } h={242} placeholder="code" InputRightElement={<Button colorScheme={'warning'} size="xs" rounded="none" w="1/6" h="full" startIcon={<Ionicons name="copy-outline" size={14} color="white" />}>
                        </Button>} />
 */