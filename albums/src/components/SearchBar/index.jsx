// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MessageIcon from "@mui/icons-material/Message";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";
import "./SearchBar.css";
import ButtonLink from "../ButtonLink/index";

const SearchBar = ({ setSearchQuery }) => {
  const navigate = useNavigate();

  const handleIconButtonClick = (path) => {
    console.log("navigate")
    navigate(path)
  }

  const loggedIn = () => {
    return true;
  }

  return (
    <div>
      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton
          type="submit"
          aria-label="search"
          style={{
            marginLeft: "4px",
          }}
        >
          <GitHubIcon style={{ fill: "black" }} />
        </IconButton>

        <ButtonLink
          to="/"
          activeColor="red"
          inactiveColor="default"
          variant="outlined"
          activeVariant="contained"
        >
          Home
        </ButtonLink>

        <ButtonLink
          to="/create"
          activeColor="blue"
          inactiveColor="default"
          variant=""
          activeVariant="contained"
        >
          Create
        </ButtonLink>
        <TextField
          id="search-bar"
          className="text"
          // onChange={handleInputChange}
          label="Search everything"
          variant="outlined"
          placeholder="Search..."
          size="small"
          fullWidth
          InputProps={{
            style: {
              borderRadius: "50px",
            },
          }}
        />
        <IconButton
          type="submit"
          aria-label="search"
          style={{
            marginLeft: "4px",
          }}
        >
          <NotificationsIcon style={{ fill: "grey" }} />
        </IconButton>

        <IconButton
          type="submit"
          aria-label="search"
          style={{
            marginLeft: "4px",
          }}
        >
          <MessageIcon style={{ fill: "grey" }} />
        </IconButton>

        <IconButton
          onClick={() => handleIconButtonClick("/login")}
          type="submit"
          aria-label="search"
          style={{
            marginLeft: "4px",
          }}
        >
          <AccountCircleIcon style={{ fill: "red" }} />
        </IconButton>

        <IconButton
          type="submit"
          aria-label="search"
          style={{
            marginLeft: "4px",
          }}
        >
          <ExpandMoreIcon style={{ fill: "red" }} />
        </IconButton>
      </Stack>
    </div>
  );
};

export default SearchBar;
