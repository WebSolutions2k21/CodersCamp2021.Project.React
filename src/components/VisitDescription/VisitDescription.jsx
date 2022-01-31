//import {useState} from 'react';
import { Box, Grid } from '@mui/material/';

import { CustomButton } from '../Button/CustomButton';
import { useStyles } from './Style';
import { DescriptionModal } from "./DescriptionModal";

export const VisitDescription = ({ time, owner, type, breed, description }) => {
  const classes = useStyles();

  return (
    <Box sx={{ width: { xs: '250px', sm: '400px', md: '700px', lg: '800px' } }}>
      <Grid container className={classes.all}>
        <Grid item md={8} xs={12}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.title} mb={1}>
              Visit at {time}
            </Grid>
            <Grid item>
              <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
                <Grid item md={5} xs={12}>
                  <span className={classes.bold}>OWNER: </span>
                  {owner}
                </Grid>
                <Grid item md={4} xs={12}>
                  <span className={classes.bold}>TYPE: </span>
                  {type}
                </Grid>
                <Grid item md={3} xs={12}>
                  <span className={classes.bold}>BREED: </span>
                  {breed}
                </Grid>
              </Grid>
            </Grid>
            <Grid item alignItems="flex-start" nowrap mb={2}>
              <span className={classes.bold}>DESCRIPTION: </span>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={4} xs={12}>
          <Grid container direction="column" sx={{ minWidth: '160px' }} alignItems="center">
            <Grid item p={2}>
            <DescriptionModal />
              {/* <CustomButton color="primary" size="small" text="DESCRIPTION" /> */}
            </Grid>
            <Grid item p={2}>
              <CustomButton color="primary" size="small" text="CLOSE VISIT" />
            </Grid>
            <Grid item p={2}>
              <CustomButton color="secondary" size="small" text="CANCEL VISIT" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
