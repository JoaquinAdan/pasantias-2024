import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SelectorCalle({ nombre, calles, value, onChange, error }) {

  const tipos = calles.map((calle) => {
    return { label: calle.descripcion, id: calle.id }
  })

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
          label={nombre} 
          color='secondary'
          helperText={error?.message}
        />)}
    />
  );
}