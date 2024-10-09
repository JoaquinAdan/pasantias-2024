import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from "./Header";
import FormHeader from "./form-sections/FormHeader";
import FechaDeEntregaSection from "./form-sections/FechaDeEntregaSection";
import CalleSection from "./form-sections/CalleSection";
import DatosChoferSection from "./form-sections/DatosChoferSection";
import LogisticaSection from "./form-sections/LogisticaSection";
import SolicitanteSection from "./form-sections/SolicitanteSection";
import LocalizacionSection from "./form-sections/LocalizacionSection";
import schema from "./auth/Schema";
import AvailableChecker from "./auth/UploadCredentialsCondition";
import { useState } from "react";
import useCalles from "./hooks/use-calles";

export default function Form() {
  const [available, setAvailable] = useState();

  const methods = useForm({
    defaultValues: {
      DiaRetiro: null,
      NombreChofer: null,
      DNIChofer: null,
      PatenteCamion: null,
      NombreSolicitante: null,
      TipoVolqueteId: null,
      NumVolquete: null,
      DestinoFinal: null,
      Calle: null,
      Altura: null,
      EntreCalle: {
        Item1: null,
        Item2: null,
      },
      LoteCountry: null,
      Coordenadas: {
        Item1: null,
        Item2: null,
      },
      EmpresaUsuario: "lsaavedra",
      EmpresaCodigo: "JjN8Q&!PamQrdcHcE,AFnQ#s,9wtsq",
    },
    resolver: yupResolver(schema),
  });

  const {data, isLoading, isError} = useCalles()

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Hubo un Error...</p>;

  return (
    <>
      <Header />
      <FormProvider {...methods}>
        <form className="flex justify-center ">
          <div className="bg-slate-200 max-w-[820px] flex flex-col px-8 py-5 space-y-4 rounded-xl m-5 shadow-lg">
            <FormHeader />
            <FechaDeEntregaSection />
            <CalleSection calles={data} />
            <LocalizacionSection />
            <DatosChoferSection />
            <LogisticaSection />
            <AvailableChecker setAvailable={setAvailable} />
            <SolicitanteSection available={available} />
          </div>
        </form>
      </FormProvider>
    </>
  );
}