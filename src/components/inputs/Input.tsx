import React, { useState } from 'react';
import '@material-ui/styles';
import { makeStyles } from '@material-ui/styles';
import TextField from '@mui/material/TextField';


const useStyles = makeStyles({
    int: {
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        width: '250px',
        borderRadius: '8px',
    }
});

const Input = () => {
    const classes = useStyles();
    const [data, setData] = useState('');
    const [dataError, setDataError] = useState(false);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setDataError(false);

        if (data == '') {
            setDataError(true);
        }

        if (data) {
            console.log(data);
        }
    }


    return(
        <form noValidate onSubmit={handleSubmit}>
            <TextField 
                onChange={(e) => setData(e.target.value)}
                className={classes.int}
                variant="standard"
                InputProps={{
                    disableUnderline: true,
                  }}
                InputLabelProps={{
                    style: { 
                        paddingLeft: '17px',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '18px',
                        color: '#959CA0',
                    }
                 }}
                label="email"
                error={dataError}
            />  
        </form>
    )
}

export default Input;