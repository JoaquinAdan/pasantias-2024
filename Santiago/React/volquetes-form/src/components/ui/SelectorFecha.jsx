// import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TextField } from '@mui/material';

function SelectorFechaDesde({ value, onChange, error }) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        defaultValue={dayjs().add(1, "day")}
        label="Desde"
        format='DD/MM/YYYY'
        disablePast
        shouldDisableDate={(date) => date.isBefore(dayjs(), 'day')}
        value={value}
        onChange={onChange}
        renderInput={(params) => (
          <TextField {...params} error={!!error} helperText={error?.message || ""} />
        )}
      />
    </LocalizationProvider>
  );
}

function SelectorFechaHasta({ value, onChange, error }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        defaultValue={null}
        label="Hasta"
        format='DD/MM/YYYY'
        disablePast
        shouldDisableDate={(date) => date.isBefore(dayjs().add(1, "day"), 'day') || date.isAfter(dayjs().add(9, "day"))}
        value={value}
        onChange={onChange}
        renderInput={(params) => (
          <TextField {...params} error={!!error} helperText={error?.message || ""} />
        )}
      />
    </LocalizationProvider>
  );
}

export { SelectorFechaDesde, SelectorFechaHasta }