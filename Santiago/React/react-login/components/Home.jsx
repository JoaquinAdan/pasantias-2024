import { navigate } from "../src/Link"
import './styles/homeStyles.css'

export function Home(){
    return(
        <>
            <div className="container">
                <h1>Cerrar sesión</h1>
                <button onClick={()=>navigate('/')}>SIGN OUT</button>
            </div>
        </>
    )
}