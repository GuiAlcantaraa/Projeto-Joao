import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabsRoutes } from "./tab.routes";
import { DetailsGroup } from "../screens/Detalhes-grupo";




const Stack  = createNativeStackNavigator();


export function AuthenticatedRoutes() {
    return (
        <Stack.Navigator initialRouteName='Tabs' screenOptions={{ headerShown: false}}>
            <Stack.Screen
                name="Tabs"
                component={TabsRoutes}
            />
            <Stack.Screen
                name="DetailsGroup"
                component={DetailsGroup}
            />
        </Stack.Navigator>
    )
}