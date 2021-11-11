import React from "react"
import { StyleSheet, SafeAreaView, ScrollView } from "react-native"

const Container = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>{props.children}</ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        marginHorizontal: 20,
    },
})

export default Container
