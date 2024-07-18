import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import SelectorCalles from "./SelectorCalles";
import { SelectorTipo } from "./SelectorTipo";

const schema = yup.object().shape({
  entrega: yup.date().required("Fecha de entrega requerida"),
  retiro: yup.date().required("Fecha de retiro requerida"),
  chofer: yup.object().shape({
    nombre: yup.string().required("Nombre requerido"),
    dni: yup.string().required("DNI requerido"),
    patente: yup.string().required("Patente requerida"),
  }),
  solicitante: yup.string().required("Solicitante requerido"),
  logistica: yup.object().shape({
    tipo: yup.string().required("Tipo requerido"),
    nroVolquete: yup.string().required("Número de volquete requerido"),
    destinoFinal: yup.string().required("Destino final requerido"),
  }),
  calle: yup.string().required("Direccion requerida"),
  altura: yup.number().required("altura requerida"),
  entreCalle1: yup.string().required("Direccion requerida"),
  entreCalle2: yup.string().required("Direccion requerida"),
  loteCountry: yup.string().required("Información requerida"),
});

const VolquetesForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 space-y-4 bg-white shadow-md rounded"
    >
      <div>
        <p>FECHAS</p>
        <div>
          <label>Fecha de Entrega</label>
          <Controller
            control={control}
            name="entrega"
            render={({ field }) => (
              <input type="date" {...field} className="input" />
            )}
          />
          {errors.entrega && <p>{errors.entrega.message}</p>}
        </div>
        <div>
          <label>Fecha de Retiro</label>
          <Controller
            control={control}
            name="retiro"
            render={({ field }) => (
              <input type="date" {...field} className="input" />
            )}
          />
          {errors.retiro && <p>{errors.retiro.message}</p>}
        </div>
      </div>
      <div>
        <p>DATOS DEL CHOFER</p>
        <div>
          <label>Nombre del Chofer</label>
          <input type="text" {...register("chofer.nombre")} className="input" />
          {errors.chofer?.nombre && <p>{errors.chofer.nombre.message}</p>}
        </div>
        <div>
          <label>DNI del Chofer</label>
          <input type="text" {...register("chofer.dni")} className="input" />
          {errors.chofer?.dni && <p>{errors.chofer.dni.message}</p>}
        </div>
        <div>
          <label>Patente del Chofer</label>
          <input
            type="text"
            {...register("chofer.patente")}
            className="input"
          />
          {errors.chofer?.patente && <p>{errors.chofer.patente.message}</p>}
        </div>
      </div>
      <p>DATOS DE SOLICITANTE</p>
      <div>
        <div>
          <label>Solicitante</label>
          <input type="text" {...register("solicitante")} className="input" />
          {errors.solicitante && <p>{errors.solicitante.message}</p>}
        </div>
      </div>
      <div>
        <p>DATOS DEL VOLQUETE</p>
        <div>
          <label>Tipo de Volquete</label>
          <Controller
          control={control}
          name="logistica.tipoVolquete"
          render={({ field }) => (
            <SelectorTipo
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
          {errors.logistica?.tipoVolquete && <p>{errors.logistica.tipoVolquete.message}</p>}
        </div>
        <div>
          <label>Número de Volquete</label>
          <input
            type="text"
            {...register("logistica.nroVolquete")}
            className="input"
          />
          {errors.logistica?.nroVolquete && (
            <p>{errors.logistica.nroVolquete.message}</p>
          )}
        </div>
        <div>
          <label>Destino Final del Material</label>
          <input
            type="text"
            {...register("logistica.destinoFinal")}
            className="input"
          />
          {errors.logistica?.destinoFinal && (
            <p>{errors.logistica.destinoFinal.message}</p>
          )}
        </div>
      </div>
      <div>
        <p>DIRECCIÓN</p>
        <label>Si no posee altura especifique sus entrecalles</label>
        <div>
          <label>Calle</label>
          <Controller
          control={control}
          name="direccion.calle"
          render={({ field }) => (
            <SelectorCalles
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.direccion?.calle && (<p>{errors.direccion.calle.message}</p>)}
        </div>
        <div>
          <label>Entre calle 1 </label>
          <Controller
          control={control}
          name="direccion.entreCalle1"
          render={({ field }) => (
            <SelectorCalles
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.direccion?.entreCalle1 && (<p>{errors.direccion.entreCalle1.message}</p>)}
        </div>
        <div>
          <label>Entre calle 2 </label>
          <Controller
          control={control}
          name="direccion.entreCalle2"
          render={({ field }) => (
            <SelectorCalles
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.direccion?.entreCalle2 && (<p>{errors.direccion.entreCalle2.message}</p>)}
        </div>
        <div>
          <label>Altura</label>
          <input
            type="number"
            {...register("direccion.altura")}
            className="input"
          />
          {errors.direccion?.altura && <p>{errors.direccion.altura.message}</p>}
        </div>
        <div>
          <label>Lotes/Country/Etc</label>
          <input
            type="text"
            {...register("direccion.lotecountryetc")}
            className="input"
          />
          {errors.direccion?.lotecountryetc && (
            <p>{errors.direccion.lotecountryetc.message}</p>
          )}
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Terminar
      </button>
    </form>
  );
};

export default VolquetesForm;