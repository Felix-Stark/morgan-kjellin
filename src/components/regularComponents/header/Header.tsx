import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";

<<<<<<< HEAD
const pagesLeft = [
  { label: "STARTSIDA", path: "/" },
  { label: "OM MIG", path: "/about" },
  { label: "ARBETA MED MIG", path: "/arbeta-med-mig" },
];
const pagesRight = [
  { label: "BLOGG", path: "/blog" },
  { label: "KONTAKT", path: "/contact" },
  { label: "BOKA MÖTE", path: "/meeting" },
=======

const pagesLeft = [ 
  {label: "STARTSIDA", path: "/"},
  {label: "OM MIG", path: "/about"},
];
const pagesRight = [ 
  {label: "ARBETA MED MIG", path: "/arbeta-med-mig"},
  // {label: "BLOGG", path: "/blog"},
  {label: "KONTAKT", path: "/contact"},
  // {label: "BOKA MÖTE", path: "/meeting"},
>>>>>>> dev
];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
<<<<<<< HEAD
    <AppBar
      position="static"
      sx={{ backgroundColor: "bgWhite.main", minHeight: "5vh" }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
=======
    <AppBar  position="static" sx={{background: "#F6F6F6", width:"100%" }}>
      <Container  maxWidth="lg" sx={{display:"flex", justifyContent: "center", alignContent: "center" }}>
        <Toolbar disableGutters={true}>
        <Box sx={{ display: { xs: "flex", md: "none"} }}>
>>>>>>> dev
            <Tooltip title="Öppna meny">
              <IconButton
                sx={{ m: 0 }}
                size="large"
                edge="end"
                color="inherit"
                aria-label="Öppna meny"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon sx={{ color: "#BA1D37" }} />
              </IconButton>
            </Tooltip>
            <Drawer
              id="nav-menu"
              PaperProps={{ sx:{display:"flex",alignItems:"center",paddingTop:"5vh", width:"50vw",}}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pagesLeft.map((pageL) => (
                <MenuItem
                  sx={{marginBottom:"2vh"}}
                  key={pageL.label}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={pageL.path}
                >
                  {pageL.label}
                </MenuItem>
              ))}
              {pagesRight.map((pageR) => (
                <MenuItem
                  sx={{marginBottom:"2vh"}}
                  key={pageR.label}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={pageR.path}
                >
                  {pageR.label}
                </MenuItem>
              ))}
<<<<<<< HEAD
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
=======
            </Drawer>
            </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, paddingRight: "1.5rem" }}>
>>>>>>> dev
            {pagesLeft.map((pageL) => (
              <Button
                key={pageL.label}
                color="inherit"
<<<<<<< HEAD
                sx={{
                  textTransform: "none",
                  color: "#BA1D37",
                  fontWeight: "bold",
                  paddingRight: "1.5rem",
                }}
=======
                sx={{ textTransform: "none", color: "#BA1D37", fontWeight: "bold" }}
>>>>>>> dev
                component={Link}
                to={pageL.path}
              >
                {pageL.label}
              </Button>
            ))}
          </Box>
          <Box>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "#BA1D37",
                  fontWeight: "700",
                  fontSize: 30,
                }}
              >
                MORGAN&nbsp;
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "#1E1E1E",
                  fontWeight: "700",
                  fontSize: 30,
                }}
              >
                KJELLIN
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, paddingLeft: "1.5rem" }}
          >
            {pagesRight.map((pageR) => (
              <Button
                key={pageR.label}
                color="inherit"
                sx={{
                  textTransform: "none",
                  color: "#1E1E1E",
                  fontWeight: "bold",
                }}
                component={Link}
                to={pageR.path}
              >
                {pageR.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
