import { Button, TextField } from "@mui/material";
import Map from "./Map";
import { RequiredSeccionTitle, SeccionTitle } from "./ui/Title";
import SelectorVolquete from "./ui/SelectorVolquete";
import { SelectorFechaDesde, SelectorFechaHasta } from "./ui/SelectorFecha";
import SelectorCalle from "./ui/SelectorCalle";
import dayjs from "dayjs";

import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useQuery } from "@tanstack/react-query";
import Header from "./Header";
import FormHeader from "./form-components/FormHeader";

export default function Form() {

    const schema = yup.object().shape({
        // fechaDesde: yup.date().required(),
        // fechaHasta: yup.date().required("Se debe seleccionar una fecha").nullable(),
        // calle: yup.object().required('Debe ingresar su calle de residencia').nullable(),
        // AlturaCalle: yup.number('Debe ingresar una dirección válida').optional().typeError('Debe ingresar una fecha válida'),
        // EntreCalle1: yup.string().required(),
        // EntreCalle2: yup.string().required(),
        // Lotes: yup.string().optional(),
        // nombreChofer: yup.string().min(3).max(25).required("El nombre completo es requerido"),
        // DNIChofer: yup.number().required().typeError('Debe ingresar un DNI válido'),
        // PatenteCamion: yup.string().required().typeError('Debe ingresar una patente válida'),
        // tipoVolquete: yup.object().required("Se debe seleccionar el tipo de volquete").nullable(),
        // NumVolquete: yup.number().required().typeError('Debe ingresar un número válido'),
        // DestinoFinal: yup.string().required(),
        nombreSolicitante: yup.string().required("Se debe ingresar un nombre")
    })

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            fechaDesde: dayjs().add(1, "day"),
            // fechaHasta: "",
            // calle: "",
            entreCalle1: "",
            entreCalle2: "",
            lotes: "",
            nombreChofer: "",
            DNIChofer: "",
            patenteCamion: "",
            // tipoVolquete: "",
            numVolquete: "",
            destinoFinal: "",
            nombreSolicitante: ""
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log("se envia el formulario")
        console.log(data)
    }

    const URL = `http://testiis01.campana.gov.ar/Municipalidad.Campana.Api/api/commons/calles`

    const getCalles = async () => {
        const response = await fetch(URL)
        return response.json()
    }

    const { data, isLoading, isError } = useQuery({ queryKey: ["calles"], queryFn: getCalles })

    if (isLoading) return <p>Cargando...</p>
    if (isError) return <p>Hubo un Error...</p>

    return (
        <>
            <Header />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-slate-200 w-3/5 mx-auto px-8 py-5 space-y-4 rounded-xl m-5">

                    <FormHeader/>

                    <div id="fecha_entrega" className="bg-violet-200 flex flex-col border-2 border-violet-900 rounded-xl p-4">
                        <RequiredSeccionTitle value={'Fecha de entrega'} />
                        <div className="grid gap-5 grid-cols-2">
                            <Controller
                                name="fechaDesde"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <SelectorFechaDesde
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={fieldState.error}
                                    />
                                )}
                            />
                            <div className="flex flex-col">
                                <Controller
                                    name="fechaHasta"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <SelectorFechaHasta
                                            value={field.value}
                                            onChange={field.onChange}
                                            error={fieldState.error}
                                        />

                                    )}
                                />
                                <label className="text-red-600 text-sm">{errors.fechaHasta?.message}</label>
                            </div>

                        </div>
                    </div>

                    <div id="calle" className="bg-violet-200 flex-col border-2 border-violet-900 rounded-xl p-4 ">
                        <RequiredSeccionTitle value={'Calle'} />
                        <h4 className="italic">Si no posee altura especifique sus entrecalles</h4>
                        <div className=" grid gap-5 grid-cols-2">
                            <div className="flex flex-col">

                                <Controller
                                    name="calle"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <SelectorCalle
                                            nombre={"Calle"}
                                            calles={data}
                                            value={field.value}
                                            onChange={field.onChange}
                                            error={fieldState.error}
                                        />
                                    )}
                                />

                                <label className="text-red-600 text-sm">{errors.calle?.message}</label>
                            </div>
                            <div className="flex flex-col">
                                <TextField color='secondary' id="outlined-basic" label="Altura Calle" variant="outlined" {...register("alturaCalle")} />
                                <label className="text-red-600 text-sm">{errors.AlturaCalle?.message}</label>
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

                    <div id="localizacion" className="bg-violet-200 flex-col border-2 border-violet-900 rounded-xl p-4">
                        <RequiredSeccionTitle value={'Localización'} />
                        <h4 className="italic">Arrastre el ícono de ubicación (azul) hacia su calle y altura aproximada, o hacia la calle y entre calles de destino.</h4>
                        <Map />
                    </div>

                    <div id="datos_chofer" className="bg-violet-200 flex-col border-2 border-violet-900 rounded-xl p-4">
                        <RequiredSeccionTitle value={'Datos Chofer'} />
                        <div className=" grid gap-5 grid-cols-2">
                            <div className="flex flex-col">
                                <TextField color='secondary' id="outlined-basic" label="Nombre del chofer" variant="outlined" {...register("nombreChofer")} />
                                <label className="text-red-600 text-sm">{errors.nombreChofer?.message}</label>
                            </div>
                            <div className="flex flex-col">
                                <TextField color='secondary' id="outlined-basic" label="DNI Chofer" variant="outlined" {...register("DNIChofer")} />
                                <label className="text-red-600 text-sm">{errors.DNIChofer?.message}</label>
                            </div>
                            <div className="flex flex-col">
                                <TextField color='secondary' id="outlined-basic" label="Patente del camión" variant="outlined" {...register("patenteCamion")} />
                                <label className="text-red-600 text-sm">{errors.PatenteCamion?.message}</label>
                            </div>
                        </div>
                    </div>

                    <div id="logistica" className="bg-violet-200 flex-col border-2 border-violet-900 rounded-xl p-4">
                        <RequiredSeccionTitle value={'Logística'} />
                        <div className=" grid gap-5 grid-cols-2">
                            <div className="flex flex-col">

                                <Controller
                                    name="tipoVolquete"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <SelectorVolquete
                                            value={field.value}
                                            onChange={field.onChange}
                                            error={fieldState.error}
                                        />
                                    )}
                                />


                                <label className="text-red-600 text-sm">{errors.TipoVolquete?.message}</label>
                            </div>
                            <div className="flex flex-col">
                                <TextField color='secondary' id="outlined-basic" label="Volquete Nº" variant="outlined" {...register("numVolquete")} />
                                <label className="text-red-600 text-sm">{errors.NumVolquete?.message}</label>
                            </div>
                            <div className="flex flex-col">
                                <TextField color='secondary' id="outlined-basic" label="Destino final del material" variant="outlined" {...register("destinoFinal")} />
                                <label className="text-red-600 text-sm">{errors.DestinoFinal?.message}</label>
                            </div>
                        </div>
                    </div>

                    <div id="datos-solicitante" className="bg-violet-200 flex-col border-2 border-violet-900 rounded-xl p-4">
                        <SeccionTitle value={'Datos Solicitante'} />
                        <div className=" flex flex-col">
                            <div className="grid gap-5 grid-cols-2">
                                <TextField color='secondary' id="outlined-basic" label="Nombre del solicitante" variant="outlined" helperText={errors.nombreSolicitante?.message} {...register("nombreSolicitante")} />
                            </div>
                            <label className="text-red-600 text-sm">{errors.nombreSolicitante?.message}</label>
                            <button>CARGAR CREDENCIALES</button>
                            <Button variant="contained" color="secondary">CARGAR CREDENCIALES</Button>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}