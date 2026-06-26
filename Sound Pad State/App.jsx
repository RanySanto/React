import padsData from "./pads"
import React from "react"
import Pad from "./Pad.jsx"

export default function App() {
    let [pads,setPads] = React.useState(padsData)

    let buttonElements = pads.map(pad => (
      <Pad key={pad.id} color={pad.color} on={pad.on}/>
      ))

    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
