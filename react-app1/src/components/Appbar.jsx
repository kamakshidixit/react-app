import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";

export default function Appbar() {
  const email = localStorage.getItem("email");
  console.log("email data", email);

  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "lightblue", color: "black" }}
      >
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Contact Details
          </Typography>

          <IconButton
            style={{
              position: "absolute",
              margin: "0rem 92rem",
            }}
            component={Link}
            to="/userdetails"
          >
            <InfoIcon />
          </IconButton>

          <Button
            style={{ position: "absolute", margin: "0rem 96rem" }}
            component={Link}
            to="/home"
            color="inherit"
          >
            HOME
          </Button>
          <Button
            style={{ position: "absolute", margin: "0rem 100rem" }}
            component={Link}
            to="/"
            color="inherit"
          >
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
