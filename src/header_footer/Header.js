import { AppBar, Toolbar, Typography, IconButton  } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          b
        </Typography>

        <IconButton color="inherit">
            <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;