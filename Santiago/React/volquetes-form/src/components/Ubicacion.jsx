// import { useEffect, useState } from "react"

// export default function useCargarUbicacion(){
    
//     const [ubicacion,setUbicacion] = useState({
//         longitude: 0,
//         latitude: 0
//     })

//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition(
//             function (position){
//                 setUbicacion({
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude
//                 })
//             },
//             function (error) { alert(error) },
//             {
//                 enableHighAccuracy:true
//             }
//         )
//     },[])

//     return [ubicacion.longitude,ubicacion.latitude]

// }