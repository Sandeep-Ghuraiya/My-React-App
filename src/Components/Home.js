import React, { useState } from 'react';

//redux
import {useDispatch} from 'react-redux'
import { addUser } from '../Redux/Action'

//Material-UI
import { TextField, 
         Button,
        } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(4),
            width: '25ch',
            marginTop: 80,
            marginBottom: 50
          },
        },
        container: {
          display: 'flex',
          flexWrap: 'wrap',
          margin: 'auto'
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
        button: {
          marginBottom: 100,
          margin: "auto"
        }
    }));

const initialDetials = {
    firstName:'',
    lastName:'',
    date:'',
    mobile:'',
    address:'',
    email:'',
    password:''
}

export default function FormPropsTextFields() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [ userDetails, setUserDetails ] = useState(initialDetials)
  

  const handleOnChange = (e) => {
        setUserDetails({...userDetails, [e.target.name] : e.target.value})
  }

  

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(addUser(userDetails))
  }

  console.log("User", userDetails);

  return (
    <div className={classes.root} >
      <div className={classes.container}>
          <div>
            <TextField 
            id="fname"
            name="firstName" 
            label="FirstName" 
            type="text"
            value={userDetails.firstName}
            onChange = {handleOnChange} />

            <TextField id="lname" name="lastName" label="LastName" type="text" value={userDetails.lastName} onChange = {handleOnChange} />

            <TextField
            id="date"
            label="D.O.B."
            type="date"
            name="date"
            defaultValue=""
            className={classes.textField}
            value={userDetails.date}
            onChange = {handleOnChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
            
            <TextField id="mobile" name="mobile" label="Mobile No." type="tel" value={userDetails.mobile} onChange = {handleOnChange}/>

            <TextField id="address" name="address" label="Address" type="text" value={userDetails.address} onChange = {handleOnChange}/>

            <TextField id="email" name="email" label="Email Address" type="email" value={userDetails.email} onChange = {handleOnChange}/>

            <TextField
              id="standard-password-input"
              name="password"
              label="Password"
              type="password"
              value={userDetails.password}
              onChange = {handleOnChange}
            />
            
          </div>
          <Button variant="contained" color="primary" className={classes.button}
          onClick={handleClick}>
            Submit
          </Button>
      </div>
    </div>
  );
}

{/* <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /> 
    <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />*/}

