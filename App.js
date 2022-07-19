import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { SSRProvider } from '@react-aria/ssr';

//Screens
import SignIN from './screens/sign in';
import Dashboard from './screens/dashboard';
import SpinnerScreen from './screens/SpinnerScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SSRProvider>
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign in" component={SignIN} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name="SpinnerScreen" component={SpinnerScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
    </SSRProvider>
  );
}