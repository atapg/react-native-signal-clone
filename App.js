import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./screens/Login"
import Colors from "./utils/Colors"
import Register from "./screens/Register"
import Home from "./screens/Home"
import Welcome from "./screens/Welcome"

const Stack = createNativeStackNavigator()

const globalScreenOptions = {
    headerStyle: { backgroundColor: Colors.primaryColor },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={globalScreenOptions}>
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: "Username goes here...",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
