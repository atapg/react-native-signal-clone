import React from "react"
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native"

const Wrapper = (props) => {
    return (
        <View style={{ ...styles.container, ...props.style }}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                {props.children}
            </KeyboardAvoidingView>
        </View>
    )
}

export default Wrapper

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
