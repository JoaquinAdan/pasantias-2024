import { useState } from "react"
import { useMapEvents, Marker, Popup } from "react-leaflet"


export default function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? (
        <Marker position={[-34.163250, -58.959174]} draggable={true} />
    ) : (
        <Marker position={position} draggable={true}>
            <Popup>You are here</Popup>
        </Marker>
    )
}