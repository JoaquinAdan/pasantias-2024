import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

const Mapa = () =>{
    const { control, setValue, errors } = useFormContext();
    
    return(
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
              <ErrorMessage message={errors.Coordenadas.lat.message} />
            )}
            ,
            {errors.Coordenadas.lng && (
              <ErrorMessage message={errors.Coordenadas.lng.message} />
            )}
          </>
        )}
      </div>
    )
}

export default Mapa