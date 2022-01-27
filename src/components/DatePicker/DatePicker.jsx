import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import { ThemeProvider } from '@mui/material/styles';

import { DatePickerTheme } from '../../styles/themes/DatePickerTheme';

import { useState } from 'react';

export const DatePicker = () => {
  const [date, setDate] = useState(new Date());

  return (
    <ThemeProvider theme={DatePickerTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
      </LocalizationProvider>
    </ThemeProvider>
  );
};
