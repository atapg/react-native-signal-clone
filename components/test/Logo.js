import React from "react"
import { Image } from "react-native"

function Logo() {
    return (
        <Image
            style={{ width: 70, height: 35, resizeMode: "contain" }}
            source={require("../../assets/images/logo.png")}
        />
    )
}

export default Logo
