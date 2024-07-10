import { useNavigate } from 'react-router-dom'
import '../src/styles/homeStyles.css'


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
                <div className="textContainer">
                    <h3>El usuario presenta las siguientes credenciales</h3>
                    <p>Token:{window.localStorage.getItem("token").slice(0,5)}</p>
                </div>
            </div>
        </>
    )
}