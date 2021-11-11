import React from "react"
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
} from "react-native"

const Container = (props) => {
    return (
        <SafeAreaView style={{ ...styles.container, ...props.style }}>
            <ScrollView style={props.noPadding ? null : styles.scrollView}>
                <KeyboardAvoidingView behavior="padding">
                    {props.children}
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        padding: 20,
    },
})

export default Container
