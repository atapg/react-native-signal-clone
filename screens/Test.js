import React from "react"
import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native"
import Logo from "../components/test/Logo"
import { BottomNavigation } from "react-native-paper"
import Colors from "../utils/Colors"
import Swiper from "react-native-swiper"

const MusicRoute = () => <></>

const AlbumsRoute = () => <></>

const RecentsRoute = () => <></>

const Test = () => {
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        { key: "music", title: "خانه", icon: "home" },
        { key: "albums", title: "آلبوم", icon: "album" },
        { key: "recents", title: "اخیرا", icon: "history" },
        { key: "profile", title: "پروفایل", icon: "web" },
    ])

    const sliderImages = [
        "https://dlslab.com/wp-content/uploads/2020/12/covid-19-testing-centers-scaled.jpg",
        "https://en.tums.ac.ir/images/www/en/pageBuilder/editor/2019/1575800465-med-lab-sci-as.jpg",
        "https://www.euroimmun.com/fileadmin/user_upload/euroimmun_corp_slide_diagnostic_laboratory-1.jpg",
    ]

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        profile: MusicRoute,
    })

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.swiperContainer}>
                <Swiper
                    autoplay={true}
                    showsPagination={false}
                    style={styles.swiper}
                >
                    {sliderImages.map((img, index) => (
                        <View key={index} style={{ height: 200 }}>
                            <Image
                                resizeMode="cover"
                                source={{
                                    uri: img,
                                }}
                                height={200}
                                style={{ flex: 1 }}
                                style={styles.image}
                            />
                        </View>
                    ))}
                </Swiper>
            </View>
            <View style={[styles.bottomNav, styles.bottomNavShadow]}>
                <BottomNavigation
                    navigationState={{ index, routes }}
                    onIndexChange={setIndex}
                    renderScene={renderScene}
                    barStyle={{ backgroundColor: "white" }}
                    activeColor={Colors.primaryColor}
                    style={styles.bottomNav}
                    keyboardHidesNavigationBar={true}
                />
            </View>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    swiperContainer: {
        flex: 1,
        padding: 20,
        borderRadius: 30,
    },
    swiper: {
        height: 200,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        borderRadius: 15,
    },
    bottomNav: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        height: 55, //dont change it
    },
    bottomNavShadow: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        height: 56,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
    },
})
