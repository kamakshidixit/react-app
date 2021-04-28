import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Grid,
} from "@material-ui/core";

const initialContactState = {
  id: null,
  name: "",
  address: "",
  gender: "",
  dob: "",
  description: "",
};

export default function AddList(props) {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState(initialContactState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getData = (key) => {
    return contact.hasOwnProperty(key) ? contact[key] : "";
  };

  const setData = (key, value) => {
    return setContact({ ...contact, [key]: value });
  };

  return (
    <div align="left">
      <Button
        variant="outlined"
        color="primary"
        style={{ marginTop: "20px" }}
        onClick={handleClickOpen}
      >
        ADD CONTACT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your contact details</DialogContentText>

          <form onSubmit={(e) => props.onSubmit(e, contact)}>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  name="name"
                  id="name"
                  label="Name"
                  type="text"
                  value={getData("name")}
                  onChange={(e) => setData("name", e.target.value)}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  name="address"
                  id="name"
                  label="Address"
                  type="text"
                  value={getData("address")}
                  onChange={(e) => setData("address", e.target.value)}
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    margin="normal"
                    aria-label="gender"
                    style={{ display: "initial" }}
                    name="gender"
                    value={getData("gender")}
                    onChange={(e) => setData("gender", e.target.value)}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="dob"
                  id="name"
                  type="date"
                  value={getData("dob")}
                  onChange={(e) => setData("dob", e.target.value)}
                  autoComplete="current-date"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  name="description"
                  id="name"
                  label="Description"
                  type="text"
                  value={getData("description")}
                  onChange={(e) => setData("description", e.target.value)}
                  fullWidth
                />
              </Grid>

              <Grid item style={{ marginTop: 16 }}>
                <DialogActions>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    onClick={handleClose}
                  >
                    Submit
                  </Button>
                  <Button
                    color="primary"
                    onClick={handleClose}
                    variant="contained"
                  >
                    Cancel
                  </Button>
                </DialogActions>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
