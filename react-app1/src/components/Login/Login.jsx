import React, { useState } from "react";
import { Email, VisibilityOff, LockOutlined } from "@material-ui/icons";
import {
  TextField,
  Card,
  Avatar,
  CssBaseline,
  CardContent,
  Typography,
  InputAdornment,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    width: 350,
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(62),
    [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  icon: {
    background: "red",
    marginLeft: theme.spacing(22),
    marginTop: theme.spacing(2),
  },
}));

const UserData = [
  {
    name: "kamakshi",
    email: "kama@gmail.com",
    password: "pass",
    role: "Trainee",
    Grade: "B",
  },
  {
    name: "Louis",
    email: "kamakshi@gmail.com",
    password: "password",
    role: "HR",
    Grade: "A",
  },
];

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    UserData.forEach((element) => {
      if (email === element.email && password === element.password) {
        localStorage.setItem("email", email);
        localStorage.setItem("name", element.name);
        localStorage.setItem("role", element.role);
        localStorage.setItem("grade", element.Grade);
        setEmail("");
        setPassword("");
        props.history.push("/home");
      } else {
        setErrorMessage("invalid user");
        // alert('Invalid user')
      }
    });
  };

  return (
    <>
      <div className={classes.main}>
        <CssBaseline />
        <Card open aria-labelledby="form-dialog-title">
          <Avatar className={classes.icon}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h4" align="center">
            Login
          </Typography>
          <CardContent>
            <form onSubmit={submitForm}>
              <div>
                <TextField
                  required="true"
                  fullWidth
                  id="outlined-required"
                  label="Email Address"
                  variant="outlined"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <br />
              <div>
                <TextField
                  required="true"
                  type="password"
                  fullWidth
                  id="outlined-required"
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VisibilityOff />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              &nbsp;&nbsp;
              <div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
                {errorMessage && <div> {errorMessage} </div>}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;
