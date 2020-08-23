import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import { auth } from "../../firebase/firebase.utils";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  icons: {
    marginTop: "10px",
    textAlign: "center",
    padding: "10px 20px",
    fontSize: "30px",
  },
}));

export default function Resetpass() {
  const classes = useStyles();
  const [status, setStatus] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const forgotPassword = (e) => {
    e.preventDefault();
    const { email } = details;
    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        //Reset Link Sent
        setStatus(true);
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} className={classes.paper}>
        <CssBaseline />

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        {status ? (
          <Typography component="h1" variant="h5">
            Reset Link Sent Successfully!
          </Typography>
        ) : (
          <form className={classes.form} onSubmit={forgotPassword} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              value={details.email}
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send Reset Link
            </Button>
          </form>
        )}
      </Paper>
    </Container>
  );
}
