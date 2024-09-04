import { useFormContext } from "react-hook-form"
import { SeccionTitle } from "../ui/Title"
import { TextField } from "@mui/material" 
import TransitionsModal from "../ui/Modal"

export default function SolicitanteSection() {

    const { register, formState: {errors} } = useFormContext()

    return (
        <div id="datos-solicitante" className="bg-violet-200 flex-col border-2 border-violet-900 rounded-xl p-4">
            <SeccionTitle value={'Datos Solicitante'} />
            <div className=" flex flex-col gap-5">
                <div className="grid gap-5 grid-cols-2">
                    <TextField color='secondary' id="outlined-basic" label="Nombre del solicitante" variant="outlined" error={!!errors.nombreSolicitante} helperText={errors.nombreSolicitante?.message} {...register("NombreSolicitante")} />
                </div>
                <TransitionsModal />
            </div>
        </div>
    )
}
