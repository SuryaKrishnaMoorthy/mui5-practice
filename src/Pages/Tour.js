import { Container, Typography, Box } from "@mui/material";
import React from "react";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginY={5}>
        Explore the world in Vegas!
      </Typography>
      <Box sx={{ display: "flex" }}>
        <img
          src="https://thumbs.dreamstime.com/b/las-vegas-welcome-sign-nevada-usa-to-dusk-149286875.jpg"
          alt=""
          width={600}
          height={325}
        />
      </Box>
    </Container>
  );
};

export default Tour;
