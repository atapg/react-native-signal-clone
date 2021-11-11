import React, { useEffect } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Button } from "react-native-elements"
import Container from "../components/generals/Container"
import Wrapper from "../components/generals/Wrapper"
import Colors from "../utils/Colors"
import GlobalStyles from "../utils/GlobalStyles"

const Welcome = ({ navigation }) => {
    useEffect(() => {
        const userLoggedIn = false
        //TODO change
        setTimeout(() => {
            if (userLoggedIn) {
                navigation.replace("Home")
            } else {
                navigation.replace("Login")
            }
        }, 2000)
    }, [])

    return (
        <Wrapper>
            <View
                style={{
                    ...GlobalStyles.center,
                    flex: 1,
                    backgroundColor: Colors.primaryColor,
                }}
            >
                <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 40 }}
                >
                    Welcome
                </Text>
                {/* <Text style={{ color: "white" }}>loading ...</Text> */}
                <Button loading></Button>
            </View>
        </Wrapper>
    )
}

export default Welcome

const styles = StyleSheet.create({})
