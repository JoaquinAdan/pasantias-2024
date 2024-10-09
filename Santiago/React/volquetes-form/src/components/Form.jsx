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
import schema from "./models/Schema";
import AvailableChecker from "./auth/UploadCredentialsCondition";
import { useState } from "react";
import useCalles from "./hooks/use-calles";
import Loading from "./load-component/Loading";
import Error from "./error-component/Error";
import { initialFormValues } from "./consts/DefaultFormValues";

export default function Form() {
  const [available, setAvailable] = useState();
  const { data, isLoading, isError } = useCalles();

  const methods = useForm({
    defaultValues: initialFormValues,
    resolver: yupResolver(schema),
  });

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

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
