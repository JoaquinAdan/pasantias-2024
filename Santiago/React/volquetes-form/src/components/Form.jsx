import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
    DiaEntrega: yup.date().required("Fecha de entrega requerida"),
    DiaRetiro: yup.date().required("Fecha de retiro requerida"),
    NombreChofer: yup.string().required("Nombre del chofer requerido"),
    DNIChofer: yup.string().required("DNI requerido"),
    PatenteCamion: yup.string().required("Patente del camión requerida"),
    NombreSolicitante: yup
      .string()
      .required("Nombre del solicitante requerido"),
    TipoVolqueteId: yup
      .string()
      .required("Tipo de volquete a solicitar requerido"),
    NumVolquete: yup.string().required("Número de volquete asociado requerido"),
    DestinoFinal: yup.string().required("Se debe ingresar un destino final"),
    Calle: yup.string().required("Direccion requerida"),
    Altura: yup.number().nullable().required("La atura es requerida"),
    EntreCalle: yup.object().shape({
      Item1: yup.string().required("Las entrecalles son requeridas"),
      Item2: yup.string().required("Las entrecalles son requeridas"),
    }),
    LoteCountry: yup.string().nullable().optional(),
    Coordenadas: yup.object().shape({
      lat: yup.number(),
      lng: yup.number(),
    }),
  });

  const methods = useForm({
    defaultValues: {
      NombreChofer: null,
      DNIChofer: null,
      PatenteCamion: null,
      NombreSolicitante: null,
      TipoVolqueteId: null,
      NumVolquete: null,
      DestinoFinal: null,
      Altura: null,
      EmpresaUsuario: "lsaavedra",
      EmpresaCodigo: "JjN8Q&!PamQrdcHcE,AFnQ#s,9wtsq",
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, watch } = methods;

  const onSubmit = (data) => {
    console.log("se envia el formulario");
    console.log(data);
  };

  const URL = `http://testiis01.campana.gov.ar/Municipalidad.Campana.Api/api/commons/calles`;

  const getCalles = async () => {
    const response = await fetch(URL);
    return response.json();
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["calles"],
    queryFn: getCalles,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Hubo un Error...</p>;

  // let available =
  //   (watch("DiaEntrega") !== null && watch("DiaRetiro") !== undefined) &&
  //   (watch("DiaRetiro") !== null && watch("DiaRetiro") !== undefined) &&
  //   (watch("Calle") !== null && watch("Calle") !== undefined) &&
  //   (watch("Altura") !== null && watch("Altura") !== undefined) &&
  //   (watch("EntreCalle.Item1") !== null && watch("EntreCalle.Item1") !== undefined) &&
  //   (watch("EntreCalle.Item2") !== null && watch("EntreCalle.Item2") !== undefined) &&
  //   (watch("NombreChofer") !== null && watch("NombreChofer") !== undefined) &&
  //   (watch("DNIChofer") !== null && watch("DNIChofer") !== undefined) &&
  //   (watch("PatenteCamion") !== null && watch("PatenteCamion") !== undefined) &&
  //   (watch("TipoVolqueteId") !== null && watch("TipoVolqueteId") !== undefined) &&
  //   (watch("NumVolquete") !== null && watch("NumVolquete") !== undefined) &&
  //   (watch("DestinoFinal") !== null && watch("DestinoFinal") !== undefined) &&
  //   (watch("NombreSolicitante") !== null && watch("NombreSolicitante") !== undefined)

  let available =
    !!watch("DiaEntrega") &&
    !!watch("DiaRetiro") &&
    !!watch("Calle") &&
    !!watch("Altura") &&
    !!watch("EntreCalle.Item1") &&
    !!watch("EntreCalle.Item2") &&
    !!watch("NombreChofer") &&
    !!watch("DNIChofer") &&
    !!watch("PatenteCamion") &&
    !!watch("TipoVolqueteId") &&
    !!watch("NumVolquete") &&
    !!watch("DestinoFinal") &&
    !!watch("NombreSolicitante");

  return (
    <>
      <Header />
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center "
        >
          <div className="bg-slate-200 max-w-[820px] flex flex-col px-8 py-5 space-y-4 rounded-xl m-5 shadow-lg">
            <FormHeader />
            <FechaDeEntregaSection />
            <CalleSection calles={data} />
            <LocalizacionSection />
            <DatosChoferSection />
            <LogisticaSection />
            <SolicitanteSection available={available} />
          </div>
        </form>
      </FormProvider>
    </>
  );
}
