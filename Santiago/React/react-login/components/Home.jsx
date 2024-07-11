import '../src/styles/homeStyles.css'

import { useNavigate } from 'react-router-dom'


export function Home(){

    const navigate = useNavigate()

    return(
        <>
            <div className="container">
                <h1>Cerrar sesión</h1>
                <button onClick={()=>{
                    window.localStorage.removeItem("token")
                    navigate('/')
                }}>SIGN OUT</button>
            </div>
        </>
    )
}