import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import { ThemeProvider } from '@mui/material/styles';
import PickersDay from '@mui/lab/PickersDay';
import isSameDay from 'date-fns/isSameDay';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import { DatePickerTheme } from '../../styles/themes/DatePickerTheme';

import { useState, useEffect } from 'react';

const CustomPickersDay = styled(PickersDay, { shouldForwardProp: (prop) => prop !== 'hasVisit' })(({ hasVisit }) => ({
  ...(hasVisit && {
    border: '1px solid #16bac6',
  }),
}));

export const DatePicker = ({ visits }) => {
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState('');

  useEffect(() => {
    visits.filter((visit) => (visit.data = new Date(visit.date.seconds * 1000 + visit.date.nanoseconds / 1000000)));
    console.log('visits', visits);
    const info = visits.find((e) => {
      console.log('tablica', e);
      console.log('value', date);
      console.log('is the same', isSameDay(date, e));
      isSameDay(date, e);
    });

    console.log('info', info);

    setSelected(info);
  }, [date]);

  const renderDay = (date, selectedDates, pickersDayProps) => {
    if (!date) {
      return <PickersDay {...pickersDayProps} />;
    }

    const hasVisit = visits.find((e) => isSameDay(date, e));

    return <CustomPickersDay {...pickersDayProps} hasVisit={!!hasVisit} />;
  };

  return (
    <ThemeProvider theme={DatePickerTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <h3>{date.toString()}</h3>
        <CalendarPicker
          visits={visits}
          date={date}
          minDate={new Date('January 1, 2021 00:00:00')}
          onChange={(newDate) => setDate(newDate)}
          wrapperClassName="date-picker"
          sx={{ backgroundColor: '#fdc161' }}
          renderDay={renderDay}
          showDaysOutsideCurrentMonth
          renderInput={(params) => {
            return <TextField {...params} />;
          }}
        />
        <h4>{selected && selected.toString()}</h4>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
