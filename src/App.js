import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import TwitterIcon from "./icons/twitter.png";
import FaceBookIcon from "./icons/facebook.png";
import GoogleIcon from "./icons/google.png";
import InIcon from "./icons/in.png";
import "./App.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {500: "#039585"},
  },
});

const GreenCheckbox = withStyles({
  root: {
    color: "#039585",
    "&$checked": {
      color: "#039585"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    fontWeight: "bold",
    height: "50px",
    width: "100%",
    fontSize: "10px",
    [theme.breakpoints.up('sm')]: {
      width: "95%",
    },
  },
  submit2: {
    margin: theme.spacing(3, 0, 2),
  },
  label: {
    fontSize: 15
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <div>
        <h1 style={{fontWeight: "bold", fontSize: 40, marginBottom: 0 }}>WELCOME</h1>
        <h3 style={{marginTop: 0 }}>Please Log In to your account</h3>
        </div>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Button
                style={{
                  backgroundColor: "#3C5A99"
                }}
                type="submit"
                variant="contained"
                className={classes.submit}
              >
                <img  src={FaceBookIcon} style={{height: 35, width: 35, marginLeft: 10}}/>
                Login with FaceBook
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                style={{
                  backgroundColor: "#F42D2D"
                }}
                type="submit"
                variant="contained"
                className={classes.submit}
              >
              <img  src={GoogleIcon} style={{height: 35, width: 35, marginRight: 9}}/>
                Login with Google
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Button
                style={{
                  backgroundColor: "#22A7F7",
                }}
                type="submit"
                variant="contained"
                className={classes.submit}
              >
              <img  src={TwitterIcon} style={{height: 35, width: 35, marginRight: 10}}/>
                Login with <br/>
                Twitter
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                style={{
                  backgroundColor: "#0077B5",
                }}
                type="submit"
                variant="contained"
                className={classes.submit}
              >
              <img  src={InIcon} style={{height: 35, width: 35, marginRight: 9}}/>
                Login with LinkedIn
              </Button>
            </Grid>
          </Grid>
          <Typography component="h3" variant="h7">
            -OR-
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              style={{ backgroundColor: "#F7F7F7", fontWeight: "bold" }}
              className={classes.margin}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Adress"
              name="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{
                shrink: true
              }}
            />
            <ThemeProvider theme={theme}>
            <TextField
              style={{
                backgroundColor: "#F7F7F7",
                float: "left",
                fontWeight: "bold"
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              label="Password"
              autoComplete="current-password"
              InputLabelProps={{
                shrink: true
              }}
            />
            </ThemeProvider>
            <Grid container>
              <Grid item>
                <FormControlLabel
                  style={{ color: "grey" }}
                  classes={{
                    label: classes.label
                  }}
                  control={<GreenCheckbox value="checkedG" />}
                  label="Remember me"
                />
              </Grid>
              <Grid item xs>
                <p style={{ float: "right", fontSize: "unset", color: "grey" }}>
                  Forgot password
                </p>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <Button
                  style={{
                    backgroundColor: "#E2E3E3",
                    color: "black",
                    fontWeight: "bold"
                  }}
                  type="submit2"
                  variant="contained"
                  className={classes.submit2}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  style={{
                    backgroundColor: "#039585",
                    color: "white",
                    fontWeight: "bold",
                    float: "right"
                  }}
                  type="submit2"
                  variant="contained"
                  className={classes.submit2}
                >
                  Log in
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

export default App;