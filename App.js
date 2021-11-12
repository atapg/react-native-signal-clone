import React from "react"
import reducer, { initialState } from "./store/reducer"
import { StateProvider } from "./store/StateProvider"
import Screens from "./Screens"

export default function App() {
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Screens />
        </StateProvider>
    )
}
