import SelectorVolquete from "./ui/SelectorVolquete"
import { TextField } from "@mui/material"
import { RequiredSeccionTitle } from "./ui/Title"
import { useFormContext } from "react-hook-form"


export default function LogisticaSection() {

    const { register, formState: { errors } } = useFormContext()

    return (
        <div id="logistica" className="bg-violet-200 flex-col border-2 border-violet-900 rounded-xl p-4">
            <RequiredSeccionTitle value={'Logística'} />
            <div className=" grid gap-5 grid-cols-2">
                <div className="flex flex-col">
                    <SelectorVolquete />
                </div>
                <div className="flex flex-col">
                    <TextField color='secondary' id="outlined-basic" label="Volquete Nº" variant="outlined" error={!!errors.numVolquete} helperText={errors.numVolquete?.message} {...register("numVolquete")} />
                </div>
                <div className="flex flex-col">
                    <TextField color='secondary' id="outlined-basic" label="Destino final del material" variant="outlined" error={!!errors.destinoFinal} helperText={errors.destinoFinal?.message} {...register("destinoFinal")} />
                </div>
            </div>
        </div>
    )
}