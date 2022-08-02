import { Button, Grid, Slider, FormControlLabel, Switch } from "@mui/material/";
import { useState } from "react";

const Components = () => {
  const [text, setText] = useState("Dark");

  const handelChange = () => {
    setText("Light");
  };

  const mark = [
    { value: 0, label: "0" },
    { value: 100, label: "100" },
    { value: 200, label: "200" },
  ];
  return (
    <div>
      <Grid
        item
        xs={12}
        spacing={15}
        style={{
          backgroundColor: "#FF0099",
          minHeight: "600px",
          minWidth: "860px",
          borderRadius: "15px",
          margin: "2px",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <Grid
          item
          xs={12}
          spacing={15}
          style={{
            backgroundColor: "#33FF00",
            borderRadius: "15px",
            margin: "20px",
            padding: "50px",
            minHeight: "100px",
          }}
        >
          <Button variant="text" style={{ margin: "10px" }}>
            Text
          </Button>
          <Button variant="contained" style={{ margin: "10px" }}>
            Contained
          </Button>
          <Button
            variant="outlined"
            style={{ backgroundColor: "#E6FB04", opacity: 0.9, margin: "10px" }}
          >
            Outlined
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          spacing={15}
          style={{
            backgroundColor: "#33FF00",
            borderRadius: "15px",
            margin: "20px",
            padding: "50px",
            minHeight: "100px",
          }}
        >
          <Slider
            aria-label="Temperature"
            defaultValue={10}
            max={200}
            color="primary"
            step={10}
            marks={mark}
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid
          item
          xs={12}
          spacing={15}
          style={{
            backgroundColor: "#33FF00",
            borderRadius: "15px",
            margin: "20px",
            padding: "50px",
            minHeight: "100px",
          }}
        >
          <FormControlLabel
            control={<Switch defaultChecked onChange={handelChange} />}
            label={text}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Components;
