import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import './Map.css'

// import LocationMarker from './ui/LocationMarker'
// import useCargarUbicacion from './Ubicacion'
import { useState } from 'react'


export default function Map() {

    // const [lat, lng] = useCargarUbicacion()
    const [position, setPosition] = useState(
        {
            lat: -34.163250,
            lng: -58.959174
        })

    const MapClick = () => {
        useMapEvents({
            click: (event) => {
                setPosition(event.latlng)
                console.log(position)
            }
        })
        return null
    }

    return (
        <>
            <MapContainer center={[-34.163250, -58.959174]} zoom={16}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {/* <LocationMarker/> */}
                {/* <Marker position={[lat,lng]} /> */}
                <MapClick />
                {position && <Marker position={position} draggable={true} />}
            </MapContainer>
            <h4>Su geolocalización es: <span className='text-violet-900'>{position.lat}, {position.lng}</span></h4>
        </>
    )
}