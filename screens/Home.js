import React from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Button, FAB } from "react-native-elements"
import Message from "../components/chat/Message"
import Container from "../components/generals/Container"
import Wrapper from "../components/generals/Wrapper"
import Colors from "../utils/Colors"

const Home = () => {
    return (
        <>
            <ScrollView>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <Message key={i} />
                ))}
            </ScrollView>
            <View style={styles.floatingBtn}>
                <Button
                    title="New Chat"
                    size="large"
                    color={Colors.primaryColor}
                ></Button>
            </View>
        </>
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
