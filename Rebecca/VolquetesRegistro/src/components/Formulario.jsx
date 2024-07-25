import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SelectorCalles from "./SelectorCalles";
import { SelectorTipo } from "./SelectorTipo";
import Mapa from "./Mapa";
import dayjs from "dayjs";
import { useMutation } from '@tanstack/react-query';

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
  //altura: yup.number().required("altura requerida"), --Tal vez no tiene altura?
  entreCalle1: yup.string().required("Direccion requerida"),
  entreCalle2: yup.string().required("Direccion requerida"),
  loteCountry: yup.string().required("Información requerida"),
});

const submitData = async (data) => {
  const response = await fetch('/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};


const now = dayjs();
const formattedDate = now.format("YYYY-MM-DD");

const VolquetesForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: submitData,
    onSuccess: () => {
      console.log('Data submitted successfully');
    },
    onError: (error) => {
      console.error('Submission error:', error);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-3 auto-rows-auto gap-3 pt-1 p-4 space-y-4 bg-black shadow-md rounded bg-opacity-40 "
    >
      <div>
        <p className="text-xl font-semibold mb-4 text-white pt-4">FECHAS</p>
        <div>
          <label className="text-white text-lg p-1">Fecha de Entrega</label>
          <div className="p-1">
            <Controller
              control={control}
              name="entrega"
              defaultValue={dayjs().format("YYYY-MM-DD")}
              render={({ field }) => (
                <input
                  type="date"
                  {...field}
                  className="rounded-sm bg-white bg opacity-60"
                />
              )}
            />
            {errors.entrega && <p>{errors.entrega.message}</p>}
          </div>
        </div>
        <div>
          <label className="text-white text-lg p-1">Fecha de Retiro</label>
          <div className="p-1">
            <Controller
              control={control}
              name="retiro"
              defaultValue=""
              render={({ field }) => (
                <input
                  type="date"
                  {...field}
                  className="rounded-sm bg-white bg opacity-60"
                />
              )}
            />
            {errors.retiro && <p>{errors.retiro.message}</p>}
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold mb-4 text-white">
          DATOS DEL CHOFER
        </p>
        <div className="grid grid-cols-1 gap-1 p-1">
          <div className="flex items-center gap-4">
            <label className="text-white text-lg">Nombre del Chofer</label>
            <input
              type="text"
              defaultValue=""
              {...register("chofer.nombre")}
              className="w-full rounded-sm bg-white bg opacity-60"
            />
            {errors.chofer?.nombre && (
              <p className="text-red-600 text-sm">
                {errors.chofer.nombre.message}
              </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <label className="text-white text-lg">DNI del Chofer</label>
            <input
              type="text"
              defaultValue=""
              {...register("chofer.dni")}
              className="rounded-sm bg-white bg opacity-60"
            />
            {errors.chofer?.dni && <p>{errors.chofer.dni.message}</p>}
          </div>
          <div className="flex items-center gap-4">
            <label className="text-white text-lg">Patente del Chofer</label>
            <input
              type="text"
              defaultValue=""
              {...register("chofer.patente")}
              className="rounded-sm bg-white bg opacity-60"
            />
            {errors.chofer?.patente && <p>{errors.chofer.patente.message}</p>}
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold mb-4 text-white">
          DATOS DE SOLICITANTE
        </p>
        <div className="flex items-center gap-4">
          <label className="text-white text-lg">Nombre y Apellido</label>
          <input
            type="text"
            defaultValue=""
            {...register("solicitante")}
            className="rounded-sm bg-white bg opacity-60"
          />
          {errors.solicitante && <p>{errors.solicitante.message}</p>}
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold mb-4 text-white">
          DATOS DEL VOLQUETE
        </p>
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">Tipo de Volquete</label>
          <Controller
            control={control}
            name="logistica.tipoVolquete"
            defaultValue=""
            render={({ field }) => (
              <SelectorTipo value={field.value} onChange={field.onChange} />
            )}
          />
          {errors.logistica?.tipoVolquete && (
            <p>{errors.logistica.tipoVolquete.message}</p>
          )}
        </div>
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">Número de Volquete</label>
          <input
            type="text"
            defaultValue=""
            {...register("logistica.nroVolquete")}
            className="rounded-sm bg-white bg opacity-60"
          />
          {errors.logistica?.nroVolquete && (
            <p>{errors.logistica.nroVolquete.message}</p>
          )}
        </div>
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">
            Destino Final del Material
          </label>
          <input
            type="text"
            defaultValue=""
            {...register("logistica.destinoFinal")}
            className="rounded-sm bg-white bg opacity-60"
          />
          {errors.logistica?.destinoFinal && (
            <p>{errors.logistica.destinoFinal.message}</p>
          )}
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold mb-2 text-white">DIRECCIÓN</p>
        <label className="text-white text-lg p-1">
          Si no posee altura especifique sus entrecalles
        </label>
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">Calle</label>
          <Controller
            control={control}
            name="direccion.calle"
            defaultValue=""
            render={({ field }) => (
              <SelectorCalles value={field.value} onChange={field.onChange} />
            )}
          />
          {errors.direccion?.calle && <p>{errors.direccion.calle.message}</p>}
        </div>
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">Entre calle 1 </label>
          <Controller
            control={control}
            name="direccion.entreCalle1"
            defaultValue=""
            render={({ field }) => (
              <SelectorCalles value={field.value} onChange={field.onChange} />
            )}
          />
          {errors.direccion?.entreCalle1 && (
            <p>{errors.direccion.entreCalle1.message}</p>
          )}
        </div>
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">Entre calle 2 </label>
          <Controller
            control={control}
            name="direccion.entreCalle2"
            defaultValue=""
            render={({ field }) => (
              <SelectorCalles value={field.value} onChange={field.onChange} />
            )}
          />
          {errors.direccion?.entreCalle2 && (
            <p>{errors.direccion.entreCalle2.message}</p>
          )}
        </div>
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">Altura</label>
          <input
            type="number"
            defaultValue=""
            {...register("direccion.altura")}
            className="rounded-sm bg-white bg opacity-60"
          />
          {errors.direccion?.altura && <p>{errors.direccion.altura.message}</p>}
        </div>
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">Lotes/Country/Etc</label>
          <input
            type="text"
            defaultValue=""
            {...register("direccion.lotecountryetc")}
            className="rounded-sm bg-white bg opacity-60"
          />
          {errors.direccion?.lotecountryetc && (
            <p>{errors.direccion.lotecountryetc.message}</p>
          )}
        </div>
      </div>
      <div id="map">
        <Mapa/>
      </div>
      <div></div>
      <div className="justify-self-center">
        <button
          type="submit"
          className="bg-white rounded border-violet-950 hover:bg-violet-500 text-xl font-semibold mb-2 p-2 "
        >
          TERMINAR
        </button>
      </div>
    </form>
  );
};

export default VolquetesForm;
