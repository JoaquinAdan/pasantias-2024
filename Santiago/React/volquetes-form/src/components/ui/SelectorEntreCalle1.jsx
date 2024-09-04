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
        name='EntreCalle.Item1'
        control={control}
        render={({ field, fieldState }) => (
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={tipos}
            sx={{ width: 357 }}
            value={tipos.find((option => option.id === field.label))}
            onChange={(_, data) => field.onChange(data ? data.id : null)}
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
    </>
  );
}