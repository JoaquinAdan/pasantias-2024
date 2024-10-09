import { TextField } from "@mui/material"
import { RequiredSeccionTitle } from "../ui/Title"
import { useFormContext } from "react-hook-form"


export default function DatosChoferSection() {

    const { register, formState: { errors } } = useFormContext()

    return (
        <div id="datos_chofer" className="bg-violet-200 flex-col rounded-xl p-4 drop-shadow-lg">
            <RequiredSeccionTitle value={'Datos Chofer'} />
            <div className="flex flex-col w860:grid gap-5 grid-cols-2 mt-2">
                <div className="flex flex-col">
                    <TextField color='secondary' id="outlined-basic" label="Nombre del chofer" variant="outlined" error={!!errors.NombreChofer} helperText={errors.NombreChofer?.message} {...register("NombreChofer")} />
                </div>
                <div className="flex flex-col">
                    <TextField color='secondary' id="outlined-basic" label="DNI Chofer" variant="outlined" error={!!errors.DNIChofer} helperText={errors.DNIChofer?.message} {...register("DNIChofer")} />
                </div>
                <div className="flex flex-col">
                    <TextField color='secondary' id="outlined-basic" label="Patente del camión" variant="outlined" error={!!errors.PatenteCamion} helperText={errors.PatenteCamion?.message} {...register("PatenteCamion")} />
                </div>
            </div>
        </div>
    )
}