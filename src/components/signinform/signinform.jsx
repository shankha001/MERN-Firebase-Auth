import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { IoLogoFacebook } from "react-icons/io";

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

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} className={classes.paper}>
        <CssBaseline />

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"New User? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.icons}
          >
            <Grid item xs={3}>
              <FcGoogle
                style={{
                  cursor: "pointer",
                }}
                onClick={signInWithGoogle}
              />
            </Grid>
            <Grid item xs={3}>
              <FaTwitter
                style={{
                  color: "#00acee",
                  cursor: "pointer",
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <IoLogoFacebook
                style={{
                  color: "#3b5998",
                  cursor: "pointer",
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <FaGithub
                style={{
                  cursor: "pointer",
                }}
              />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}