import { Grid, Card, Typography } from "@mui/material";
import { FaTimes } from "react-icons/fa";

const ToDoTasks = ({ tasks, onDelete }) => {
  return (
    <Grid
      item
      sx={{
        backgroundColor: "#DFFF00",
        borderRadius: "15px",
        margin: "2px",
        padding: "10px",
      }}
    >
      {tasks.map((task) => (
        <Card
          sx={{
            minWidth: 200,
            flexDirection: "column",
            borderRadius: "15px",
            margin: "10px",
            padding: "5px",
            backgroundColor: "tomato",
            textAlign: "center",
          }}
        >
          <Typography variant="body1" gutterBottom color="textSecondary">
            {task.text}
          </Typography>
          <Typography variant="body1" gutterBottom color="textSecondary">
            {task.day}
          </Typography>
          <Typography>
            <FaTimes
              className="fa"
              sx={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(task.id)}
            />
          </Typography>
        </Card>
      ))}
    </Grid>
  );
};

export default ToDoTasks;
