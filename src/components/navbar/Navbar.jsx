import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

const pages = ["Learn", "Build", "Product", "Community"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: "none",
        marginTop: "15px",
      }}
    >
      <Container maxWidth={"xl"}>
        <Toolbar
          disableGutters
          sx={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          {/* Left-aligned Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "TurretMedium, sans-serif",
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              zIndex: 9,
            }}
          >
            Ether
          </Typography>

          {/* Spacer between Logo and Menu Bar */}
          <Box sx={{ flexGrow: 1 }}></Box>

          {/* Mobile Menu and Logo Layout */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" }, // Use flexbox layout
              alignItems: "center", // Vertically align both items
              justifyContent: "space-between", // Logo on left, menu on right
              width: "100%", // Make sure it takes full width
            }}
          >
            {/* Left-aligned Logo */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: "flex", md: "none" },
                fontFamily: "TurretMedium, sans-serif",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                zIndex: 9,
              }}
            >
              Ether
            </Typography>

            {/* Right-aligned Menu Icon */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "white" }}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "rgba(255, 255, 255, 1)",
                  display: "flex", // Display as flexbox
                  alignItems: "center", // Vertically center the content
                  justifyContent: "center", // Horizontally center the content (optional based on layout)
                  fontFamily: "WotkSansMedium, sans-serif",
                  fontSize: 17,
                }}
              >
                {page}
                <KeyboardArrowDownSharpIcon sx={{ ml: 1 }} variant="outlined" />
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
