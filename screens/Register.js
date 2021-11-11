import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Input } from "react-native-elements"
import Container from "../components/generals/Container"
import Colors from "../utils/Colors"

const Register = ({ navigation }) => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [picture, setPicture] = useState("")

    const register = () => {}

    return (
        <Container>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autoFocus
                    type="text"
                    value={fullName}
                    onChangeText={(t) => setFullName(t)}
                />
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
                <Input
                    placeholder="Profile Picture URL (Optional)"
                    secureTextEntry
                    type="text"
                    value={picture}
                    onChangeText={(t) => setPicture(t)}
                    onSubmitEditing={register}
                />
            </View>
            <Button
                title="Register"
                color={Colors.primaryColor}
                onPress={register}
            ></Button>
        </Container>
    )
}

export default Register

const styles = StyleSheet.create({
    inputContainer: {
        margin: -8,
        marginBottom: 10,
    },
})
