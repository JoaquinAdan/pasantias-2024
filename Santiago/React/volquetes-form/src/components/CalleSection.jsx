import { useFormContext } from "react-hook-form"
import SelectorCalle from "./ui/SelectorCalle";
import { RequiredSeccionTitle } from "./ui/Title"
import SelectorEntreCalle1 from "./ui/SelectorEntreCalle1"
import SelectorEntreCalle2 from "./ui/SelectorEntreCalle2"
import { TextField } from "@mui/material"

export default function CalleSection({ calles }) {

    //falta la parte de errors
    const { register } = useFormContext()

    return (
        <div id="calle" className="bg-violet-200 flex-col border-2 border-violet-900 rounded-xl p-4 ">
            <RequiredSeccionTitle value={'Calle'} />
            <h4 className="italic">Si no posee altura especifique sus entrecalles</h4>
            <div className=" grid gap-5 grid-cols-2">
                <div className="flex flex-col">
                    <SelectorCalle nombre={"Calle"} calles={calles} />
                </div>
                <div className="flex flex-col">
                    <TextField color='secondary' id="outlined-basic" label="Altura Calle" variant="outlined" {...register("alturaCalle")} />
                    {/* <TextField color='secondary' id="outlined-basic" label="Altura Calle" variant="outlined" error={!!errors.alturaCalle} helperText={errors.alturaCalle?.message} {...register("alturaCalle")} /> */}
                </div>
                <div className="flex flex-col">
                    <SelectorEntreCalle1 nombre={"Entre Calle 1"} calles={calles} />
                </div>
                <div className="flex flex-col">
                    <SelectorEntreCalle2 nombre={"Entre Calle 2"} calles={calles} />
                </div>
                <div className="flex flex-col">
                    <TextField color='secondary' id="outlined-basic" label="Lotes Country/ETC" variant="outlined" {...register("lotes")} />
                    {/* <TextField color='secondary' id="outlined-basic" label="Lotes Country/ETC" variant="outlined" error={!!errors.lotes} helperText={errors.lotes?.message} {...register("lotes")} /> */}
                </div>
            </div>
        </div>
    )
}