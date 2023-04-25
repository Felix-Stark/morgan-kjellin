import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton, { Container }  from "@mui/material";
import Typography from '@mui/material/Typography';
import Menu from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material";
import MenuItem from "@mui/material";
import { Link } from "react-router-dom";


const pagesLeft = [ "STARTSIDA", "OM MIG", "ARBETA MED MIG" ];
const pagesRight = [ "BLOG", "KONTAKT", "BOKA MÖTE" ];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  



  return (
    <AppBar position="static" sx={{ background: "#F6F6F6",  }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pagesLeft.map((pageL) => (
              <Button
                key={pageL}
                color="inherit"
                sx={{ textTransform: "none", color: "#BA1D37", fontWeight: "bold" }}
                component={Link}
                to={`/${pageL}`}
              >
                {pageL}
              </Button>
            ))}
          </Box>
          {/* <Box sx={{ display:"flex"  }}> */}
            <Link to="/" style={{ textDecoration: "none",display: "flex" ,flexDirection: "row"  }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#BA1D37", fontWeight: "700", fontSize: 36 }}>
                MORGAN&nbsp; 
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"#1E1E1E", fontWeight: "700", fontSize: 36 }}>
                KJELLIN
              </Typography>
            </Link>
          {/* </Box> */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pagesRight.map((pageR) => (
              <Button
                key={pageR}
                color="inherit"
                sx={{ textTransform: "none", color: "#1E1E1E", fontWeight: "bold" }}
                component={Link}
                to={`/${pageR}`}
              >
                {pageR}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
