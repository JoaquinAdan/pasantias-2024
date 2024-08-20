import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SelectorVolquete({ value, onChange, error }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={tipos}
      sx={{ width: 357 }}
      value={value}
      onChange={(_, data) => onChange(data)}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Tipo Volquete"
          color='secondary'
          error={!!error}
          helperText={error?.message}
        />)}
    />
  );
}

const tipos = [
  { label: 'Áridos', id: 1 },
  { label: 'Ramas', id: 2 }
];