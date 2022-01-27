import { Typography, CardContent, Card } from '@mui/material';
import { useStyles } from './MyPetCardStyle';
import { ReactComponent as Dog } from '../../assets/dog.svg';

export const MyPetCard = ({ name, type, breed, age }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} alignItems='center'>
          <Dog className={classes.ico} />
          {name}
        </Typography>
        <Typography  color="textSecondary" >
        <div className={classes.pos}>Type:</div>  {type}
        </Typography>
        <Typography color="textSecondary" variant="h3">
        <div className={classes.pos}>Breed:</div> {breed}
        </Typography>
        <Typography component="p" color="textSecondary" variant="body2">
         <div className={classes.pos}>Birth Data:</div>  {age}
        </Typography>
      </CardContent>
    </Card>
  );
};
