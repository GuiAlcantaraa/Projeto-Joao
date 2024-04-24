import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider } from '../context/auth';
import { TabsRoutes } from './tab.routes';
import { GuestRoutes } from './guest.routes';
import { AuthenticatedRoutes } from './authenticated.routes';


function AuthStack(){
    const { signed } = useContext(AuthContext)

    const routes = signed ? <AuthenticatedRoutes /> :  <GuestRoutes />

    return routes;
}



export function Routes() {
    return (
            <NavigationContainer>
               <AuthProvider>
                    <AuthStack />
                </AuthProvider>
            </NavigationContainer>
    )
}