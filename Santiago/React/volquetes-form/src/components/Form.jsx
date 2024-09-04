import dayjs from "dayjs";

import { useForm, FormProvider } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useQuery } from "@tanstack/react-query";

import Header from "./Header";
import FormHeader from "./form-sections/FormHeader";
import FechaDeEntregaSection from "./form-sections/FechaDeEntregaSection";
import CalleSection from "./form-sections/CalleSection";
import DatosChoferSection from "./form-sections/DatosChoferSection";
import LogisticaSection from "./form-sections/LogisticaSection";
import SolicitanteSection from "./form-sections/SolicitanteSection";
import LocalizacionSection from "./form-sections/LocalizacionSection";


export default function Form() {

    const schema = yup.object().shape({
        // fechaDesde: yup.date().required(),
        // fechaHasta: yup.date().required("Se debe seleccionar una fecha").nullable(),
        calle: yup.object().required("Debe ingresar su calle de residencia").nullable(),
        alturaCalle: yup.number('Debe ingresar una dirección válida').optional().typeError('Debe ingresar una altura'),
        entreCalle1: yup.object().required("Debe ingresar la primer entre calle"),
        entreCalle2: yup.object().required("Debe ingresar la segunda entre calle"),
        lotes: yup.string().optional(),
        // coordenadas: yup.object().shape({
        //     lat: yup.number(),
        //     lon: yup.number()
        // }),
        // nombreChofer: yup.string().min(3).max(25).required("El nombre completo es requerido"),
        // DNIChofer: yup.number().required().typeError('Debe ingresar un DNI válido'),
        // patenteCamion: yup.string().required("Debe ingresar la patente del camión"),
        // tipoVolquete: yup.object().required("Se debe seleccionar el tipo de volquete").nullable(),
        // numVolquete: yup.number().required().typeError('Debe ingresar un número válido'),
        // destinoFinal: yup.string().required("Se debe ingresar un destino final"),
        // nombreSolicitante: yup.string().required("Se debe ingresar un nombre"),
        // username: yup.string().required(),
        // password: yup.string().required()
    })

    const methods = useForm({
        defaultValues: {
            // Calle: null,
            // Altura: 675,
            // EntreCalle: {
            //     Item1: null,
            //     Item2: null
            // },
            // LoteCountry: null,
            // NombreChofer: "Carlos",
            // DNIChofer: 44111258,
            // PatenteCamion: "AA258ZI",
            // TipoVolqueteId: null,
            // NumVolquete: 3,
            // DestinoFinal: "VIALE",
            // NombreSolicitante: "Santiago",
            // Coordenadas: {
            //     Item1: -34.16325,
            //     Item2: -58.959174
            // },
            EmpresaUsuario: "lsaavedra",
            EmpresaCodigo: "JjN8Q&!PamQrdcHcE,AFnQ#s,9wtsq"
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

    // const camposCompletos = !!watch('lotes')

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