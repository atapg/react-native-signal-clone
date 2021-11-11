import { StatusBar } from "expo-status-bar"
import React, { useState, useEffect } from "react"
import { KeyboardAvoidingView, StyleSheet, View } from "react-native"
import { Button, Image, Input } from "react-native-elements"
import Container from "../components/generals/Container"
import Colors from "../utils/Colors"
import GlobalStyles from "../utils/GlobalStyles"
import tailwind from "tailwind-rn"
import { auth } from "../utils/firebase"

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace("Home")
            }
        })

        return unsubscribe
    }, [])

    const signIn = () => {}

    return (
        <Container>
            <KeyboardAvoidingView behavior="padding">
                <StatusBar style="auto" />
                <View style={GlobalStyles.center}>
                    <Image
                        source={require("../assets/images/logo.png")}
                        style={{ width: 200, height: 200 }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Email"
                        autoFocus
                        type="email"
                        value={email}
                        onChangeText={(t) => setEmail(t)}
                    />
                    <Input
                        placeholder="Password"
                        secureTextEntry
                        type="password"
                        value={password}
                        onChangeText={(t) => setPassword(t)}
                    />
                </View>
                <Button
                    title="Login"
                    color={Colors.primaryColor}
                    buttonStyle={tailwind("mb-2")}
                    onPress={signIn}
                ></Button>
                <Button
                    title="Register"
                    color={Colors.primaryColor}
                    type="outline"
                    onPress={() => navigation.navigate("Register")}
                ></Button>
            </KeyboardAvoidingView>
        </Container>
    )
}

export default Login

const styles = StyleSheet.create({
    inputContainer: {
        margin: -8,
        marginBottom: 10,
    },
})
