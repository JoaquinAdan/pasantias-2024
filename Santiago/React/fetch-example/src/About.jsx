import { useNavigate } from "react-router-dom"

export function About(){

    const navigate = useNavigate();

    return(
        <>
            <h1>Este es el about</h1>
            <button onClick={() => navigate('/')}>Volver al login</button>
        </>
    )
}