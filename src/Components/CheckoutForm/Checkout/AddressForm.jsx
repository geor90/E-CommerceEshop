import React, { useEffect } from 'react'

import { TextField, Grid, Button } from '@material-ui/core';

import { useForm, FormProvider } from 'react-hook-form';

import { Link } from 'react-router-dom';





const AddressForm = ({checkoutToken, next}) => {

const methods= useForm ();


useEffect(() => {

}, []);


  return (



<FormProvider {...methods}>

    <form onSubmit= {methods.handleSubmit((data) => next({...data}) )} noValidate autoComplete="off">
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField required name="First name" label="First Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField required label="Last Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField required label="Address line 1" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Address line 2" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField required label="Zip/Postal Code" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField required label="City" variant="outlined" fullWidth />
        </Grid>




      </Grid>

      <br />
      <Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="contained" to="/cart" size="large" color="secondary">Back to Cart</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button input type="submit" value="Submit" variant="contained" size="large" color="primary" >Next</Button>
        </ Grid>
      </Grid>
    </form>
    </FormProvider>





  );
};

export default AddressForm;
