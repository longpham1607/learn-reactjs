import { AccountCircle, Close, ShoppingCart } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import { Badge, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Login from "features/Auth/components/Login/index";
import Register from "features/Auth/components/Register";
import { logout } from "features/Auth/userSlice";
import { cartItemsCountSelector } from "features/Cart/selectors";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItemsCount = useSelector(cartItemsCountSelector);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleUserLogout = () => {
    const action = logout();
    dispatch(action);
    console.log("test");
  };

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigateToCartPage = () => {
    navigate("cart");
  };
  return (
    <div sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CodeIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Long Shop</Link>
          </Typography>

          <NavLink to="/todo">
            <Button color="inherit">Todo</Button>
          </NavLink>

          <NavLink to="/clock">
            <Button color="inherit">Clock</Button>
          </NavLink>

          {!isLoggedIn && (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}
          {isLoggedIn && (
            <IconButton color="inherit" onClick={handleMenuClick}>
              <AccountCircle />
            </IconButton>
          )}

          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleNavigateToCartPage}
          >
            <Badge badgeContent={cartItemsCount} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box>
                <Button
                  color="primary"
                  onClick={() => {
                    setMode(MODE.REGISTER);
                  }}
                >
                  Don't have an account. Register here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box>
                <Button
                  color="primary"
                  onClick={() => {
                    setMode(MODE.LOGIN);
                  }}
                >
                  Already have an account. Login here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>

        <DialogActions>
          <IconButton>
            <Close onClick={handleClose} />
          </IconButton>
        </DialogActions>
      </Dialog>
      {isLoggedIn && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={handleUserLogout}>Logout</MenuItem>
        </Menu>
      )}
    </div>
  );
}
