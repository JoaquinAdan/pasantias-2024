import { useFormContext } from "react-hook-form"
import SelectorCalle from "../ui/SelectorCalle";
import { RequiredSeccionTitle } from "../ui/Title"
import SelectorEntreCalle1 from "../ui/SelectorEntreCalle1"
import SelectorEntreCalle2 from "../ui/SelectorEntreCalle2"
import { TextField } from "@mui/material"

export default function CalleSection({ calles }) {

    const { register, formState: { errors } } = useFormContext()

    return (
        <div id="calle" className="bg-violet-200 flex-col border-2 border-violet-900 rounded-xl p-4 ">
            <RequiredSeccionTitle value={'Calle'} />
            <h4 className="text-center w860:text-left italic">Si no posee altura especifique sus entrecalles</h4>
            <div className="flex flex-col w860:grid gap-5 grid-cols-2">
                <div className="flex flex-col">
                    <SelectorCalle nombre={"Calle"} calles={calles} />
                </div>
                <div className="flex flex-col">
                    <TextField color='secondary' id="outlined-basic" label="Altura Calle" variant="outlined" error={!!errors.Altura} helperText={errors.Altura?.message} {...register("Altura")} />
                </div>
                <div className="flex flex-col">
                    <SelectorEntreCalle1 nombre={"Entre Calle 1"} calles={calles} />
                </div>
                <div className="flex flex-col">
                    <SelectorEntreCalle2 nombre={"Entre Calle 2"} calles={calles} />
                </div>
                <div className="flex flex-col">
                    <TextField color='secondary' id="outlined-basic" label="Lotes Country/ETC" variant="outlined" error={!!errors.LoteCountry} helperText={errors.LoteCountry?.message} {...register("LoteCountry")} />
                </div>
            </div>
        </div>
    )
}