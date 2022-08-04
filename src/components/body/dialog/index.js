import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from "@mui/material/";
import { React, useState } from "react";
import DialogWindow from "./DialogWindow";

const Dialogs = () => {
  const [open, setOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [stack, setStack] = useState("");
  const [level, setLevel] = useState("");

  const handleStackChange = (event) => {
    setStack(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleIsSent = () => {
    setIsSent(true);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
    setIsSent(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: "#FF0099",
        minHeight: "600px",
        borderRadius: "15px",
        margin: "2px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <Button onClick={handleOpen}>Open dialog</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Stack</InputLabel>
              <Select
                native
                value={stack}
                onChange={handleStackChange}
                input={<OutlinedInput label="Stack" />}
              >
                <option aria-label="None" value="" />
                <option value={"HTML"}>HTML</option>
                <option value={"CSS"}>CSS</option>
                <option value={"JavaScript"}>JavaScript</option>
                <option value={"React"}>React</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Level</InputLabel>
              <Select
                value={level}
                onChange={handleLevelChange}
                input={<OutlinedInput label="Level" />}
              >
                <MenuItem value="">
                  <option aria-label="None" value="" />
                </MenuItem>
                <MenuItem value={"junior"}>junior</MenuItem>
                <MenuItem value={"mid"}>mid</MenuItem>
                <MenuItem value={"senior"}>senior</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleIsSent}>Ok</Button>
        </DialogActions>
      </Dialog>
      {isSent ? <DialogWindow stack={stack} level={level} /> : ""}
    </Grid>
  );
};

export default Dialogs;
