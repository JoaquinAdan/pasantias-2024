import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useFormContext, Controller } from 'react-hook-form';

export default function SelectorVolquete() {

  const { control } = useFormContext()

  return (
    <>
      <Controller 
        name='TipoVolqueteId'
        control={control}
        render={({field, fieldState}) => (
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={tipos}
            sx={{ width: '100%' }}
            value={tipos.find(option => option.id === field.label)}
            onChange={(_, data) => field.onChange(data ? data.id : null)}
            isOptionEqualToValue={(option, value) => option.label === value.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tipo Volquete"
                color='secondary'
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />)}
          />
        )}
      />
    </>
  );
}

const tipos = [
  { label: 'Áridos', id: 1 },
  { label: 'Ramas', id: 2 }
];