import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./screens/Login"
import Colors from "./utils/Colors"
import Register from "./screens/Register"
import Home from "./screens/Home"
import Welcome from "./screens/Welcome"
import SingleChat from "./screens/SingleChat"
import { Button } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"
import { useStateValue } from "./store/StateProvider"

const Stack = createNativeStackNavigator()

const globalScreenOptions = {
    headerStyle: { backgroundColor: Colors.primaryColor },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
}

const headerWithButton = {
    headerRight: () => (
        <Button
            onPress={() => alert("This is a button!")}
            icon={<Ionicons name="ellipsis-vertical" size={20} color="white" />}
        />
    ),
}

export default function App() {
    const [{ user, currentChatUser }, dispatch] = useStateValue()

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
                        headerTitle: user.username,
                        ...headerWithButton,
                    }}
                />
                <Stack.Screen
                    name="SingleChat"
                    component={SingleChat}
                    options={{
                        headerTitle: currentChatUser.username,
                        ...headerWithButton,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
