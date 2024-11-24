// SlideCenter.tsx
import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

interface SlideCenterProps {
  backgroundImage: string;
}

const cardData = {
  title: "DJ GREEK",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit feugiat dignissim. Nam commodo aliquet dolor quis vestibulum. Sed quis porttitor arcu.",
  buttonText: "Conóceme",
};

const SlideCenter: React.FC<SlideCenterProps> = ({ backgroundImage }) => {
  return (
    <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#FBFBFB",
    textAlign: "center",
    height: "70vh",
    padding: "0 16px", // Padding para evitar contenido pegado en móviles
  }}
>
  <Card
    sx={{
      backgroundColor: "inherit",
      color: "#32CD32",
      fontFamily: "Jost, sans-serif",
      boxShadow: "none",
      padding: 4,
      maxWidth: "800px", // Limita el ancho en pantallas grandes
      width: "100%", // Se ajusta en móviles
    }}
  >
    <CardContent>
      <Typography
        variant="h1"
        fontWeight={900}
        sx={{
          fontSize: { xs: "70px", sm: "80px", md: "90px", lg: "100px" },
        }}
        gutterBottom
      >
        {cardData.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#FBFBFB",
          fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
          mb: 4,
          fontWeight: 500,
        }}
      >
        {cardData.description}
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FBFBFB",
          color: "#121212",
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "bold",
          borderRadius: "10px",
          ":hover": { backgroundColor: "#ddd" },
        }}
      >
        {cardData.buttonText}
      </Button>
    </CardContent>
  </Card>
</Box>
  );
};

export default SlideCenter;
