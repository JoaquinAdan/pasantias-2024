// import Map from "./Map";
import { RequiredSeccionTitle } from "./ui/Title";
import dayjs from "dayjs";

import { useForm, FormProvider } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useQuery } from "@tanstack/react-query";
import Header from "./Header";
import FormHeader from "./form-components/FormHeader";
import FechaDeEntregaSection from "./FechaDeEntregaSection";
import CalleSection from "./CalleSection";
import DatosChoferSection from "./DatosChoferSection";
import LogisticaSection from "./LogisticaSection";
import SolicitanteSection from "./SolicitanteSection";
import LocalizacionSection from "./LocalizacionSection";

export default function Form() {

    const schema = yup.object().shape({
        // fechaDesde: yup.date().required(),
        fechaHasta: yup.date().required("Se debe seleccionar una fecha").nullable(),
        calle: yup.object().required("Debe ingresar su calle de residencia").nullable(),
        alturaCalle: yup.number('Debe ingresar una dirección válida').optional().typeError('Debe ingresar una altura'),
        entreCalle1: yup.object().required("Debe ingresar la primer entre calle"),
        entreCalle2: yup.object().required("Debe ingresar la segunda entre calle"),
        lotes: yup.string().optional(),
        nombreChofer: yup.string().min(3).max(25).required("El nombre completo es requerido"),
        DNIChofer: yup.number().required().typeError('Debe ingresar un DNI válido'),
        patenteCamion: yup.string().required("Debe ingresar la patente del camión"),
        tipoVolquete: yup.object().required("Se debe seleccionar el tipo de volquete").nullable(),
        numVolquete: yup.number().required().typeError('Debe ingresar un número válido'),
        destinoFinal: yup.string().required("Se debe ingresar un destino final"),
        nombreSolicitante: yup.string().required("Se debe ingresar un nombre")
    })

    const methods = useForm({
        defaultValues: {
            fechaDesde: dayjs().add(1, "day"),
            fechaHasta: dayjs().add(5, "day"),
            calle: { label: 'ALBERDI JUAN BAUTISTA         ', id: 5 },
            alturaCalle: 675,
            entreCalle1: { label: 'ALBERDI JUAN BAUTISTA         ', id: 5 },
            entreCalle2: { label: 'ALBERDI JUAN BAUTISTA         ', id: 5 },
            lotes: 0,
            nombreChofer: "Carlos",
            DNIChofer: 44111258,
            patenteCamion: "AA258ZI",
            tipoVolquete: { label: 'Ramas', id: 2 },
            numVolquete: 3,
            destinoFinal: "VIALE",
            nombreSolicitante: "Santiago"
        },
        resolver: yupResolver(schema)
    })

    const { handleSubmit } = methods

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
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-slate-200 w-3/5 mx-auto px-8 py-5 space-y-4 rounded-xl m-5">
                        <FormHeader />
                        <FechaDeEntregaSection />
                        <CalleSection calles={data} />
                        <LocalizacionSection />
                        <DatosChoferSection />
                        <LogisticaSection />
                        <SolicitanteSection />
                    </div>
                </form>
            </FormProvider>
        </>
    )
}