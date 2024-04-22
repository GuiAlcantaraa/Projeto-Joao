import React, { useContext } from 'react';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { GuestRoutes } from './guest.routes';
import { AuthContext, AuthProvider } from '../context/auth';
import { TabsRoutes } from './tab.routes';
import { PrivateRoutes } from './private.routes';


export function Routes() {

    return (
            <NavigationContainer>
               <AuthProvider>
                    <PrivateRoutes />
                </AuthProvider>
            </NavigationContainer>
    )
}