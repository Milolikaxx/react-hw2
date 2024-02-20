import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{ backgroundColor: "#191919" }}>
        <Toolbar style={{}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={navigateToHome}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
              height="40px"
              alt="icon"
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
