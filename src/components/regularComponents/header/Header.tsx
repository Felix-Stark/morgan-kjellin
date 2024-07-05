import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemText from "@mui/material/ListItemText";


const pagesLeft = [
  { label: "STARTSIDA", path: "/" },
  { label: "OM MIG", path: "/about" },
];

const pagesRight = [
  { label: "ARBETA MED MIG", path: "/arbeta-med-mig" },
  { label: "KONTAKT", path: "/contact" },
];

export const Header = () => {
  const [anchorElArbeta, setAnchorElArbeta] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openArbeta, setOpenArbeta] = useState(false);
  const navigate = useNavigate();

  const handleOpenArbetaMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElArbeta(event.currentTarget);
  };

  const handleCloseArbetaMenu = () => {
    setAnchorElArbeta(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNestedListClick = () => {
    setOpenArbeta(!openArbeta);
  };

  return (
    <AppBar position="static" sx={{ background: "#F6F6F6", width: "100%" }}>
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <Toolbar disableGutters={true}>
          {/* Mobilmenyknapp */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Öppna meny">
              <IconButton
                sx={{ m: 0 }}
                size="large"
                edge="end"
                color="inherit"
                aria-label="Öppna meny"
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ color: "#BA1D37" }} />
              </IconButton>
            </Tooltip>
            <Drawer
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            >
              <List
                sx={{ width: 250, bgcolor: 'background.paper' }}
                component="nav"
              >
                {pagesLeft.map((pageL) => (
                  <ListItemButton
                    key={pageL.label}
                    component={Link}
                    to={pageL.path}
                    onClick={handleDrawerToggle}
                  >
                    <ListItemText primary={pageL.label} />
                  </ListItemButton>
                ))}
                <ListItemButton onClick={handleNestedListClick}>
                  <Link to="/arbeta-med-mig" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemText primary="ARBETA MED MIG" />
                  </Link>
                  {openArbeta ? <ExpandLess sx={{ marginLeft: 'auto' }} /> : <ExpandMore sx={{ marginLeft: 'auto' }} />}
                </ListItemButton>
                <Collapse in={openArbeta} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 6 }} component={Link} to="/optimummind" onClick={handleDrawerToggle}>
                      <ListItemText primary="OptimumMind" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 6 }} component={Link} to="/sorg" onClick={handleDrawerToggle}>
                      <ListItemText primary="Sorg" />
                    </ListItemButton>
                  </List>
                </Collapse>
                {pagesRight.slice(1).map((pageR) => (
                  <ListItemButton
                    key={pageR.label}
                    component={Link}
                    to={pageR.path}
                    onClick={handleDrawerToggle}
                  >
                    <ListItemText primary={pageR.label} />
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </Box>
          {/* Desktopmeny */}
          <Box sx={{ display: { xs: "none", md: "flex" }, paddingRight: "1.5rem" }}>
            {pagesLeft.map((pageL) => (
              <Button
                key={pageL.label}
                color="inherit"
                sx={{ textTransform: "none", color: "#BA1D37", fontWeight: "bold" }}
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
            <Button
              color="inherit"
              sx={{ textTransform: "none", color: "#1E1E1E", fontWeight: "bold" }}
              onClick={handleOpenArbetaMenu} component={Link} to="/arbeta-med-mig"
            >
              ARBETA MED MIG
            </Button>
            <Menu
              anchorEl={anchorElArbeta}
              open={Boolean(anchorElArbeta)}
              onClose={handleCloseArbetaMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleCloseArbetaMenu} component={Link} to="/optimummind">
                OptimumMind
              </MenuItem>
              <MenuItem onClick={handleCloseArbetaMenu} component={Link} to="/sorg">
                Sorg
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pagesRight.slice(1).map((pageR) => (
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
