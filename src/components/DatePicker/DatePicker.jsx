import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import { ThemeProvider } from '@mui/material/styles';
import PickersDay from '@mui/lab/PickersDay';
import isSameDay from 'date-fns/isSameDay';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import { DatePickerTheme } from '../../styles/themes/DatePickerTheme';

const CustomPickersDay = styled(PickersDay, { shouldForwardProp: (prop) => prop !== 'hasVisit' })(({ hasVisit }) => ({
  ...(hasVisit && {
    border: '1px solid #16bac6',
  }),
}));

export const DatePicker = ({ visits, date, selected, onChange }) => {
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
        <CalendarPicker
          selected={selected}
          visits={visits}
          date={date}
          minDate={new Date('January 1, 2021 00:00:00')}
          onChange={onChange}
          wrapperClassName="date-picker"
          sx={{ backgroundColor: '#fdc161' }}
          renderDay={renderDay}
          showDaysOutsideCurrentMonth
          renderInput={(params) => {
            return <TextField {...params} />;
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};
