import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SelectorCalles from "./SelectorCalles";
import SelectorTipo from "./SelectorTipo";
import dayjs from "dayjs";
import { useMutation } from "@tanstack/react-query";
import Mapa from "./Mapa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const schema = yup.object().shape({
  EmpresaUsuario: yup.string().required("Usuario requerido"),
  EmpresaCodigo: yup.string().required("Código requerido"),
  DiaEntrega: yup.date().required("Fecha de entrega requerida"),
  DiaRetiro: yup.date().required("Fecha de retiro requerida"),
  NombreChofer: yup.string().required("Nombre requerido"),
  DNIChofer: yup.string().required("DNI requerido"),
  PatenteCamion: yup.string().required("Patente requerida"),
  NombreSolicitante: yup.string().required("Solicitante requerido"),
  TipoVolqueteId: yup.string().required("Tipo requerido"),
  NumVolquete: yup.string().required("Número de volquete requerido"),
  DestinoFinal: yup.string().required("Destino final requerido"),
  Calle: yup.string().required("Direccion requerida"),
  Altura: yup.number().nullable(), //--Tal vez no tiene altura?
  EntreCalle: yup.object().shape({
    Item1: yup.string().nullable(),
    Item2: yup.string().nullable(),
  }),
  LoteCountry: yup.string(), //Tal vez no viven en country
  Coordenadas: yup.object().shape({
    lat: yup.number(),
    lng: yup.number(),
  }),
});

const submitData = async (data) => {
  const response = await fetch("/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Respuesta de la red no exitosa");
  }

  return response.json();
};

const now = dayjs();
const formattedDate = now.format("YYYY-MM-DD");

const VolquetesForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      EmpresaUsuario: "",
      EmpresaCodigo: "",
      DiaEntrega: formattedDate,
      DiaRetiro: formattedDate,
      NombreChofer: "",
      DNIChofer: "",
      PatenteCamion: "",
      NombreSolicitante: "",
      TipoVolqueteId: "",
      NumVolquete: "",
      DestinoFinal: "",
      Calle: "",
      Altura: null,
      EntreCalle: { Item1: null, Item2: null },
      LoteCountry: "",
      Coordenadas: { lat: null, lng: null },
    },
    resolver: yupResolver(schema),
  });


  const [popupVisible, setPopupVisible] = useState(false);

  const mutation = useMutation({
    mutationFn: submitData,
    onSuccess: () => {
      console.log("Data registrada correctamente");
    },
    onError: (error) => {
      console.error("Error de registro:", error);
    },
  });
  console.log(watch());

  const submitForm = (DataFinal) => {
    if (Object.keys(errors).length === 0) {
      const finalData = { ...watch(), ...DataFinal };
      mutation.mutate(finalData);
      setPopupVisible(false);
    } else {
      console.log("Formulario no válido");
    }
  };

  const onSubmit = () => {
    // abro popUp
    setPopupVisible(true);
  };


  const handleCoordsChange = (coords) => {
    setValue("Coordenadas", coords);
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
              name="DiaEntrega"
              defaultValue={dayjs().format("YYYY-MM-DD")}
              render={({ field }) => (
                <input
                  type="date"
                  {...field}
                  className="rounded-sm bg-white bg opacity-60"
                />
              )}
            />
            {errors.DiaEntrega && (
              <p className="text-red-200 text-sm">
                {errors.DiaEntrega.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label className="text-white text-lg p-1">Fecha de Retiro</label>
          <div className="p-1">
            <Controller
              control={control}
              name="DiaRetiro"
              render={({ field }) => (
                <input
                  type="date"
                  {...field}
                  className="rounded-sm bg-white bg opacity-60"
                />
              )}
            />
            {errors.DiaRetiro && (
              <p className="text-red-200 text-sm">{errors.DiaRetiro.message}</p>
            )}
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
              {...register("NombreChofer")}
              className="w-full rounded-sm bg-white bg opacity-60"
            />
            {errors.NombreChofer && (
              <p className="text-red-200 text-sm">
                {errors.NombreChofer.message}
              </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <label className="text-white text-lg">DNI del Chofer</label>
            <input
              type="text"
              {...register("DNIChofer")}
              className="rounded-sm bg-white bg opacity-60"
            />
            {errors.DNIChofer && (
              <p className="text-red-200 text-sm">{errors.DNIChofer.message}</p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <label className="text-white text-lg">Patente del Chofer</label>
            <input
              type="text"
              {...register("PatenteCamion")}
              className="rounded-sm bg-white bg opacity-60"
            />
            {errors.PatenteCamion && (
              <p className="text-red-200 text-sm">
                {errors.PatenteCamion.message}
              </p>
            )}
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
            {...register("NombreSolicitante")}
            className="rounded-sm bg-white bg opacity-60"
          />
          {errors.NombreSolicitante && (
            <p className="text-red-200 text-sm">
              {errors.NombreSolicitante.message}
            </p>
          )}
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
            name="TipoVolqueteId"
            render={({ field }) => (
              <SelectorTipo value={field.value} onChange={field.onChange} />
            )}
          />
          {errors.TipoVolqueteId && (
            <p className="text-red-200 text-sm">
              {errors.TipoVolqueteId.message}
            </p>
          )}
        </div>
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">Número de Volquete</label>
          <input
            type="text"
            {...register("NumVolquete")}
            className="rounded-sm bg-white bg opacity-60"
          />
          {errors.NumVolquete && (
            <p className="text-red-200 text-sm">{errors.NumVolquete.message}</p>
          )}
        </div>
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">
            Destino Final del Material
          </label>
          <input
            type="text"
            {...register("DestinoFinal")}
            className="rounded-sm bg-white bg opacity-60"
          />
          {errors.DestinoFinal && (
            <p className="text-red-200 text-sm">
              {errors.DestinoFinal.message}
            </p>
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
            name="Calle"
            render={({ field }) => (
              <SelectorCalles
                name="Calle"
                value={field.value}
                setValue={setValue}
              />
            )}
          />
          {errors.Calle && (
            <p className="text-red-200 text-sm">{errors.Calle.message}</p>
          )}
        </div>
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">Entre calle 1 </label>
          <Controller
            control={control}
            name="EntreCalle.Item1"
            render={({ field }) => (
              <SelectorCalles
                name="EntreCalle.Item1"
                value={field.value}
                setValue={setValue}
              />
            )}
          />
          {errors.EntreCalle?.Item1 && (
            <p className="text-red-200 text-sm">
              {errors.EntreCalle.Item1.message}
            </p>
          )}
        </div>
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">Entre calle 2 </label>
          <Controller
            control={control}
            name="EntreCalle.Item2"
            render={({ field }) => (
              <SelectorCalles
                name="EntreCalle.Item2"
                value={field.value}
                setValue={setValue}
              />
            )}
          />
          {errors.EntreCalle?.Item2 && (
            <p className="text-red-200 text-sm">
              {errors.EntreCalle.Item2.message}
            </p>
          )}
        </div>
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">Altura</label>
          <input
            type="number"
            {...register("Altura")}
            className="rounded-sm bg-white bg opacity-60"
          />
          {errors.Altura && (
            <p className="text-red-200 text-sm">{errors.Altura.message}</p>
          )}
        </div>
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">Lotes/Country/Etc</label>
          <input
            type="text"
            {...register("LoteCountry")}
            className="rounded-sm bg-white bg opacity-60"
          />
          {errors.LoteCountry && (
            <p className="text-red-200 text-sm">{errors.LoteCountry.message}</p>
          )}
        </div>
      </div>
      <div id="map">
        <Controller
          name="Coordenadas"
          control={control}
          render={({ field }) => (
            <Mapa
              onCoordsChange={(coords) => setValue("Coordenadas", coords)}
            />
          )}
        />
        {errors.Coordenadas && (
          <>
            {errors.Coordenadas.lat && (
              <p className="text-red-200 text-sm">
                {errors.Coordenadas.lat.message}
              </p>
            )}
            ,
            {errors.Coordenadas.lng && (
              <p className="text-red-200 text-sm">
                {errors.Coordenadas.lng.message}
              </p>
            )}
          </>
        )}
      </div>
      <div className="justify-self-center">
        <AlertDialog>
          <AlertDialogTrigger className="bg-white rounded border-violet-950 hover:bg-violet-500 text-xl font-semibold mb-2 p-2 ">
            Siguente
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Ingrese Datos de Usuario</AlertDialogTitle>
              <AlertDialogDescription>
              <div className="grid grid-cols-1 gap-1 p-1">
                <div className="flex items-center gap-4">
                  <label className="text-white text-lg">Usuario</label>
                  <input
                    type="text"
                    {...register("EmpresaUsuario")}
                    className="w-full rounded-sm bg-white bg opacity-60"
                  />
                  {errors.EmpresaUsuario && (
                    <p className="text-red-200 text-sm">
                      {errors.EmpresaUsuario.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <label className="text-white text-lg">Código</label>
                  <input
                    type="text"
                    {...register("EmpresaCodigo")}
                    className="w-full rounded-sm bg-white bg opacity-60"
                  />
                  {errors.EmpresaCodigo && (
                    <p className="text-red-200 text-sm">
                      {errors.EmpresaCodigo.message}
                    </p>
                  )}
                </div>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setPopupVisible(false)}>Volver</AlertDialogCancel>
              <AlertDialogAction      onClick={() => {
                  const DataFinal = {
                    EmpresaUsuario: watch("EmpresaUsuario"),
                    EmpresaCodigo: watch("EmpresaCodigo"),
                  };
                  submitForm(DataFinal);
                }}
              >Terminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </form>
  );
};

export default VolquetesForm;
