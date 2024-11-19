import React from "react";
import { Box, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

const About = () => {
  return (
    <Box bgcolor="#121212" color="#fff" py={8} px={4} height={"100vh"} display={"flex"} alignItems={"center"}>
      <Grid container spacing={4} alignItems="center">
        {/* Sección de Texto */}
        <Grid item xs={12} md={7} textAlign={"center"}>
          <Typography variant="h2" fontWeight="bold" color="#2FD510" gutterBottom fontSize={"96px"}>
            ¿Quién es <br /> DJ Greek?
          </Typography>
          <Typography variant="body1" color="#FFFFFF" fontSize={"18px"} pr={10} pl={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit feugiat dignissim.
            Nam commodo aliquet dolor quis vestibulum. Sed quis porttitor arcu. Quisque commodo vel quam nec
            eleifend. Nam orci mi, egestas non ipsum non, imperdiet ultrices massa.
          </Typography>
        </Grid>

        {/* Sección de Imagen */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              maxWidth: 345,
              mx: "auto",
              borderRadius: 4,
              border: "2px solid #2FD510",
              backgroundColor: "#1a1a1a"
            }}
          >
            <CardMedia
              component="img"
              height="260"
              image="/path/to/your-image.jpg" // Reemplaza con la ruta a tu imagen
              alt="DJ Equipment"
              sx={{ borderRadius: 2 }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" fontWeight="bold" color="#2FD510">
                GREEK
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
