import React from "react"
import {
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native"
import Logo from "../components/test/Logo"
import { BottomNavigation, Button } from "react-native-paper"
import Colors from "../utils/Colors"
import Swiper from "react-native-swiper"
import Carousel from "react-native-anchor-carousel"
import { Rating } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"

const MusicRoute = () => <></>

const AlbumsRoute = () => <></>

const RecentsRoute = () => <></>

const bestTeachers = [
    {
        name: "طناز صمدی",
        image: "https://www.edarabia.com/wp-content/uploads/2015/11/7-ways-to-become-the-person-everyone-respects.jpg",
        rating: 5,
        field: "شیمی",
    },
    {
        name: "سیما رستگار",
        image: "https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg",
        rating: 1,
        field: "فیزیک",
    },
    {
        name: "بهرام ایزدی",
        image: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
        rating: 4,
        field: "انگلیسی",
    },
    {
        name: "ایرج زمانی",
        image: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
        rating: 3,
        field: "عربی",
    },
    {
        name: "پرستو کامروا",
        image: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
        rating: 2,
        field: "ادبیات",
    },
]

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
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.wrapper}>
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
                    <View style={styles.teachersSection}>
                        <Button
                            mode="outlined"
                            onPress={() => console.log("clicked")}
                            color={Colors.primaryColor}
                            labelStyle={{ fontWeight: "bold" }}
                        >
                            مشاهده همه
                        </Button>
                        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                            مدرسان برتر
                        </Text>
                    </View>
                    <View style={styles.teachersSlider}>
                        <FlatList
                            data={bestTeachers}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={{ backgroundColor: "#fff" }}
                                >
                                    <View
                                        style={styles.bestTeachersContainer}
                                        key={item.name}
                                    >
                                        <View style={styles.overlay}></View>
                                        <Image
                                            resizeMode="cover"
                                            source={{
                                                uri: item.image,
                                            }}
                                            style={{ flex: 1 }}
                                        />
                                        <View style={{ zIndex: 10 }}>
                                            <Text style={styles.teacherName}>
                                                {item.name}
                                            </Text>
                                            <View
                                                style={styles.ratingContainer}
                                            >
                                                {Array(Math.round(item.rating))
                                                    .fill()
                                                    .map((_, i) => (
                                                        <Ionicons
                                                            name="star"
                                                            size={20}
                                                            color="gold"
                                                        />
                                                    ))}
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                            horizontal={true}
                        />
                    </View>
                    <View style={styles.teachersSection}>
                        <Button
                            mode="outlined"
                            onPress={() => console.log("clicked")}
                            color={Colors.primaryColor}
                            labelStyle={{ fontWeight: "bold" }}
                        >
                            مشاهده همه
                        </Button>
                        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                            یادت نره!
                        </Text>
                    </View>
                </View>
            </ScrollView>
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
    container: {
        flex: 1,
        paddingBottom: 60,
    },
    wrapper: {
        padding: 20,
    },
    swiperContainer: {
        flex: 1,
        borderRadius: 30,
        marginBottom: 30,
        borderRadius: 20,
        overflow: "hidden",
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
    teachersSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    teachersSlider: {
        height: 150,
        marginBottom: 30,
        marginHorizontal: -5,
    },
    bestTeachersContainer: {
        height: "100%",
        width: 150,
        marginHorizontal: 5,
        borderRadius: 15,
        overflow: "hidden",
        // position: "relative",
    },
    teacherName: {
        position: "absolute",
        bottom: 30,
        right: 15,
        color: "white",
        fontSize: 20,
    },
    overlay: {
        backgroundColor: "rgba(0,0,0, 0.4)",
        position: "absolute",
        right: 0,
        left: 0,
        bottom: 0,
        top: 0,
        zIndex: 1,
    },
    ratingContainer: {
        position: "absolute",
        bottom: 10,
        right: 15,
        flexDirection: "row",
    },
})
