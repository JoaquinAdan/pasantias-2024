import { TextField } from "@mui/material"
import { RequiredSeccionTitle } from "./ui/Title"
import { useFormContext } from "react-hook-form"


export default function DatosChoferSection() {

    //falta la parte de errors
    const { register, formState: { errors } } = useFormContext()

    return (
        <div id="datos_chofer" className="bg-violet-200 flex-col border-2 border-violet-900 rounded-xl p-4">
            <RequiredSeccionTitle value={'Datos Chofer'} />
            <div className=" grid gap-5 grid-cols-2">
                <div className="flex flex-col">
                    <TextField color='secondary' id="outlined-basic" label="Nombre del chofer" variant="outlined" error={!!errors.nombreChofer} helperText={errors.nombreChofer?.message} {...register("nombreChofer")} />
                    {/* <label className="text-red-600 text-sm">{errors.nombreChofer?.message}</label> */}
                </div>
                <div className="flex flex-col">
                    <TextField color='secondary' id="outlined-basic" label="DNI Chofer" variant="outlined" error={!!errors.DNIChofer} helperText={errors.DNIChofer?.message} {...register("DNIChofer")} />
                    {/* <label className="text-red-600 text-sm">{errors.DNIChofer?.message}</label> */}
                </div>
                <div className="flex flex-col">
                    <TextField color='secondary' id="outlined-basic" label="Patente del camión" variant="outlined" error={!!errors.patenteCamion} helperText={errors.patenteCamion?.message} {...register("patenteCamion")} />
                    {/* <label className="text-red-600 text-sm">{errors.PatenteCamion?.message}</label> */}
                </div>
            </div>
        </div>
    )
}