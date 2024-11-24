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
            Greek, con su estilo en el House y la versatilidad del ‘Open Format’, se destaca como un DJ capaz de crear experiencias memorables y adaptarse a cualquier evento. Su distintivo verde neón evoca energía y renovación, electrificando cada ambiente y dejando una huella inolvidable. Formado en prestigiosas instituciones como Virtuality Audio y Beat System, y guiado por mentores de renombre como Bass Kleph y Travis Emmons, Greek consolida su lugar en la escena. Su lanzamiento internacional Shot con Kibbutz Records en Portugal refuerza su impacto global. Con más de seis años de experiencia en eventos privados y clubes, Greek transforma cada escenario en un espectáculo único, donde su energía y el verde neón invitan a disfrutar al máximo.
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
