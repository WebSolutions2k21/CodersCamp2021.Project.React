import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@mui/material/TextField';


const useStyles = makeStyles({
    int: {
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        width: '250px',
        borderRadius: '8px',
    },
    lbl: {
        fontSize: '16px',
        lineHeight: '18px',
        color: '#959CA0',
        marginLeft: '17px',
        marginRight: '17px'
    }
});

export const Input = (props:any) => {
    const {label, type} = props;
    const classes = useStyles();
    const [data, setData] = useState('');
    const [dataError, setDataError] = useState(false);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setDataError(false);

        if (data === '') {
            setDataError(true);
        }
    }

    return(
            <TextField 
                onSubmit={handleSubmit}
                onChange={(e) => setData(e.target.value)}
                className={classes.int}
                variant="standard"
                InputProps={{
                    className: classes.lbl,
                    disableUnderline: true
                  }}
                InputLabelProps={{
                    className: classes.lbl
                }}
                label={label}
                error={dataError}
                type={type}
            />  
    )
}