import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Avatar, Icon } from "react-native-elements"
import GlobalStyles from "../../utils/GlobalStyles"
import { Ionicons } from "@expo/vector-icons"

const Message = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() =>
                navigation.navigate("SingleChat", { data: "something" })
            }
        >
            <View style={styles.container}>
                <View>
                    <Avatar
                        rounded
                        size="medium"
                        source={{
                            uri: "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png",
                        }}
                    />
                </View>
                <View style={styles.userInfo}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Username
                    </Text>
                    <Text>Last chat here 100char</Text>
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
        backgroundColor: "#eeeeee",
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
