import { Container, Typography, Box } from "@mui/material";
import React from "react";
import CustomizedAccordions from "../components/Accordion";
import ImageCollage from "../components/ImageCollage";

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
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          blanditiis voluptate sit iusto. Commodi excepturi voluptate ea est
          corrupti obcaecati animi itaque, eum perspiciatis veniam reiciendis
          ipsa dolore maiores cumque!
        </Typography>
      </Box>
			<Box>
				<Typography variant="h6" component="h4" marginY={3}>Frequently Asked Questions</Typography>
				<CustomizedAccordions />
			</Box>
    </Container>
  );
};

export default Tour;
