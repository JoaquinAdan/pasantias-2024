// import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';

export default function SelectorCalle({ nombre, calles }) {

  const tipos = calles.map((calle) => {
    return { label: calle.descripcion, id: calle.id }
  })

  const { control } = useFormContext()

  return (
    <>
      <Controller
        name='calle'
        control={control}
        render={({ field, fieldState }) => (
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={tipos}
            sx={{ width: 357 }}
            value={field.value}
            onChange={(_, data) => field.onChange(data)}
            isOptionEqualToValue={(option, value) => option.label === value.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label={nombre}
                error={!!fieldState.error}
                color='secondary'
                helperText={fieldState.error?.message}
              />)}
          />
        )}
      />
      {/* <label className="text-red-600 text-sm">{errors.fechaHasta?.message}</label> */}
    </>
  );
}