import React from "react";
import { Box, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import imagen1 from '../../assets/images/about/Grik-14-Photoroom.jpg'
const About = () => {
  return (
    <Box
      bgcolor="#000000"
      color="#fff"
      py={{ xs: 4, md: 8 }}
      px={{ xs: 2, md: 4 }}
      height="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Grid container spacing={4} alignItems="center">
        {/* Sección de Texto */}
        <Grid item xs={12} md={7} textAlign={{ xs: "center", md: "center" }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            color="#2FD510"
            gutterBottom
            fontSize={{ xs: "48px", sm: "64px", md: "96px" }}
            lineHeight={1.2}
          >
            ¿Quién es <br /> DJ Greek?
          </Typography>
          <Typography
            variant="body1"
            color="#FFFFFF"
            fontSize={{ xs: "16px", sm: "18px" }}
            px={{ xs: 2, md: 10 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit feugiat dignissim.
            Nam commodo aliquet dolor quis vestibulum. Sed quis porttitor arcu. Quisque commodo vel quam nec
            eleifend. Nam orci mi, egestas non ipsum non, imperdiet ultrices massa.
          </Typography>
        </Grid>

        {/* Sección de Imagen */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              maxWidth: { xs: "100%", sm: 345 },
              mx: "auto",
              borderRadius: 4,
              border: "2px solid #2FD510",
              backgroundColor: "#000000",
            }}
          >
            <CardMedia
              component="img"
              height="260"
              image={imagen1} // Reemplaza con la ruta a tu imagen
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
