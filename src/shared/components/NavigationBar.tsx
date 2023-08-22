import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const pages = [
  { label: "Date Picker", to: "/datePicker" },
  { label: "Infinite Scroll", to: "/infiniteScroll" },
];

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Box
                key={page.to}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Button sx={{color:'white'}} onClick={() => navigate(page.to)}>{page.label}</Button>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;
