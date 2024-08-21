// import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Controller, useFormContext } from 'react-hook-form';

function SelectorFechaDesde() {

  const { control } = useFormContext()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name="fechaDesde"
        control={control}
        render={({ field, fieldState }) => (
          <MobileDatePicker
            defaultValue={dayjs().add(1, "day")}
            label="Desde"
            format='DD/MM/YYYY'
            disablePast
            shouldDisableDate={(date) => date.isBefore(dayjs(), 'day')}
            value={field.value}
            onChange={field.onChange}
            slotProps={{ textField: { error: !!fieldState.error, color: 'secondary' } }}
          />
        )}
      />
      
    </LocalizationProvider>
  );
}

function SelectorFechaHasta() {

  const { control } = useFormContext()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <Controller
        name="fechaHasta"
        control={control}
        render={({ field, fieldState }) => (
          <MobileDatePicker
            defaultValue={null}
            label="Hasta"
            format='DD/MM/YYYY'
            disablePast
            shouldDisableDate={(date) => date.isBefore(dayjs().add(1, "day"), 'day') || date.isAfter(dayjs().add(9, "day"))}
            value={field.value}
            onChange={field.onChange}
            slotProps={{ textField: { error: !!fieldState.error, color: 'secondary', helperText: fieldState.error?.message || ""} }}
          />
        )}
      />

    </LocalizationProvider>
  );
}

export { SelectorFechaDesde, SelectorFechaHasta }


// function SelectorFechaDesde({ value, onChange, error }) {

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <MobileDatePicker
//         defaultValue={dayjs().add(1, "day")}
//         label="Desde"
//         format='DD/MM/YYYY'
//         disablePast
//         shouldDisableDate={(date) => date.isBefore(dayjs(), 'day')}
//         value={value}
//         onChange={onChange}
//         slotProps={{ textField: { error: !!error, helperText: error?.message || "" } }}
//       // renderInput={(params) => (
//       //   <TextField {...params} error={!!error} helperText={error?.message || ""} />
//       // )}
//       />
//     </LocalizationProvider>
//   );
// }

// function SelectorFechaHasta({ value, onChange, error }) {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <MobileDatePicker
//         defaultValue={null}
//         label="Hasta"
//         format='DD/MM/YYYY'
//         disablePast
//         shouldDisableDate={(date) => date.isBefore(dayjs().add(1, "day"), 'day') || date.isAfter(dayjs().add(9, "day"))}
//         value={value}
//         onChange={onChange}
//         slotProps={{ textField: { error: !!error, helperText: error?.message || "" } }}
//         // renderInput={(params) => (
//         //   <TextField {...params} error={!!error} helperText={error?.message || ""} />
//         // )}
//       />
//     </LocalizationProvider>
//   );
// }

// export { SelectorFechaDesde, SelectorFechaHasta }