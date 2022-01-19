import Button from '@mui/material/Button';

const BasicButtons = ({text}:any) => {
  return (
    <Button variant="contained">
      {text}
    </Button>
  );
}

export default BasicButtons;