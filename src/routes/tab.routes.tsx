import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'

import { Home } from '../screens/Home'
import { Grupos } from '../screens/grupos';

const { Screen, Navigator } = createBottomTabNavigator();


export function TabsRoutes() {


    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: '#9A1032',
                tabBarInactiveTintColor: '#696761',
                tabBarStyle: {backgroundColor: '#FBF1CD'},
                headerShown: false,
            }}
        >
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="home"
                            color={'black'}
                            size={40}
                        />
                    )
                }}
            />


            <Screen
                name="Grupos"
                component={Grupos}
                options={{
                    tabBarLabel: 'Grupos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="group"
                            color={'black'}
                            size={40}
                        />
                    )
                }}
            />
        </Navigator>
    )

}
