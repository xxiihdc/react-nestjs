import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import * as authService from "../../services/authService.js";
import LoadingOverlay from "../Common/LoadingOverlay";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordHasValue, setPasswordHasValue] = useState(false);
  const navigate = useNavigate();

  const makeAnimationStartHandler = (stateSetter) => (e) => {
    console.log("animation");
    const autoFilled = !!e.target?.matches("*:-webkit-autofill");
    if (e.animationName === "mui-auto-fill") {
      stateSetter(autoFilled);
    }

    if (e.animationName === "mui-auto-fill-cancel") {
      stateSetter(autoFilled);
    }
  };

  const handleUsernameChange = (event) => {
    setPasswordHasValue(true);
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordHasValue(true);
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    authService
      .login({ username, password })
      .then((resp) => {
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 500);
        localStorage.setItem("accessToken", resp.data.data.token);
      })
      .catch((err) => {});
  };

  return (
    <div className="mt-6 w-full">
      <Box
        component="section"
        sx={{
          p: 2,
          width: "100%",
          border: "1px solid grey",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className="flex justify-around"
          sx={{ fontWeight: "bold" }}
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-6">
            <TextField
              label="Username"
              value={username}
              inputProps={{
                onAnimationStart:
                  makeAnimationStartHandler(setPasswordHasValue),
              }}
              InputLabelProps={{
                shrink: passwordHasValue,
              }}
              onChange={handleUsernameChange}
              variant="outlined"
              fullWidth
              margin="normal"
              color="secondary"
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Password"
              type="password"
              value={password}
              inputProps={{
                onAnimationStart:
                  makeAnimationStartHandler(setPasswordHasValue),
              }}
              InputLabelProps={{
                shrink: passwordHasValue,
              }}
              onChange={handlePasswordChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <div className="flex items-center justify-end mb-3">
            <Link href="#" underline="hover">
              Forgot Password?
            </Link>
          </div>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            fullWidth
            size="large"
            className="mb-6"
            sx={{ borderRadius: "16px" }}
          >
            Login
          </Button>
        </form>
      </Box>

      {loading && <LoadingOverlay />}
    </div>
  );
};

export default LoginForm;
