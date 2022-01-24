import Grid from '@mui/material/Grid';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import { Layout, DatePicker, CustomButton } from '../components';

export const UserMyVisits = () => {
  return (
    <Layout>
      <Grid
        container
        spacing={12}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
        style={{ height: '100vh' }}
      >
        <Grid item spacing={2}>
          <DatePicker />
        </Grid>
        <Grid item spacing={2}>
          <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
            <EventAvailableIcon sx={{ color: ['#eff0f4'] }} />
            {/* TODO: Pobierać datę z API */}
            <p>9 February 2022</p>
          </Grid>
          <Grid container spacing={2}>
            <p>8:00 am</p>
            <p>KAPSEL | dr. Emilia Pączkowska</p>
            <CustomButton text="CANCEL" color="secondary" />
          </Grid>
          <CustomButton text="ADD NEW VISIT" />
        </Grid>
      </Grid>
    </Layout>
  );
};
