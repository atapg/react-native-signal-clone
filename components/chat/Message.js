import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Avatar, Icon } from "react-native-elements"
import GlobalStyles from "../../utils/GlobalStyles"
import { Ionicons } from "@expo/vector-icons"
import { useStateValue } from "../../store/StateProvider"

const Message = ({ navigation, image, lastChat, username }) => {
    const [{}, dispatch] = useStateValue()

    const openChatHandler = () => {
        dispatch({ type: "SET_CURRENT_CHAT", item: { username } })

        navigation.navigate("SingleChat", { data: "something" })
    }

    return (
        <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={openChatHandler}
        >
            <View style={styles.container}>
                <View>
                    <Avatar
                        rounded
                        size="medium"
                        source={{
                            uri: image,
                        }}
                    />
                </View>
                <View style={styles.userInfo}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        {username}
                    </Text>
                    <Text>{lastChat}</Text>
                </View>
            </View>
            <View style={{ ...GlobalStyles.center, ...{ paddingRight: 15 } }}>
                <Ionicons name="md-chevron-forward" size={20} color="grey" />
            </View>
        </TouchableOpacity>
    )
}

export default Message

const styles = StyleSheet.create({
    touchableOpacity: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    userInfo: {
        paddingLeft: 15,
        justifyContent: "space-between",
    },
})
