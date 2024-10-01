import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

function Navbar() {
  const pages = ["Learn", "Build", "Product", "Community"];

  // For desktop menu
  const [anchorEl, setAnchorEl] = useState(null); // For desktop menu options dropdown
  const [selectedPage, setSelectedPage] = useState(null); // Track selected desktop page

  // For mobile menu
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null); // For mobile dropdown

  // Handle click for desktop menu button
  const handleDesktopMenuClick = (event, page) => {
    setAnchorEl(event.currentTarget);
    setSelectedPage(page); // Set the selected page
  };

  // Handle closing of desktop dropdown
  const handleDesktopMenuClose = () => {
    setAnchorEl(null);
    setSelectedPage(null);
  };

  // Handle click for mobile menu icon
  const handleMobileMenuClick = (event) => {
    setMobileAnchorEl(event.currentTarget); // Set anchor element for mobile menu
  };

  // Handle closing of mobile dropdown
  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null); // Close the mobile dropdown
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
              display: { xs: "flex", md: "none" }, // Show only on mobile view
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
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
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMobileMenuClick} // Trigger mobile menu open on click
              sx={{ color: "white" }}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>

            {/* Dropdown menu for mobile */}
            <Menu
              anchorEl={mobileAnchorEl}
              open={Boolean(mobileAnchorEl)} // Open only mobile menu
              onClose={handleMobileMenuClose} // Close the menu on clicking outside or an item
              PaperProps={{
                style: {
                  width: "200px", // Adjust menu width if needed
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleMobileMenuClose}>
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <React.Fragment key={page}>
                <Button
                  onClick={(event) => handleDesktopMenuClick(event, page)}
                  sx={{
                    my: 2,
                    color: "rgba(255, 255, 255, 1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "WorkSansMedium, sans-serif",
                    fontSize: 17,
                  }}
                >
                  {page}
                  <KeyboardArrowDownSharpIcon sx={{ ml: "5px" }} />
                </Button>

                {/* Options dropdown for the clicked page in desktop */}
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && selectedPage === page} // Open only for the selected page
                  onClose={handleDesktopMenuClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleDesktopMenuClose}>Option 1</MenuItem>
                  <MenuItem onClick={handleDesktopMenuClose}>Option 2</MenuItem>
                  <MenuItem onClick={handleDesktopMenuClose}>Option 3</MenuItem>
                </Menu>
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
