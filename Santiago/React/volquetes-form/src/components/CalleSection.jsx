import { useFormContext } from "react-hook-form"
import { SelectorCalle } from "./ui/SelectorCalle"
import { RequiredSeccionTitle } from "./ui/Title"
import { TextField } from "@mui/material"


export default function CalleSection({calles}){

    const { control, register, fieldState: { errors } } = useFormContext()

    return (
        <div id="calle" className="bg-violet-200 flex-col border-2 border-violet-900 rounded-xl p-4 ">
            <RequiredSeccionTitle value={'Calle'} />
            <h4 className="italic">Si no posee altura especifique sus entrecalles</h4>
            <div className=" grid gap-5 grid-cols-2">
                <div className="flex flex-col">
                    <SelectorCalle nombre={"Calle"} calles={calles} />
                </div>
                <div className="flex flex-col">
                    <TextField color='secondary' id="outlined-basic" label="Altura Calle" variant="outlined" error={!!errors.alturaCalle} helperText={errors.alturaCalle?.message} {...register("alturaCalle")} />
                    {/* <label className="text-red-600 text-sm">{errors.AlturaCalle?.message}</label> */}
                </div>
                <div className="flex flex-col">
                    <Controller
                        name="entreCalle1"
                        control={control}
                        render={({ field, fieldState }) => (
                            <SelectorCalle
                                nombre={"Entre Calle 1"}
                                calles={data}
                                value={field.value}
                                onChange={field.onChange}
                                error={fieldState.error}
                            />

                        )}
                    />
                    <label className="text-red-600 text-sm">{errors.EntreCalle1?.message}</label>
                </div>
                <div className="flex flex-col">
                    <Controller
                        name="entreCalle2"
                        control={control}
                        render={({ field, fieldState }) => (
                            <SelectorCalle
                                nombre={"Entre Calle 2"}
                                calles={data}
                                value={field.value}
                                onChange={field.onChange}
                                error={fieldState.error}
                            />

                        )}
                    />
                    <label className="text-red-600 text-sm">{errors.EntreCalle2?.message}</label>
                </div>
                <div className="flex flex-col">
                    <TextField color='secondary' id="outlined-basic" label="Lotes Country/ETC" variant="outlined" {...register("lotes")} />
                    <label className="text-red-600 text-sm">{errors.AlturaCalle?.message}</label>
                </div>
            </div>
        </div>
    )
}