import { CircularProgress } from "@mui/material";

export default function Loading(){
    return(
        <>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <p>Cargando formulario de registro de volquetes ...</p>
                <CircularProgress color="secondary" size={100}/>
            </div>
        </>
    )
}