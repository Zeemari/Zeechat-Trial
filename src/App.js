import React, {useEffect, useState} from 'react'
import {Box} from '@mui/system'
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  Paper: {
           marginTop: theme.spacing(9),
           alignItems: "center",
           display: "flex",
           width: "70",
           flexDirection: "column",
  },
  form: {
          marginTop: theme.spacing(2),
          width: "70",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem"

  },
  submit: {
          margin: theme.spacing(3, 0, 2),
  },
  }));

export default function LoginPage() {
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [phone, setPhone]=useState("")
  const classes = useStyles();
   
  const handleSubmit = e => {
    e.preventDefault();
    if(!name || !email || !phone) return alert("All fields must be filled")
    console.log({email, name, phone})
    setName('');
    setEmail('');
    setPhone('');
  }
  return (

    <Box Container flex
        component ="main" 
        sx={{ py: "4rem", backgroundColor: "#dee2e6", color: "#34b7a7"}}
        px= {{ xs: 3, sm: 4, md: "6rem"}}>
      <Typography display="block" variant='body1'>
        Sign in
      </Typography>
        <form className={classes.form} onSubmit={handleSubmit}> 
         <TextField variant='outlined' label='Name' value={name} onChange={e=>setName(e.target.value)}/>
         <TextField variant='outlined' label='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
         <TextField variant='outlined' label='Phone Number' value={phone} onChange={e=>setPhone(e.target.value)}/>
         <Button type="submit" variant="contained">Submit</Button>
         </form>

       {name && email && phone && (<Typography>
          Your Name is {name} with email {email} and Phone Number {phone}
        </Typography>)} 
    </Box>
  );
}
