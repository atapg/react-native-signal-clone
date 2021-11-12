import React from "react"
import {
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native"
import { Button, FAB } from "react-native-elements"
import Message from "../components/chat/Message"
import Container from "../components/generals/Container"
import Wrapper from "../components/generals/Wrapper"
import Colors from "../utils/Colors"

const users = [
    {
        username: "Ata parvin ghods",
        image: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
        lastChat: "Hello boy how are you?",
    },
    {
        username: "Zibaye xufta",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        lastChat: "how are you?",
    },
    {
        username: "Adnan",
        image: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
        lastChat: "gadaaaa?",
    },
    {
        username: "Ajabaa",
        image: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/103058/s960_Minister_Donelan.jpeg",
        lastChat: "hardasan",
    },
    {
        username: "Ata parvin ghods",
        image: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
        lastChat: "Hello boy how are you?",
    },
    {
        username: "Zibaye xufta",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        lastChat: "how are you?",
    },
    {
        username: "Adnan",
        image: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
        lastChat: "gadaaaa?",
    },
    {
        username: "Ajabaa",
        image: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/103058/s960_Minister_Donelan.jpeg",
        lastChat: "hardasan",
    },
]

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout))
}

const Home = ({ navigation }) => {
    const [refreshing, setRefreshing] = React.useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        wait(2000).then(() => setRefreshing(false))
    }, [])

    return (
        <>
            <ScrollView
                style={{ backgroundColor: "white" }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {users.map((user, index) => (
                    <Message
                        key={index}
                        navigation={navigation}
                        image={user.image}
                        username={user.username}
                        lastChat={user.lastChat}
                    />
                ))}
            </ScrollView>
            {/* <View style={styles.floatingBtn}>
                <Button
                    title="New Chat"
                    size="large"
                    color={Colors.primaryColor}
                ></Button>
            </View> */}
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
