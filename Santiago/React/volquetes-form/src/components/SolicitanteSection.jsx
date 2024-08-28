import { useFormContext } from "react-hook-form"
import { SeccionTitle } from "./ui/Title"
import { TextField, Button } from "@mui/material" 



export default function SolicitanteSection() {

    const { register, formState: {errors} } = useFormContext()

    return (
        <div id="datos-solicitante" className="bg-violet-200 flex-col border-2 border-violet-900 rounded-xl p-4">
            <SeccionTitle value={'Datos Solicitante'} />
            <div className=" flex flex-col">
                <div className="grid gap-5 grid-cols-2">
                    <TextField color='secondary' id="outlined-basic" label="Nombre del solicitante" variant="outlined" error={!!errors.nombreSolicitante} helperText={errors.nombreSolicitante?.message} {...register("nombreSolicitante")} />
                </div>
                <Button variant="contained" color="secondary" type="submit">CARGAR CREDENCIALES</Button>
            </div>
        </div>
    )
}
