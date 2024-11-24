// SlideCenter.tsx
import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

const cardData = {
  title: "DJ GREEK",
  description:
    "No se trata de cumplir expectativas; se trata de romperlas. Eso es Greek.",
  buttonText: "Conóceme",
};

const SlideCenter: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#FBFBFB",
        textAlign: "center",
        height: "100%", // Asegura que tome toda la altura disponible del slide
        overflow: "auto", // Habilita desplazamiento si es necesario
        padding: "0 16px",
      }}
    >
      <Card
        sx={{
          backgroundColor: "inherit",
          color: "#32CD32",
          fontFamily: "Jost, sans-serif",
          boxShadow: "none",
          padding: 4,
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <CardContent>
          <Typography
            variant="h1"
            fontWeight={900}
            sx={{
              fontSize: { xs: "50px", sm: "60px", md: "70px", lg: "80px" },
              lineHeight: 1.2, // Reduce el espacio entre líneas
            }}
            gutterBottom
          >
            {cardData.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#FBFBFB",
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
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
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
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
