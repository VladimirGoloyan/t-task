import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import locale from "../../shared/locale";

const Home = () => {
  return (
    <Container>
      <Paper sx={{p: 2, m: 2}}>
        <Typography>{locale.welcome}</Typography>
      </Paper>
    </Container>
  );
};

export default Home;
