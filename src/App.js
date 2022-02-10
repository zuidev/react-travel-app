import React from "react"
import Header from "./components/Header"
import Place from "./components/Place"
import data from "./data.js"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    const placeList = data.map(place => {
        return (
            <Place
                key={place.id}
                {...place}
            />
        )
    })

    return (
        <div className="container">
            <Header />
            <div className="place-list">
                {placeList}
            </div>
        </div>
    )
}