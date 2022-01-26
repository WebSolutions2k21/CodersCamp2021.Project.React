import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab/';
import { TextField } from '@mui/material/';

import { useStyles } from './InputStyle';


export const InputMonthAndYear = ({ label, value, setValue }) => {
    const classes = useStyles();

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                views={['year', 'month']}
                label={<div className={classes.lbl2}>{label}</div>}
                minDate={new Date('1990-01-01')}
                maxDate={Date.now()}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField 
                    className={classes.int} 
                    variant="standard" 
                    {...params} 
                    sx={{
                        svg: {
                            color:"#16BAC6", 
                            mb:"7px", 
                            mr:"3px"}
                      }}/>}
                InputProps={{
                    className: classes.lbl,
                    disableUnderline: true,
                    }}
            />
        </LocalizationProvider>
  );
}