import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, FAB } from "react-native-elements"
import Container from "../components/generals/Container"
import Wrapper from "../components/generals/Wrapper"
import Colors from "../utils/Colors"

const Home = () => {
    return (
        <Wrapper>
            <View>
                <Text>Hello</Text>
            </View>
            <View style={styles.floatingBtn}>
                <Button
                    title="New Chat"
                    size="large"
                    color={Colors.primaryColor}
                ></Button>
            </View>
        </Wrapper>
    )
}

export default Home

const styles = StyleSheet.create({
    floatingBtn: {
        position: "absolute",
        bottom: 30,
        right: 30,
        borderRadius: 15,
        overflow: "hidden",
    },
})
