import React from "react"
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper"
import Colors from "./Colors"

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.primaryColor,
        accent: "#f1c40f",
    },
}

const Theme = ({ children }) => {
    return <PaperProvider theme={theme}>{children}</PaperProvider>
}

export default Theme
