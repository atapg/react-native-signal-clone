import React, { useState } from "react"
import reducer, { initialState } from "./store/reducer"
import { StateProvider } from "./store/StateProvider"
import Screens from "./Screens"
import Theme from "./utils/Theme"
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading"

export default function App() {
    const [fontsLoaded] = useFonts({
        "YujiBoku-Regular": require("./assets/fonts/YujiBoku-Regular.ttf"),
    })

    if (fontsLoaded) {
        return (
            <StateProvider initialState={initialState} reducer={reducer}>
                <Theme>
                    <Screens />
                </Theme>
            </StateProvider>
        )
    } else {
        return <AppLoading />
    }
}
