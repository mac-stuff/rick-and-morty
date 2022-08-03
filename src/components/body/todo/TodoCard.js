import { Grid, Card, Typography } from "@mui/material";
import { FaTimes } from "react-icons/fa";

const TodoCard = ({ tasks, onDelete }) => {
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
              onClick={() => onDelete(task.id)}
              sx={{ color: "red", cursor: "pointer" }}
            />
          </Typography>
        </Card>
      ))}
    </Grid>
  );
};

export default TodoCard;
