import React from "react";
import SelectorTipo from "../SelectorTipo";
import ErrorMessage from "./ErrorMessage";
import { Controller, useFormContext } from "react-hook-form";

const TipoInput = ({ name, title, mensaje, }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex items-center gap-4 p-1">
      <label className="text-white text-lg">{title}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <SelectorTipo value={field.value} onChange={field.onChange} />
        )}
      />
      {errors[name] && <ErrorMessage message={mensaje || "input invalido"} />}
    </div>
  );
};

export default TipoInput;
