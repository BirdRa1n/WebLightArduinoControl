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
    Spinner,
    ZStack

} from "native-base";


import iconPNG from '../assets/icon.png'

export default function SpinnerScreen({ route, navigation }) {
    const { direction } = route.params;
    setTimeout(() => {
        navigation.navigate(direction)
    }, 10000);

    return (
        <Box safeArea w={'100%'} h={'100%'} flex={1} justifyContent={'center'}>
            <Center>
                <VStack space={1}>
                    <Image source={require = iconPNG} alt="Alternate Text" size="md" />

                    <Spinner color="warning.500" size={'lg'} />
                
                </VStack>
            </Center>
        </Box>
    )
}