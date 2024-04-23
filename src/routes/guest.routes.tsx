import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { CreateSign } from '../screens/Criar-acesso';


const Stack  = createNativeStackNavigator();

export function GuestRoutes() {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={SignIn} />
                <Stack.Screen name="CreateSign" component={CreateSign} />
        </Stack.Navigator>
    )
}