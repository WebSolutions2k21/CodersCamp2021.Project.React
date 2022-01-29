import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import { Layout, DatePicker, CustomButton } from '../components';
import { paths } from '../config/paths';

export const UserMyVisits = () => {
  return (
    <Layout showSideBar>
      <Grid
        container
        spacing={6}
        direction="row"
        justifyContent="space-around"
        alignItems="space-around"
        style={{ margin: '1%' }}
      >
        <Grid item>
          <DatePicker />
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            style={{ minHeight: '300px', width: '80%' }}
            justifyContent="space-between"
          >
            <Grid container>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <EventAvailableIcon sx={{ color: ['#eff0f4'] }} />
                </Grid>
                {/* TODO: Pobierać datę z API */}
                <Grid item>
                  <p>9 February 2022</p>
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                <Grid item>
                  <p>8:00 am</p>
                </Grid>
                <Grid item>
                  <p>KAPSEL | dr. Emilia Pączkowska</p>
                </Grid>
                <Grid item>
                  <CustomButton text="CANCEL" color="secondary" />
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Link to={paths.addVisit} style={{ textDecoration: 'none' }}>
                <CustomButton text="ADD NEW VISIT" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};
