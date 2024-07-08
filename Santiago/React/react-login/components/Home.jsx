import { navigate } from "../nav/Link"
import '../src/styles/homeStyles.css'

export function Home(){

    return(
        <>
            <div className="container">
                <h1>Cerrar sesión</h1>
                <button onClick={()=>{
                    navigate('/')
                    window.localStorage.removeItem("name")
                    window.localStorage.removeItem("password")
                }}>SIGN OUT</button>
                <div className="textContainer">
                    <h3>El usuario presenta las siguientes credenciales</h3>
                    <p>Token:{window.localStorage.getItem("token")}</p>
                </div>
            </div>
        </>
    )
}