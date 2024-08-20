// import { Controller, useFormContext } from "react-hook-form"
// import { RequiredSeccionTitle } from "../ui/Title"
// import { SelectorFechaDesde, SelectorFechaHasta } from "../ui/SelectorFecha"

// export default function DateSection() {

//     const { control, formState: { errors } } = useFormContext()

//     return (
//         <div id="fecha_entrega" className="bg-violet-200 flex flex-col border-2 border-violet-900 rounded-xl p-4">
//             <RequiredSeccionTitle value={'Fecha de entrega'} />
//             <div className="grid gap-5 grid-cols-2">
//                 <Controller
//                     name="fechaDesde"
//                     control={control}
//                     render={({ field, fieldState }) => (
//                         <SelectorFechaDesde
//                             value={field.value}
//                             onChange={field.onChange}
//                             error={fieldState.error}
//                         />
//                     )}
//                 />
//                 <div className="flex flex-col">
//                     <Controller
//                         name="fechaHasta"
//                         control={control}
//                         render={({ field, fieldState }) => (
//                             <SelectorFechaHasta
//                                 value={field.value}
//                                 onChange={field.onChange}
//                                 error={fieldState.error}
//                             />

//                         )}
//                     />
//                     <label className="text-red-600 text-sm">{errors.fechaHasta?.message}</label>
//                 </div>

//             </div>
//         </div>
//     )
// }