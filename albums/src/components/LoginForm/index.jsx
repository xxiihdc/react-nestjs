import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
const LoginForm = () => {
  return (
    <div>
      <Box
        component="section"
        sx={{
          p: 2,
          width: "50%",
          border: "1px solid grey",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          LOGIN
        </Typography>
        <form>
          <div>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              color="secondary"
            />
          </div>
          <div>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default LoginForm;
