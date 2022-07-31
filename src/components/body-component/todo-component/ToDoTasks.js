import {
  Box,
  Grid,
  Card,
  Container,
  CardContent,
  Typography,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";

const ToDoTasks = ({ tasks, onDelete }) => {
  return (
    <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
      <Container sx={{ py: 8 }} maxWidth="md">
        {tasks.map((task) => (
          <Grid key={task.id} item xs={12} sm={6} md={4}>
            <Card
              sx={{ maxWidth: 220, height: "100%", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1 }}></CardContent>
              <Typography variant="body1" gutterBottom color="textSecondary">
                {task.text}
              </Typography>
              <Typography variant="body1" gutterBottom color="textSecondary">
                {task.day}
              </Typography>
              <Typography>
                <FaTimes
                  className="fa"
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => onDelete(task.id)}
                />
              </Typography>
            </Card>
          </Grid>
        ))}
      </Container>
    </Box>
  );
};

export default ToDoTasks;
