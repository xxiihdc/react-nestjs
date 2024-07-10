import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import * as authService from  '../../services/authService.js';
import LoadingOverlay from '../Common/LoadingOverlay'; 


const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true);
    authService.login({username, password}).then(resp => {
      setTimeout(() => {
        setLoading(false);
        navigate('/');
      }, 500);
      localStorage.setItem('accessToken', resp.data.data.token);
    }).catch(err => {
      
    })
  }

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
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              label="Username"
              value={username}
              onChange={handleUsernameChange}
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
              value={password}
              onChange={handlePasswordChange}
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

      {loading && <LoadingOverlay />}
    </div>
  );
};

export default LoginForm;
