import React from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import Logo from "../components/test/Logo"
import { BottomNavigation } from "react-native-paper"
import Colors from "../utils/Colors"

const MusicRoute = () => <></>

const AlbumsRoute = () => <></>

const RecentsRoute = () => <></>

const Test = () => {
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        { key: "music", title: "خانه", icon: "home" },
        { key: "albums", title: "آلبوم", icon: "album" },
        { key: "recents", title: "اخیرا", icon: "history" },
    ])

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    })

    return (
        <View style={{ flex: 1 }}>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                style={styles.bottomNav}
                barStyle={{ backgroundColor: "white" }}
                activeColor={Colors.primaryColor}
                keyboardHidesNavigationBar={true}
            />
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    bottomNav: {
        // position: "absolute",
        // bottom: 0,
        // left: 0,
        // right: 0,
    },
})
